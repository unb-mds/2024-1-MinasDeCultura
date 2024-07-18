"use client";

import { Search, MapPin, CalendarClock, MoveRight } from "lucide-react";
import Busca from "@/components/Busca"
import Filtro from "@/components/Filtro";
import dynamic from 'next/dynamic';
import Slider from "@/components/Slider"


const Grafico = dynamic(() => import('@/components/Grafico'), { ssr: false });

export default function Home() {
  return (
    <main className="bg-primary-gray flex flex-col items-center min-h-screen gap-10 p-12">
      <Filtro />
      <div className="container font-sans">
      <Slider/>
        <h1 className=" text-4xl text-center">
          A Secretaria de Cultura e Turismo do Estado de Minas Gerais:
        </h1>
        <div className="flex md:flex-row flex-col py-6 gap-6 justify-items-center">
          <div className="w-full h-auto bg-primary-white rounded-2xl text-center p-8 ">
            <h1 className="text-4xl  "> Deve preservar</h1>
            <h2 className="text-2xl"> o patrimônio cultural do estado de Minas gerais</h2>
          </div>
          <div className="w-full h-auto bg-primary-white rounded-2xl text-center p-8 ">
            <h1 className="text-4xl "> Deve promover</h1>
            <h2 className="text-2xl"> a acessibilidade e inclusão social à cultura</h2>
          </div>
          <div className="w-full h-auto bg-primary-white rounded-2xl text-center p-8">
            <h1 className="text-4xl "> Deve fomentar</h1>
            <h2 className="text-2xl"> a produção artística da população</h2>
          </div>
        </div> 
      </div>
      <div className="container w-full h-auto bg-primary-white rounded-lg ">
      </div>
      <Grafico/>
      <Busca/>
    </main>
  );
}