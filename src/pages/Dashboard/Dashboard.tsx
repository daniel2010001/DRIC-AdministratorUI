import { Card } from "@/components/ui/table/cards";
import { useState, useEffect } from "react";
import { getDashboard } from "@/services/public.service";
import { Link } from "react-router-dom";
import {
  InstiucionIcon,
  ProblemIcon,
  SolicitudIcon,
  UserIcon,
} from "@/assets/Icons";
import { DashboardEndpoint, DashboardCard } from "@/models/Dashboard.model";

function useDashboardData() {
  const [data, setData] = useState<DashboardEndpoint>({
    problematicas: 0,
    entidades: 0,
    usuarios: 0,
    solicitudes: 0,
    publicadas: 0,
    noPublicadas: 0,
    municipios: 0,
    instituciones: 0,
    activos: 0,
    inactivos: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getDashboard();
        setData(response);
      } catch (error) {
        console.error("Error al cargar los datos del dashboard:", error);
      }
    };

    loadData();
  }, []);

  return data;
}

export function Dashboard() {
  const data = useDashboardData();

  const cards: DashboardCard[] = [
    {
      icon: <ProblemIcon className="text-4xl text-red-500" />,
      title: "Problemáticas",
      number: data.problematicas,
      link: "/private/problems/all",
      detalles: [
        { label: "Publicadas", value: data.publicadas },
        { label: "No publicadas", value: data.noPublicadas },
      ],
    },
    {
      icon: <SolicitudIcon className="text-4xl text-yellow-400" />,
      title: "Solicitudes pendientes",
      number: data.solicitudes,
    },
    {
      icon: <UserIcon className="text-4xl text-cyan-800" />,
      title: "Usuarios",
      number: data.usuarios,
      detalles: [
        { label: "Activos", value: data.activos },
        { label: "Inactivos", value: data.inactivos },
      ],
    },
    {
      icon: <InstiucionIcon className="text-4xl text-gray-600" />,
      title: "Entidades",
      number: data.entidades,
      detalles: [
        { label: "Municipios", value: data.municipios },
        { label: "Instituciones", value: data.instituciones },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-xl font-bold mb-4">Panel de control</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:scale-95 md:hover:scale-95"
          >
            {card.link ? (
              <Link to={card.link}>
                <Card
                  icon={card.icon}
                  title={card.title}
                  number={card.number}
                  detalles={card.detalles}
                />
              </Link>
            ) : (
              <Card
                icon={card.icon}
                title={card.title}
                number={card.number}
                detalles={card.detalles}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
