"use client";

import { Search, MapPin, CalendarClock, MoveRight } from "lucide-react";
import Busca from "@/components/Busca"
import Filtro from "@/components/Filtro";
import dynamic from 'next/dynamic';
import Slider from "@/components/Slider"
import Pilares from "@/components/Pilares"


const Grafico = dynamic(() => import('@/components/Grafico'), { ssr: false });

export default function Home() {
  return (
    <main className="bg-primary-gray flex flex-col items-center min-h-screen gap-10 p-12">
      <div className="container font-sans">
      <Slider/>
      <Pilares/>
      </div>
      <div className="container w-full h-auto bg-primary-white rounded-lg ">
      </div>
      <Grafico/>
      <Busca/>
    </main>
  );
}