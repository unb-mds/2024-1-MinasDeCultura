import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { fetchYearlyTendersData } from '../services/api';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Dados {
  year: number;
  committed_value: number;
  liquidated_value: number;
  paid_value: number;
}

const Grafico: React.FC = () => {
  const [series, setSeries] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchYearlyTendersData();
      console.log('API Response:', data);
      
      if (Array.isArray(data) && data.length > 0) {
        const series = [
          {
            name: 'Valor Empenhado',
            data: data.map((item) => ({
              x: new Date(item.year, 0, 1).toISOString(),
              y: item.committed_value || 0
            })),
          },
          {
            name: 'Valor Liquidado',
            data: data.map((item) => ({
              x: new Date(item.year, 0, 1).toISOString(),
              y: item.liquidated_value || 0
            })),
          },
          {
            name: 'Valor Pago',
            data: data.map((item) => ({
              x: new Date(item.year, 0, 1).toISOString(),
              y: item.paid_value || 0
            })),
          },
        ];

        console.log('Series Data Transformada:', series);

        setSeries(series);
        setErrorMessage(null);
      } else {
        console.error('Dados inválidos retornados pela API.');
        setErrorMessage('Dados inválidos retornados pela API.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados para o gráfico:', error);
      setErrorMessage('Erro ao buscar dados para o gráfico.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const options: ApexOptions = {
    chart: {
      type: 'line',
      height: 600,
      zoom: {
        enabled: true,
        type: 'x',
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4
          }
        }
      },
      toolbar: {
        tools: {
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        },
        autoSelected: 'pan' // Garantir que a ferramenta 'pan' seja selecionada inicialmente
      }
    },
    colors: ['#F19C28', '#ED1C24', '#2FB551'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center'
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'yyyy',
      },
      tickAmount: 10,
      min: new Date(2014, 0, 1).getTime(),
      max: new Date(2023, 0, 1).getTime(),
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
        },
        formatter: (value: number) => {
          if (typeof value === 'number') {
            return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
          }
          return 'R$ 0,00'; // Valor padrão se `value` não for um número
        }
      },
      tickAmount: 4,
      min: 5000000, // Define o valor mínimo do eixo y como 25 milhões
    },
    tooltip: {
      x: {
        format: 'yyyy'
      },
    },
  };

  return (
    <div className='w-full p-4'>
      <h1 className='text-2xl font-bold mb-4 mt-16 text-center text-neutral-700'>
        Despesas em Cultura em Minas Gerais ao Longo dos Anos (2002-2023)
      </h1>
      {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      <ReactApexChart 
        options={options} 
        series={series} 
        type="line" 
        height={500} 
      />
    </div>
  );
};

export default Grafico;
