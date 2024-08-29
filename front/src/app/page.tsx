"use client";

import { Search, MapPin, CalendarClock, MoveRight } from "lucide-react"; 
import Busca from "@/components/Busca";
import dynamic from 'next/dynamic';
import Slider from "@/components/Slider";
import Pilares from "@/components/Pilares";
import Mensagem from "@/components/Mensagem";
import Grafico from '@/components/Grafico';

export default function Home() {
  return (
    <main className="bg-primary-gray dark:bg-neutral-900 flex flex-col items-center min-h-screen gap-10 p-12">
      <Mensagem />
      <Grafico />
      <Busca />
      <div className="container font-sans">
        <Slider />
        <Pilares />
      </div>
    </main>
  );
}
