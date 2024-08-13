'use client'

import { Search, MapPin, CalendarClock, MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';

const Filtro = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const renderCustomHeader = ({
    date,
    decreaseYear,
    increaseYear
  }: {
    date: Date;
    decreaseYear: () => void;
    increaseYear: () => void;
  }) => {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return (
      <div className="flex justify-between items-center py-2 px-4 rounded-md">
        <button onClick={decreaseYear} className="p-2 rounded-md">
          <MoveLeft />
        </button>
        <span className="text-sm md:text-lg font-DMsans">
          {months[date.getMonth()]} de {date.getFullYear()}
        </span>
        <button onClick={increaseYear} className="p-2 rounded-md">
          <MoveRight />
        </button>
      </div>
    );
  };

  const handleStartDateChange = (date: Date | null) => {
    if (date && endDate && date > endDate) {
      setEndDate(date);
    }
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date && startDate && date >= startDate) {
      setEndDate(date);
    }
  };

  return (
    <div className="container bg-primary-white border rounded-lg flex flex-col items-center justify-center lg:p-12 p-8">
      <h1 className="text-neutral-700 font-DMsans text-lg lg:text-4xl xl:text-5xl text-center mb-[50px]">
        Pesquise por cidade, período e tema
      </h1>
      <ul className="flex lg:flex-row w-full justify-center flex-col gap-4">
        <li className="relative flex items-center">
          <Search className="w-6 h-6" color="#ED1C24" />
          <input
            type="text"
            placeholder="Assunto"
            className="w-full px-4 py-2 focus:outline-none"
          />
          <div className="border-b border-neutral-700 absolute left-0 right-0 bottom-0"></div>
        </li>

        <li className="relative flex items-center">
          <MapPin className="w-6 h-6" color="#ED1C24" />
          <input
            type="text"
            placeholder="Local"
            className="w-full px-4 py-2 focus:outline-none"
          />
          <div className="border-b border-neutral-700 absolute left-0 right-0 bottom-0"></div>
        </li>

        <li className="relative flex items-center">
          <CalendarClock className="w-6 h-6" color="#ED1C24" />
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="MM / yyyy"
            showMonthYearPicker
            renderCustomHeader={renderCustomHeader}
            maxDate={new Date(2024, 11, 31)}
            className="w-full px-4 py-2 focus:outline-none text-xs md:text-base"
            placeholderText="Data Inicial"
            locale={ptBR}
          />
          <span className="px-2"><MoveRight className="size-3 md:size-auto" /></span>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="MM / yyyy"
            showMonthYearPicker
            renderCustomHeader={renderCustomHeader}
            minDate={startDate ?? undefined}
            maxDate={new Date(2024, 11, 31)}
            className="w-full px-4 py-2 focus:outline-none text-xs md:text-base"
            placeholderText="Data final"
            locale={ptBR}
          />
          <div className="border-b border-neutral-700 absolute left-0 right-0 bottom-0"></div>
        </li>

        <li>
          <button className="flex flex-row items-center px-12 py-4 w-full gap-4 md:justify-start justify-center bg-primary-red text-white rounded-lg">
            Buscar
            <MoveRight className="w-6 h-6" color="white" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filtro;
