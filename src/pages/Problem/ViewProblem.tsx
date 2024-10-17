import { createCustomProblem } from "@/adapters";
import { BackArrowIcon } from "@/assets/Icons/back-arrow-icon";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { ApplicantType, inicialProblem } from "@/models";
import { searchProblem } from "@/services";
import { SnackbarUtilities, formatDate_dddd_DD_MMMM_YYYY } from "@/utilities";
import { Field, Label } from "@headlessui/react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { TipTap } from "./components";

export function ViewProblem() {
  const { loading, callEndpoint: loadProblem } = useFetchAndLoader();
  const idProblem = useParams().id || 0;
  const [problem, setProblem] = useState(inicialProblem);

  useAsync(
    async () => loadProblem(searchProblem(idProblem)),
    (data) => setProblem(createCustomProblem(data))
  );

  if (!loading && !problem.id) {
    SnackbarUtilities.error("No se encontró la problemática");
    return <Navigate to=".." />;
  }

  return (
    <div className="mx-auto max-w-screen-lg border-2 border-light-primary dark:border-dark-primary rounded-lg bg-light-secondary dark:bg-dark-secondary">
      <div className="px-4 pb-6 max-w-7xl mx-auto sm:px-6 sm:pb-8 md:px-8 flex flex-col relative">
        {/* buttons */}
        <div className="flex justify-between px-4 pt-4">
          <Link
            to=".."
            className="bg-[#6B7280] text-[14px] text-white px-4 py-1 mb-2 rounded-md mt-4 flex items-center"
          >
            <BackArrowIcon className="inline-block me-1 size-" />
            <span>Atr&aacute;s</span>
          </Link>
          <button className="bg-[#093958] hover:bg-[#34617a] text-[14px] text-white px-7 py-1 mb-2 rounded-md mt-4">
            Descargar
          </button>
        </div>

        <h1 className="font-semibold text-xl md:text-2xl md:max-w-screen-md mx-auto p-8 pb-0 text-center text-light-primary dark:text-dark-primary">
          {problem.title}
        </h1>
        <span className="text-sm text-light-secondary dark:text-dark-secondary ms-auto">
          Actualizado el {formatDate_dddd_DD_MMMM_YYYY(new Date(problem.updatedAt))}
        </span>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 border-b border-light-secondary dark:border-dark-secondary pb-4 md:pb-12 mt-4 md:mt-8 md:grid-cols-3">
          <div className="col-span-full">
            <h2 className="text-base font-semibold leading-7 grid-cols-4 text-ligth-primary dark:text-dark-primary">
              PLANTEAMIENTO GENERAL
            </h2>
          </div>

          <div className="col-span-full grid grid-cols-1 gap-y-4 px-6 py-4 light-primary dark:light-primary rounded-lg border border-light-secondary dark:border-dark-secondary">
            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                NOMBRE DE LA INSTITUCI&Oacute;N O MUNICIPIO:
              </Label>
              <div className="col-span-2 pb-2">
                <p className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap">
                  {problem.applicant.name}
                </p>
              </div>
            </Field>

            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                CARRERA{problem.careers.length > 1 ? "S" : ""}:
              </Label>
              <div className="col-span-2 pb-2">
                <ul
                  className={`text-light-primary dark:text-dark-primary${
                    problem.careers.length > 1 ? " list-disc pl-4" : ""
                  }`}
                >
                  {problem.careers.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </Field>

            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                PLANTEAMIENTO DEL PROBLEMA:
              </Label>
              <div className="col-span-2 pb-2">
                <p className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap">
                  {problem.approach}
                </p>
              </div>
            </Field>

            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                CAUSAS QUE PRODUCE EL PROBLEMA:
              </Label>
              <div className="col-span-2 pb-2">
                <TipTap
                  content={problem.causes}
                  className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap"
                />
              </div>
            </Field>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 border-b border-light-secondary dark:border-dark-secondary pb-4 md:pb-12 mt-4 md:mt-12 md:grid-cols-3">
          <div className="col-span-full">
            <h2 className="text-base font-semibold leading-7 grid-cols-4 text-ligth-primary dark:text-dark-primary">
              NECESIDADES PRIORITARIAS PARA RESOLVER EL PROBLEMA
            </h2>
          </div>

          <div className="col-span-full grid grid-cols-1 gap-y-4 px-6 py-4 light-primary dark:light-primary rounded-lg border border-light-secondary dark:border-dark-secondary">
            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                QU&Eacute; SE REQUIERE PARA RESOLVER EL PROBLEMA:
              </Label>
              <div className="col-span-2 pb-2">
                <TipTap
                  content={problem.what}
                  className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap"
                />
              </div>
            </Field>

            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                C&Oacute;MO SE BUSCAR RESOLVER EL PROBLEMA:
              </Label>
              <div className="col-span-2 pb-2">
                <TipTap
                  content={problem.who}
                  className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap"
                />
              </div>
            </Field>

            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                PARA QU&Eacute; SE DESEA RESOLVER EL PROBLEMA:
              </Label>
              <div className="col-span-2 pb-2">
                <TipTap
                  content={problem.why}
                  className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap"
                />
              </div>
            </Field>

            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                PARA CU&Aacute;NDO SE TIENE PREVISTO RESOLVER EL PROBLEMA:
              </Label>
              <div className="col-span-2 pb-2">
                <TipTap
                  content={problem.when}
                  className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap"
                />
              </div>
            </Field>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 border-b border-light-secondary dark:border-dark-secondary pb-4 md:pb-12 mt-4 md:mt-12 md:grid-cols-3">
          <div className="col-span-full">
            <h2 className="text-base font-semibold leading-7 grid-cols-4 text-ligth-primary dark:text-dark-primary">
              DATOS DE LA INSTITUCI&Oacute;N SOLICITANTE
            </h2>
          </div>

          <div className="col-span-full grid grid-cols-1 gap-y-4 px-6 py-4 light-primary dark:light-primary rounded-lg border border-light-secondary dark:border-dark-secondary">
            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                NOMBRE{" "}
                {problem.applicant.type === ApplicantType.INSTITUCION
                  ? "DE LA INSTITUCIÓN"
                  : "DEL MUNICIPIO"}
                :
              </Label>
              <div className="col-span-2 pb-2">
                <p className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap">
                  {problem.applicant.name}
                </p>
              </div>
            </Field>

            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                NOMBRE DEL CONTACTO:
              </Label>
              <div className="col-span-2 pb-2">
                <p className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap">
                  {problem.contactName}
                </p>
              </div>
            </Field>

            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">
                CARGO DEL CONTACTO:
              </Label>
              <div className="col-span-2 pb-2">
                <p className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap">
                  {problem.contactPosition}
                </p>
              </div>
            </Field>

            <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <Field className="col-span-1 grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
                <Label className="col-span-2 flex justify-between text-sm font-medium leading-6">
                  TEL&Eacute;FONO CELULAR DEL CONTACTO:
                </Label>
                <div className="col-span-1 pb-2">
                  <p className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap">
                    {problem.phone}
                  </p>
                </div>
              </Field>

              <Field className="col-span-1 grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
                <Label className="col-span-2 flex justify-between text-sm font-medium leading-6">
                  TEL&Eacute;FONO DE LA INSTITUCI&Oacute;N:
                </Label>
                <div className="col-span-1 pb-2">
                  <p className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap">
                    {problem.cellPhone}
                  </p>
                </div>
              </Field>
            </div>

            <Field className="col-span-full grid grid-cols-1 gap-x-8 md:gap-y-4 md:grid-cols-3">
              <Label className="flex justify-between text-sm font-medium leading-6">ZONA:</Label>
              <div className="col-span-2 pb-2">
                <p className="text-light-primary dark:text-dark-primary break-words whitespace-pre-wrap">
                  {problem.zone}
                </p>
              </div>
            </Field>
          </div>
        </div>

        <span className="text-sm text-light-secondary dark:text-dark-secondary ms-auto mt-4">
          Actualizado el {formatDate_dddd_DD_MMMM_YYYY(new Date(problem.updatedAt))}
        </span>
        <div className="flex justify-between">
          <Link
            to=".."
            className="bg-[#6B7280] text-[14px] text-white px-4 py-1 mb-2 rounded-md mt-4 flex items-center"
          >
            <BackArrowIcon className="inline-block me-1 size-" />
            <span>Atr&aacute;s</span>
          </Link>
          <button className="bg-[#093958] hover:bg-[#34617a] text-[14px] text-white px-7 py-1 mb-2 rounded-md mt-4">
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewProblem;
