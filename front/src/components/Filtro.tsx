'use client';

import React, { useState, useEffect } from 'react';
import { fetchCities, searchLicitacoes } from '../services/api';
import { MapPin, CalendarClock, MoveLeft, MoveRight } from "lucide-react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';

const Filtro = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const data = await fetchCities();
        setCities(data);
      } catch (error) {
        console.error('Erro ao carregar cidades:', error);
      }
    };
    loadCities();
  }, []);

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
    if (date && startDate && date < startDate) {
      setEndDate(startDate);
    } else {
      setEndDate(date);
    }
  };

  const handleSearchClick = async () => {
    const startMonth = startDate ? (startDate.getMonth() + 1).toString().padStart(2, '0') : '';
    const startYear = startDate ? startDate.getFullYear().toString() : '';
    const endMonth = endDate ? (endDate.getMonth() + 1).toString().padStart(2, '0') : '';
    const endYear = endDate ? endDate.getFullYear().toString() : '';

    if (startMonth && startYear && endMonth && endYear && selectedCityId !== null) {
      const params = {
        startYear,
        startMonth,
        endYear,
        endMonth,
        cityId: selectedCityId,
      };

      try {
        const response = await searchLicitacoes(params);
        console.log('Resposta da API:', response);
        setErrorMessage(null); // Limpa a mensagem de erro após uma busca bem-sucedida
      } catch (error) {
        console.error('Erro ao buscar licitações:', error);
      }
    } else {
      setErrorMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="container bg-primary-white dark:bg-neutral-800 border rounded-lg flex flex-col items-center justify-center lg:p-12 p-8">
      <h1 className="text-neutral-700 dark:text-primary-white font-DMsans text-lg lg:text-4xl xl:text-5xl text-center mb-[50px]">
        Pesquise por cidade, período e tema
      </h1>
      <ul className="flex lg:flex-row w-full justify-center flex-col gap-4">
        <li className="relative flex items-center">
          <MapPin className="w-6 h-6" color="#ED1C24" />
          <select
            className="w-full px-4 py-2 focus:outline-none bg-transparent dark:text-neutral-300"
            onChange={(e) => setSelectedCityId(Number(e.target.value))}
          >
            <option value="">Selecione uma cidade</option>
            {cities.map((city: any) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          <div className="border-b border-neutral-700 dark:border-neutral-400 absolute left-0 right-0 bottom-0"></div>
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
            className="w-full px-4 py-2 focus:outline-none bg-transparent text-xs md:text-base dark:text-neutral-300"
            placeholderText="Data Inicial"
            locale={ptBR}
          />
          <span className="px-2"><MoveRight className="size-3 md:size-auto dark:text-neutral-300" /></span>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="MM / yyyy"
            showMonthYearPicker
            renderCustomHeader={renderCustomHeader}
            minDate={startDate ?? undefined}
            maxDate={new Date(2024, 11, 31)}
            className="w-full px-4 py-2 focus:outline-none bg-transparent text-xs md:text-base dark:text-neutral-300"
            placeholderText="Data final"
            locale={ptBR}
          />
          <div className="border-b border-neutral-700 dark:border-neutral-400 absolute left-0 right-0 bottom-0"></div>
        </li>

        <li>
          <button
            onClick={handleSearchClick}
            className="flex flex-row items-center px-12 py-4 w-full gap-4 md:justify-start justify-center bg-primary-red text-white rounded-lg"
          >
            Buscar
            <MoveRight className="w-6 h-6" color="white" />
          </button>
        </li>
      </ul>      

      {errorMessage && (
        <div className="mt-4 text-red-500 text-center">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Filtro;
