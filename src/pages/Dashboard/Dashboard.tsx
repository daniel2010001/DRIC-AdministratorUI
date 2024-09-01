import { Card } from "@/components/ui/table/cards";
import { useState, useEffect } from "react";
import { fetchDashboardData } from "@/services/public.service";
import { Link } from "react-router-dom";
import {ProblemIcon,SolicitudIcon, UsersIcon}from "@/assets/Icons";


export function Dashboard() {
  const [data, setData] = useState({
    problematicas: 0,
    solicitudes: 0,
    usuarios: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchDashboardData();
        setData(response);
      } catch (error) {
        console.error("Error al cargar los datos del dashboard:", error);
      }
    };

    loadData();
  }, []);

    return (
      
      <div className="container mx-auto py-10">
        <h1 className="text-xl font-bold mb-4">Panel de control</h1>
        <div className="grid grid-cols-3 gap-6">
        
        <div className=" transition duration-300 ease-in-out transform hover:scale-90">
         <Link to="/problems">
         <Card
            icon={<ProblemIcon className="text-4xl text-black" />}
            title="Problemáticas"
            number={data.problematicas}
          />
          </Link>    
          </div>

          <div className=" transition duration-300 ease-in-out transform hover:scale-90">
          <Card
            icon={<SolicitudIcon className="text-4xl text-black" />}
            title="Solicitudes"
            number={data.solicitudes}
          />
          </div>
         
          <div className=" transition duration-300 ease-in-out transform hover:scale-90">
          <Card
            icon={<UsersIcon className="text-4xl text-black" />}
            title="Usuarios"
            number={data.usuarios}
          />
          </div>
         
        </div>
      </div>
    );
  }

export default Dashboard;
