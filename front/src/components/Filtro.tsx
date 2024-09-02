'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { CalendarClock, MoveLeft, MoveRight, HelpCircle } from 'lucide-react'; // Importação do HelpCircle
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

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

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

  // Inicialização dos estados dos gráficos com opções padrão
  const [lineChartOptions, setLineChartOptions] = useState<ApexOptions>({
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
      animations: {
        enabled: true,
      },
      background: '#ffffff',
      foreColor: '#000000',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          fontSize: '12px',
        },
      },
      tickAmount: 10,
    },
    yaxis: {
      title: {
        text: 'Valores',
        style: {
          fontSize: '14px',
        },
      },
      labels: {
        formatter: (value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
        style: {
          fontSize: '12px',
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '14px',
    },
    tooltip: {
      y: {
        formatter: (value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      },
    },
    colors: ['#ED1C24', '#F19C28', '#2FB551'],
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              style: {
                fontSize: '10px',
              },
            },
          },
          yaxis: [
            {
              labels: {
                style: {
                  fontSize: '10px',
                },
              },
            },
          ],
          legend: {
            fontSize: '12px',
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: '8px',
              },
            },
          },
          yaxis: [
            {
              labels: {
                style: {
                  fontSize: '8px',
                },
              },
            },
          ],
          legend: {
            fontSize: '10px',
          },
        },
      },
    ],
  });

  const [pieChartOptions, setPieChartOptions] = useState<ApexOptions>({
    chart: {
      type: 'pie',
      height: 350,
      background: '#ffffff',
      foreColor: '#000000',
    },
    labels: ['Valor Empenhado', 'Valor Liquidado', 'Valor Pago'],
    legend: {
      position: 'bottom',
      fontSize: '14px',
    },
    tooltip: {
      y: {
        formatter: (value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      },
    },
    colors: ['#ED1C24', '#F19C28', '#2FB551'],
    responsive: [
      {
        breakpoint: 1024,
        options: {
          legend: {
            fontSize: '12px',
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            fontSize: '10px',
          },
        },
      },
    ],
  });

  const fetchData = async (startDate: Date | null, endDate: Date | null) => {
    if (!startDate || !endDate) return;

    try {
      const startMonth = (startDate.getMonth() + 1).toString().padStart(2, '0');
      const startYear = startDate.getFullYear().toString();
      const endMonth = (endDate.getMonth() + 1).toString().padStart(2, '0');
      const endYear = endDate.getFullYear().toString();

      const fetchedData = await fettchYearAndMonthTender({ startYear, startMonth, endYear, endMonth });

      if (Array.isArray(fetchedData) && fetchedData.length > 0) {
        setData(fetchedData);

        const categories = fetchedData.map(item => `${item.year}-${String(item.month).padStart(2, '0')}`);
        const committedValues = fetchedData.map((item: Dados) => item.committed_value);
        const liquidatedValues = fetchedData.map((item: Dados) => item.liquidated_value);
        const paidValues = fetchedData.map((item: Dados) => item.paid_value);

        setLineChartSeries([
          { name: 'Valor Empenhado', data: committedValues },
          { name: 'Valor Liquidado', data: liquidatedValues },
          { name: 'Valor Pago', data: paidValues },
        ]);

        setLineChartOptions(prevOptions => ({
          ...prevOptions,
          xaxis: {
            ...prevOptions.xaxis,
            categories,
          },
        }));

        const totalCommitted = committedValues.reduce((acc, val) => acc + val, 0);
        const totalLiquidated = liquidatedValues.reduce((acc, val) => acc + val, 0);
        const totalPaid = paidValues.reduce((acc, val) => acc + val, 0);

        setPieChartSeries([totalCommitted, totalLiquidated, totalPaid]);
        setTotalSales(totalCommitted);
        setTotalRevenue(totalLiquidated);
        setTotalUsers(totalPaid);

        setErrorMessage(null);
      } else {
        setErrorMessage('Nenhum dado encontrado para o período selecionado.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setErrorMessage('Erro ao buscar dados.');
    }
  };

  useEffect(() => {
    fetchData(startDate, endDate);
  }, [startDate, endDate]);

  const updateChartOptionsForTheme = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const isHighContrastMode = document.documentElement.classList.contains('high-contrast');

    const backgroundColor = isHighContrastMode ? '#000000' : isDarkMode ? '#1f1f1f' : '#ffffff';
    const foreColor = isHighContrastMode ? '#FFFFFF' : isDarkMode ? '#e5e7eb' : '#000000';

    setLineChartOptions(prevOptions => ({
      ...prevOptions,
      chart: {
        ...prevOptions.chart,
        background: backgroundColor,
        foreColor: foreColor,
      },
      xaxis: {
        ...prevOptions.xaxis,
        labels: {
          ...prevOptions.xaxis?.labels,
          style: {
            ...prevOptions.xaxis?.labels?.style,
            colors: foreColor,
          },
        },
      },
      yaxis: {
        ...prevOptions.yaxis,
        labels: {
          ...(Array.isArray(prevOptions.yaxis) ? {} : prevOptions.yaxis?.labels),
          style: {
            ...(Array.isArray(prevOptions.yaxis) ? {} : prevOptions.yaxis?.labels?.style),
            colors: foreColor,
          },
        },
      },
      legend: {
        ...prevOptions.legend,
        labels: {
          colors: foreColor,
        },
      },
    }));

    setPieChartOptions(prevOptions => ({
      ...prevOptions,
      chart: {
        ...prevOptions.chart,
        background: backgroundColor,
        foreColor: foreColor,
      },
      legend: {
        ...prevOptions.legend,
        labels: {
          colors: foreColor,
        },
      },
    }));
  };

  useEffect(() => {
    updateChartOptionsForTheme();

    const observer = new MutationObserver(() => {
      updateChartOptionsForTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    decreaseYear,
    increaseYear,
  }: {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
    decreaseYear: () => void;
    increaseYear: () => void;
  }) => {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];
    return (
      <div className="flex justify-between items-center py-2 px-4 rounded-md">
        <button onClick={decreaseYear} className="p-2 rounded-md" aria-label="Ano anterior">
          <MoveLeft />
        </button>
        <span className="text-sm md:text-lg font-DMsans">
          {months[date.getMonth()]} de {date.getFullYear()}
        </span>
        <button onClick={increaseYear} className="p-2 rounded-md" aria-label="Próximo ano">
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
      setStartDate(date);
    }
    setEndDate(date);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-primary-white dark:bg-neutral-800 border rounded-lg flex flex-col items-center justify-center lg:p-12 p-8">
        <h1 className="text-neutral-700 dark:text-primary-white font-DMsans text-lg lg:text-4xl xl:text-5xl text-center mb-8">
          <strong>Pesquise por período</strong>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <div className="flex items-center gap-2">
            <CalendarClock className="w-6 h-6 text-red-600" />
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              renderCustomHeader={renderCustomHeader}
              maxDate={new Date(2024, 11, 31)}
              className="w-32 px-4 py-2 focus:outline-none bg-transparent text-sm md:text-base dark:text-neutral-300 border-b border-neutral-700 dark:border-neutral-400"
              placeholderText="Data Inicial"
              locale={ptBR}
              aria-label="Data inicial"
            />
          </div>
          <span className="text-neutral-700 dark:text-neutral-300">até</span>
          <div className="flex items-center gap-2">
            <CalendarClock className="w-6 h-6 text-red-600" />
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              renderCustomHeader={renderCustomHeader}
              minDate={startDate ?? undefined}
              maxDate={new Date(2024, 11, 31)}
              className="w-32 px-4 py-2 focus:outline-none bg-transparent text-sm md:text-base dark:text-neutral-300 border-b border-neutral-700 dark:border-neutral-400"
              placeholderText="Data Final"
              locale={ptBR}
              aria-label="Data final"
            />
          </div>
        </div>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-8">
        {/* Total Empenhado */}
        <div className="w-full sm:w-1/3 p-4 rounded-lg shadow-lg bg-white dark:bg-neutral-800">
          <h3 className="flex items-center justify-center text-neutral-700 dark:text-neutral-300 text-lg font-semibold mb-2">
            Total Empenhado
            {/* Tooltip */}
            <div className="relative inline-block ml-2 group">
              <HelpCircle className="w-5 h-5 text-gray-700 dark:text-neutral-300 cursor-pointer" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-60 hidden group-hover:block">
                <div className="bg-gray-700 text-white text-xs rounded py-1 px-2 text-center">
                  Valor Empenhado: Valor do orçamento reservado para fazer face a compromisso formalmente assumido com fornecedor ou credor.
                </div>
              </div>
            </div>
          </h3>
          <p className="text-center text-neutral-900 dark:text-neutral-100 text-2xl">
            R$ {totalSales.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>

        {/* Total Liquidado */}
        <div className="w-full sm:w-1/3 p-4 rounded-lg shadow-lg bg-white dark:bg-neutral-800">
          <h3 className="flex items-center justify-center text-neutral-700 dark:text-neutral-300 text-lg font-semibold mb-2">
            Total Liquidado
            {/* Tooltip */}
            <div className="relative inline-block ml-2 group">
              <HelpCircle className="w-5 h-5 text-gray-700 dark:text-neutral-300 cursor-pointer" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-60 hidden group-hover:block">
                <div className="bg-gray-700 text-white text-xs rounded py-1 px-2 text-center">
                  Valor Liquidado: Valor que o fornecedor ou credor tem direito a receber referente a produto ou serviço devidamente entregue.
                </div>
              </div>
            </div>
          </h3>
          <p className="text-center text-neutral-900 dark:text-neutral-100 text-2xl">
            R$ {totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>

        {/* Total Pago */}
        <div className="w-full sm:w-1/3 p-4 rounded-lg shadow-lg bg-white dark:bg-neutral-800">
          <h3 className="flex items-center justify-center text-neutral-700 dark:text-neutral-300 text-lg font-semibold mb-2">
            Total Pago
            {/* Tooltip */}
            <div className="relative inline-block ml-2 group">
              <HelpCircle className="w-5 h-5 text-gray-700 dark:text-neutral-300 cursor-pointer" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-60 hidden group-hover:block">
                <div className="bg-gray-700 text-white text-xs rounded py-1 px-2 text-center">
                  Valor Pago: Valor referente aos pagamentos efetuados através de movimentações bancárias, escriturais e apropriação contábil da despesa.
                </div>
              </div>
            </div>
          </h3>
          <p className="text-center text-neutral-900 dark:text-neutral-100 text-2xl">
            R$ {totalUsers.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
          <ReactApexChart
            options={lineChartOptions}
            series={lineChartSeries}
            type="line"
            height={350}
          />
        </div>
        <div className="w-full md:w-1/2 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
          <ReactApexChart
            options={pieChartOptions}
            series={pieChartSeries}
            type="pie"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
