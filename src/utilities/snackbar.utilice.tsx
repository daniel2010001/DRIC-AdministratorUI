import CustomSnackbarProvider from "@/components/Snackbar/Snackbar.component";
import { ProviderContext, useSnackbar, VariantType } from "notistack";

let useSnackbarRef: ProviderContext;
export const SnackbarConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

/**
 * Objeto con las funciones de utilidad para el Snackbar
 */
export const SnackbarUtilities = {
  /** Función para mostrar un toast con una variante personalizada */
  toast(msg: string, variant: VariantType = "default") {
    console.log(msg);
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
  /** Función para mostrar un toast con variante de éxito */
  success(msg: string) {
    this.toast(msg, "success");
  },
  /** Función para mostrar un toast con variante de error */
  error(msg: string) {
    this.toast(msg, "error");
  },
  /** Función para mostrar un toast con variante de información */
  info(msg: string) {
    this.toast(msg, "info");
  },
  /** Función para mostrar un toast con variante de advertencia */
  warning(msg: string) {
    this.toast(msg, "warning");
  },
};
