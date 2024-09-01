'use client';

import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { CalendarClock, MoveLeft, MoveRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import { fettchYearAndMonthTender } from '../services/api';

interface Dados {
  committed_value: number;
  liquidated_value: number;
  paid_value: number;
  year: number;
  month: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Dados[]>([]);
  const [lineChartSeries, setLineChartSeries] = useState<any>([]);
  const [pieChartSeries, setPieChartSeries] = useState<number[]>([]);
  const [totalSales, setTotalSales] = useState<number>(0);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchData = async (startDate: Date | null, endDate: Date | null) => {
    if (!startDate || !endDate) return;

    try {
      const startMonth = (startDate.getMonth() + 1).toString().padStart(2, '0');
      const startYear = startDate.getFullYear().toString();
      const endMonth = (endDate.getMonth() + 1).toString().padStart(2, '0');
      const endYear = endDate.getFullYear().toString();

      const data = await fettchYearAndMonthTender({ startYear, startMonth, endYear, endMonth });
      setData(data);

      const committedValues = data.map((item: Dados) => item.committed_value);
      const liquidatedValues = data.map((item: Dados) => item.liquidated_value);
      const paidValues = data.map((item: Dados) => item.paid_value);


      setLineChartSeries([
        { name: 'Valor Empenhado', data: committedValues },
        { name: 'Valor Liquidado', data: liquidatedValues },
        { name: 'Valor Pago', data: paidValues }
      ]);

      const totalCommitted = data.reduce((acc: number, item: Dados) => acc + item.committed_value, 0);
      const totalLiquidated = data.reduce((acc: number, item: Dados) => acc + item.liquidated_value, 0);
      const totalPaid = data.reduce((acc: number, item: Dados) => acc + item.paid_value, 0);

      setPieChartSeries([totalCommitted, totalLiquidated, totalPaid]);
      setTotalSales(totalCommitted);
      setTotalRevenue(totalLiquidated);
      setTotalUsers(totalPaid);

      setErrorMessage(null);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setErrorMessage('Erro ao buscar dados.');
    }
  };

  useEffect(() => {
    fetchData(startDate, endDate);
  }, [startDate, endDate]);

  const renderCustomHeader = ({
    date,
    decreaseYear,
    increaseYear,
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

  const lineChartOptions: ApexOptions = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Valores',
      align: 'center'
    },
    xaxis: {
      categories: data.map(item => `${item.year}-${String(item.month).padStart(2, '0')}`)
    },
    yaxis: {
      title: {
        text: 'Valores'
      },
      labels: {
        formatter: (value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
      }
    },
    colors: ['#ED1C24', '#F19C28', '#2FB551']
  };

  const pieChartOptions: ApexOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Distribuição de valores',
      align: 'center'
    },
    labels: ['Valor Empenhado', 'Valor Liquidado', 'Valor Pago'],
    tooltip: {
      y: {
        formatter: (value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
      }
    },
    colors: ['#ED1C24', '#F19C28', '#2FB551'],
    legend: {
      position: 'bottom',
    }
  };

  return (
    <div className="container">
      <div className="mb-10">
        <div className="container bg-primary-white dark:bg-neutral-800 border rounded-lg flex flex-col items-center justify-center lg:p-12 p-8">
          <h1 className="text-neutral-700 dark:text-primary-white font-DMsans text-lg lg:text-4xl xl:text-5xl text-center mb-[50px]">
            Pesquise por período
          </h1>
          <ul className="flex lg:flex-row w-full justify-center flex-col gap-4">
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
          </ul>
        </div>



        <div className="flex lg:justify-center md:justify-center flex-wrap gap-2 mb-6 mt-6">
          <div className="w-full sm:w-1/4 p-4 rounded-lg shadow-2xl bg-white">
            <h3 className="lg:text-lg md:text-md text-sm flex justify-center">Total Empenhado</h3>
            <p className="lg:text-2xl md:text-lg text-sm flex justify-center">R$ {totalSales.toLocaleString()}</p>
          </div>
          <div className="w-full sm:w-1/4 p-4 rounded-lg shadow-2xl bg-white">
            <h3 className="lg:text-lg md:text-md text-sm flex justify-center">Total Liquidado</h3>
            <p className="lg:text-2xl md:text-lg text-sm flex justify-center">R$ {totalRevenue.toLocaleString()}</p>
          </div>
          <div className="w-full sm:w-1/4 p-4 rounded-lg shadow-2xl bg-white">
            <h3 className="lg:text-lg md:text-md text-sm flex justify-center">Total Pago</h3>
            <p className="lg:text-2xl md:text-lg text-sm flex justify-center">R$ {totalUsers.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-white">
          <div className="w-full md:w-1/2">
            <ApexCharts
              options={lineChartOptions}
              series={lineChartSeries}
              type="line"
              height={350}
            />
          </div>
          <div className="w-full md:w-1/2">
            <ApexCharts
              options={pieChartOptions}
              series={pieChartSeries}
              type="pie"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;