import * as Yup from "yup";
import { FieldConfig } from "@/models";
import { countHtmlLines } from ".";

/** Función para crear el esquema base de Yup en función del tipo de <T> */
const createYupSchemaFromType = <T>(
  key: keyof T,
  value: T[keyof T]
): Yup.Schema<any> => {
  if (typeof value === "string") {
    return Yup.string();
  }
  if (typeof value === "number") {
    return Yup.number();
  }
  if (typeof value === "boolean") {
    return Yup.boolean();
  }
  if (value instanceof Date) {
    return Yup.date();
  }
  if (Array.isArray(value)) {
    const itemType = createYupSchemaFromType(key, value[0]);
    return Yup.array().of(itemType);
  }
  if (typeof value === "object" && value !== null) {
    const shape = Object.keys(value).reduce((acc, subKey) => {
      acc[subKey] = createYupSchemaFromType(key, (value as any)[subKey]);
      return acc;
    }, {} as Record<string, Yup.Schema<any>>);
    return Yup.object().shape(shape).typeError("Seleccione una opción válida");
  }
  return Yup.mixed();
};

/** Función para aplicar configuraciones adicionales desde FieldConfig */
const applyFieldConfigToSchema = <T>(
  schema: Yup.Schema<any>,
  config: FieldConfig
): Yup.Schema<any> => {
  let configuredSchema = schema;

  if (config.required) {
    configuredSchema = configuredSchema.required("Este campo es requerido");
  }

  if (config.type === "editor") {
    configuredSchema = configuredSchema.test(
      "maxLines",
      "El número máximo de líneas es de " + (config.maxLength || 5),
      (value) => {
        return countHtmlLines(value as string) <= (config.maxLength || 5);
      }
    );
    if (config.minLength !== undefined) {
      configuredSchema = configuredSchema.test(
        "minLines",
        "El número mínimo de líneas es de " + (config.minLength || 0),
        (value) => {
          return countHtmlLines(value as string) <= (config.minLength || 0);
        }
      );
    }
  }
  if (config.maxLength !== undefined) {
    if (schema instanceof Yup.StringSchema) {
      configuredSchema = (configuredSchema as Yup.StringSchema).max(
        config.maxLength,
        `El tamaño máximo de caracteres es de ${config.maxLength}`
      );
    } else if (schema instanceof Yup.ArraySchema) {
      configuredSchema = (configuredSchema as Yup.ArraySchema<any, any>).max(
        config.maxLength,
        `El número máximo de carreras es de ${config.maxLength}`
      );
    }
  }
  if (config.minLength !== undefined) {
    if (schema instanceof Yup.StringSchema) {
      configuredSchema = (configuredSchema as Yup.StringSchema).min(
        config.minLength,
        `El tamaño mínimo de caracteres es de ${config.minLength}`
      );
    } else if (schema instanceof Yup.ArraySchema) {
      configuredSchema = (configuredSchema as Yup.ArraySchema<any, any>).min(
        config.minLength,
        `El número mínimo de carreras es de ${config.minLength}`
      );
    }
  }
  if (config.type === "tel" && schema instanceof Yup.StringSchema) {
    configuredSchema = (configuredSchema as Yup.StringSchema).matches(
      /^[0-9]{7,8}$/,
      "Ingrese un número de teléfono válido"
    );
  }

  if (config.type === "optional" && schema instanceof Yup.StringSchema) {
    configuredSchema = (configuredSchema as Yup.StringSchema).nullable().notRequired();
  };

  return configuredSchema;
};

/** Función para crear el esquema de un objeto de tipo <T> basado en FieldConfig */
export const createObjectSchema = <T>(
  config: {
    [K in keyof T]: FieldConfig;
  },
  template: T
): Yup.ObjectSchema<any> => {
  const shape = Object.keys(config).reduce((acc, key) => {
    const fieldConfig = config[key as keyof T] as FieldConfig;
    const fieldType = template[key as keyof T];
    const baseSchema = createYupSchemaFromType(key as keyof T, fieldType);
    acc[key] = applyFieldConfigToSchema(baseSchema, fieldConfig);
    return acc;
  }, {} as Record<string, Yup.Schema<any>>);

  return Yup.object().shape(shape);
};
