import { createCustomProblem } from "@/adapters";
import { BackArrowIcon } from "@/assets/Icons/back-arrow-icon";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { PrivateRoutes, inicialProblem } from "@/models";
import { searchProblem } from "@/services";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { EditorInput } from "./components";

export function ViewProblem() {
  const { loading, callEndpoint: loadProblem } = useFetchAndLoader();
  const idProblem = useParams().id || 0;
  const [problematica, setProblematica] = useState(inicialProblem);

  useAsync(
    async () => loadProblem(searchProblem(idProblem)),
    (data) => setProblematica(createCustomProblem(data))
  );

  if (!loading && !problematica.id) return <Navigate to=".." />;

  return (
    <div className="container mx-auto pb-2 md:pb-5">
      <div className="mx-0 md:mx-2 xl:mx-24 2xl:mx-24 bg-[#F9FAFB] py-5 md:py-7 px-0 md:px-8 lg:px-10 xl:px-16 2xl:px-32 border-t-2 border-x-2 rounded-md">
        <div className="text-base md:text-[24px] text-center font-semibold">
          DETALLE DE LA PROBLEM&Aacute;TICA PARA EL DESARROLLO DE UN PROYECTO DE
          TESIS O PROYECTO DE GRADO
        </div>
        <div className="flex justify-between">
          <Link
            to={`../${PrivateRoutes.PROBLEM_ALL}`}
            className="bg-[#6B7280] text-[14px] text-white px-4 py-1 mb-2 rounded-md mt-4 flex items-center"
          >
            <BackArrowIcon className="inline-block me-1" />
            <span>Atr&aacute;s</span>
          </Link>
          <button className="bg-[#0060FF] text-[14px] text-white px-7 py-1 mb-2 rounded-md mt-4">
            Descargar
          </button>
        </div>
        <div className="text-[16px] font-semibold pb-3">
          PLANTEAMIENTO GENERAL
        </div>
        <div className="plant-general text-[14px] p-7 bg-white rounded-xl drop-shadow">
          <div className="pb-3">
            <div className="font-medium">
              NOMBRE DE LA INSTITUCI&Oacute;N O MUNICIPIO:
            </div>
            <p className="text-[#4B5563]">
              {problematica.applicant.name || "Sin solicitante"}
            </p>
          </div>
          <div className="pb-3">
            <div className="font-medium">CARRERA:</div>
            <p className="text-[#4B5563]">
              {problematica.careers
                ? problematica.careers.map(({ name }) => name).join(", ")
                : "Sin carreras"}
            </p>
          </div>
          <div className="pb-3">
            <div className="font-medium">PLANTEAMIENTO DEL PROBLEMA:</div>
            <p className="text-[#4B5563] text-[14px]/6">
              {problematica.approach || "Sin planteamiento"}
            </p>
          </div>
          <div className="pb-3">
            <div className="font-medium">CAUSAS QUE PRODUCE EL PROBLEMA:</div>
            <EditorInput
              content={problematica.causes || "Sin causas"}
              onChange={() => {}}
              className="text-[#4B5563] text-[14px]/6"
            />
          </div>
          <div className="pb-3">
            <div className="font-medium">EFECTOS QUE CAUSA EL PROBLEMA:</div>
            <EditorInput
              content={problematica.effects || "Sin efectos"}
              onChange={() => {}}
              className="text-[#4B5563] text-[14px]/6"
            />
          </div>
        </div>
      </div>

      <hr className="mx-32" />

      <div className="mx-0 md:mx-2 xl:mx-24 2xl:mx-24 bg-[#F9FAFB] py-5 md:py-7 px-0 md:px-8 lg:px-10 xl:px-16 2xl:px-32 border-x-2 rounded-md">
        <div className="text-[16px] font-semibold pb-3">
          NECESIDADES PRIORITARIAS PARA RESOLVER EL PROBLEMA
        </div>
        <div className="necesidades p-7 text-[14px] bg-white rounded-xl drop-shadow grid grid-cols-2 gap-4 ">
          <div className="text-[14px]/6">
            <div className="font-medium">¿QU&Eacute;?</div>
            <p
              className="
            text-[#4B5563] text-[14px]/4 pb-1"
            >
              (Que se requiere para resolver el problema)
            </p>
            <EditorInput
              content={problematica.what || "sin contenido"}
              onChange={() => {}}
              className="text-[14px]/5 "
            />
          </div>
          <div className="text-[14px]">
            <div className="font-medium">¿C&Oacute;MO?</div>
            <p className="text-[#4B5563] pb-1">
              (Tesistas Pregrado o Tesistas Posgrado)
            </p>
            <EditorInput
              content={problematica.who || "sin contenido"}
              onChange={() => {}}
              className="text-[14px]/5"
            />
          </div>
          <div className="text-[14px]/6">
            <div className="font-medium">¿PARA QU&Eacute;?</div>
            <p className="text-[#4B5563] pb-1">(Para que se desea realizar)</p>
            <EditorInput
              content={problematica.why || "Sin contenido"}
              onChange={() => {}}
              className="text-[14px]/5"
            />
          </div>
          <div className="text-[14px]/6">
            <div className="font-medium">¿CU&Aacute;NDO?</div>
            <p
              className="
            text-[#4B5563]"
            >
              (Para cuando se tiene previsto)
            </p>
            <EditorInput
              content={problematica.when || "Sin contenido"}
              onChange={() => {}}
              className="text-[14px]/5"
            />
          </div>
        </div>
      </div>

      <hr className="mx-32" />

      <div className="mx-0 md:mx-2 xl:mx-24 2xl:mx-24 bg-[#F9FAFB] py-5 md:py-7 px-0 md:px-8 lg:px-10 xl:px-16 2xl:px-32 border-b-2 border-x-2 rounded-md">
        <div className="text-[16px] font-semibold pb-3">
          DATOS DE LA INSTITUCI&Oacute;N SOLICITANTE
        </div>
        <div className="datos-solicitante text-[14px]/loose p-7 bg-white rounded-xl drop-shadow">
          <div className="pb-5">
            <div className="font-medium">CONTACTO DE LA INSTITUCIÓN</div>
            <p className="text-[#4B5563]">
              {problematica.contact || "Sin contacto"}
            </p>
          </div>
          <div className="grid grid-cols-2 pb-5">
            <div>
              <div className="font-medium">TEL&Eacute;FONO</div>
              <p className="text-[#4B5563]">
                {problematica.cellPhone || "Sin teléfono"}
              </p>
            </div>
            <div>
              <div className="font-medium">FECHA ACTUALIZACI&Oacute;N</div>
              <p className="text-[#4B5563]">
                {new Date(problematica.updatedAt ?? "").toLocaleDateString() ||
                  "Sin fecha"}
              </p>
            </div>
          </div>
          <div className="pb-5">
            <div className="font-medium">ZONA</div>
            <p className="text-[#4B5563]">
              {problematica.zone || "Sin domicilio"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProblem;
