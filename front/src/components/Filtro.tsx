'use client';
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { fetchCities, fetchUnits, searchLicitacoes } from '../services/api';
import { MapPin, CalendarClock, MoveLeft, MoveRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';

interface LicitacaoData {
  administrative_unit_id: number;
  city_id: number;
  committed_value: number;
  liquidated_value: number;
  paid_value: number;
  year: number;
  month: number;
}

const Filtro: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string>('');
  const [cities, setCities] = useState<{ id: number; name: string }[]>([]);
  const [units, setUnits] = useState<{ id: number; name: string }[]>([]);
  const [empenhadoSeries, setEmpenhadoSeries] = useState<ApexAxisChartSeries>([]);
  const [liquidadoSeries, setLiquidadoSeries] = useState<ApexAxisChartSeries>([]);
  const [pagoSeries, setPagoSeries] = useState<ApexAxisChartSeries>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isHighContrastMode = document.documentElement.classList.contains('high-contrast');
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: {
      type: 'bar',
      background: '#ffffff',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        distributed: true,
        barHeight: '100%',
        colors: {
          ranges: [{ from: 0, to: 5000000000, color: '#ED1C24' }],
        },
      },
    },
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      type: 'category',
    },
    yaxis: {
        labels: {
          formatter: (value) => `R$ ${value.toLocaleString('pt-BR')}`, // Adiciona o símbolo R$ e formata os números
        },
    },
    dataLabels: {
      enabled: false,
    },
    
    legend: {
      show: false,
    },
    responsive: [
      { breakpoint: 2500, options: { chart: { height: 200, width: 1200 } } },
      { breakpoint: 1025, options: { chart: { height: 424, width: 800 } } },
      { breakpoint: 640, options: { chart: { height: 200, width: 310 } } },
      { breakpoint: 769, options: { chart: { height: 424, width: 700 } } },
      
    ],
    theme: {
      mode: 'light', // Default mode
    },
  });
  useEffect(() => {
    setIsClient(true);
  
    const root = document.documentElement;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDarkMode = root.classList.contains('dark');
          const isHighContrastMode = root.classList.contains('high-contrast');
  
          setChartOptions((prevOptions) => ({
            ...prevOptions,
            chart: {
              ...prevOptions.chart,
              background: isHighContrastMode ? '#000000' : isDarkMode ? '#1f1f1f' : '#ffffff',
              foreColor: isHighContrastMode ? '#FFFFFF' : isDarkMode ? '#e5e7eb' : '#000000',
            },
            xaxis: {
              ...prevOptions.xaxis,
              labels: {
                style: {
                  colors: isHighContrastMode ? '#FFFFFF' : isDarkMode ? '#e5e7eb' : '#000000',
                }
              }
            },
            yaxis: {
              ...prevOptions.yaxis,
              labels: {
                style: {
                  colors: isHighContrastMode ? '#FFFFFF' : isDarkMode ? '#e5e7eb' : '#000000',
                },
                formatter: (value) => `R$ ${value.toLocaleString('pt-BR')}`, // Adiciona o símbolo R$ e formata os números
              }
            },
            plotOptions: {
              ...prevOptions.plotOptions,
              bar: {
                ...prevOptions.plotOptions?.bar ?? {},
                colors: {
                  ranges: [{
                    from: 0,
                    to: 5000000000,
                    color: isHighContrastMode ? '#FFEA00' : isDarkMode ? '#ED1C24' : '#ED1C24',
                  }]
                }
              }
            }
          }));
        }
      });
    });
  
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class']
    });
  
    return () => observer.disconnect();
  }, []);
  const loadCities = async () => {
    try {
      const cities = await fetchCities();
      setCities(cities);
    } catch (error) {
      console.error('Erro ao buscar cidades:', error);
    }
  };

  const loadUnits = async () => {
    try {
      const units = await fetchUnits();
      setUnits(units);
    } catch (error) {
      console.error('Erro ao buscar unidades:', error);
    }
  };

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

  const fetchAndProcessData = async () => {
    if (!selectedCityId) return;

    try {
      const startMonth = startDate ? (startDate.getMonth() + 1).toString().padStart(2, '0') : '';
      const startYear = startDate ? startDate.getFullYear().toString() : '';
      const endMonth = endDate ? (endDate.getMonth() + 1).toString().padStart(2, '0') : '';
      const endYear = endDate ? endDate.getFullYear().toString() : '';

      const data: LicitacaoData[] = await searchLicitacoes({
        startYear,
        startMonth,
        endYear,
        endMonth,
        cityId: selectedCityId,
        unitId: selectedUnit,
      });

      const empData: { [key: number]: number[] } = {};
      const liquidData: { [key: number]: number[] } = {};
      const pagoData: { [key: number]: number[] } = {};

      const filteredData = selectedUnit
        ? data.filter(item => item.administrative_unit_id === Number(selectedUnit))
        : data;

      filteredData.forEach((item: LicitacaoData) => {
        const unitId = item.administrative_unit_id;
        const month = item.month - 1;

        if (!empData[unitId]) empData[unitId] = new Array(12).fill(0);
        if (!liquidData[unitId]) liquidData[unitId] = new Array(12).fill(0);
        if (!pagoData[unitId]) pagoData[unitId] = new Array(12).fill(0);

        empData[unitId][month] += item.committed_value;
        liquidData[unitId][month] += item.liquidated_value;
        pagoData[unitId][month] += item.paid_value;
      });

      const empenhadoSeries: ApexAxisChartSeries = Object.keys(empData).map(key => ({
        name: `Unidade ${key}`,
        data: empData[parseInt(key)]
      }));

      const liquidadoSeries: ApexAxisChartSeries = Object.keys(liquidData).map(key => ({
        name: `Unidade ${key}`,
        data: liquidData[parseInt(key)]
      }));

      const pagoSeries: ApexAxisChartSeries = Object.keys(pagoData).map(key => ({
        name: `Unidade ${key}`,
        data: pagoData[parseInt(key)]
      }));

      setEmpenhadoSeries(empenhadoSeries);
      setLiquidadoSeries(liquidadoSeries);
      setPagoSeries(pagoSeries);
      setErrorMessage(null);

      
    } catch (error) {
      console.error('Erro ao buscar dados de licitações:', error);
      setErrorMessage('Erro ao buscar dados de licitações.');
    }
  };

  useEffect(() => {
    loadCities();
    loadUnits();
  }, []);

  useEffect(() => {
    if (selectedCityId && startDate && endDate) {
      fetchAndProcessData();
    }
  }, [selectedCityId, selectedUnit, startDate, endDate]);


  return (
    <>
      <div className="container bg-primary-white dark:bg-neutral-800 border rounded-lg flex flex-col items-center justify-center lg:p-12 p-8">
        <h1 className="text-neutral-700 dark:text-primary-white font-DMsans text-lg lg:text-4xl xl:text-5xl text-center mb-[50px]">
          Pesquise por cidade, período e tema
        </h1>
        <ul className="flex lg:flex-row w-full justify-center flex-col gap-4">
          <li className="relative flex items-center">
            <MapPin className="w-6 h-6" color="#ED1C24" />
            <select
              className="w-full px-4 py-2 focus:outline-none bg-transparent dark:text-neutral-300 dark:bg-neutral-800"
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

          {/*<li className="relative flex items-center">
            <MapPin className="w-6 h-6" color="#ED1C24" />
            <select
              className="w-full px-4 py-2 focus:outline-none bg-transparent dark:text-neutral-300"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              disabled={!selectedCityId}
            >
              <option value="">Selecione uma unidade</option>
              {units.map(unit => (
                <option key={unit.id} value={unit.id}>{unit.name}</option>
              ))}
            </select>
            <div className="border-b border-neutral-700 dark:border-neutral-400 absolute left-0 right-0 bottom-0"></div>
          </li>*/}

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


      <div className="bg-primary-gray dark:bg-neutral-900">
        <div className="flex flex-col items-center mx-auto">
          <div>
            <h2 className="flex dark:text-neutral-300 justify-center font-DMSans text-2xl mt-4 mb-2">Valor Empenhado</h2>
            <Chart options={chartOptions} series={empenhadoSeries} type="bar" />
          </div>
          <div>
            <h2 className="flex dark:text-neutral-300 justify-center font-DMSans text-2xl mt-2 mb-2">Valor Liquidado</h2>
            <Chart options={chartOptions} series={liquidadoSeries} type="bar" />
          </div>
          <div>
            <h2 className="flex justify-center dark:text-neutral-300 font-DMSans text-2xl mt-2 mb-2">Valor Pago</h2>
            <Chart options={chartOptions} series={pagoSeries} type="bar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filtro;