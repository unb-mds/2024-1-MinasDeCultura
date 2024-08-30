import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { fetchYearlyTendersData } from '../services/api';
import { ApexOptions } from 'apexcharts';
import { Info } from 'lucide-react'; // Import icon from lucide-react

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
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
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
        autoSelected: 'pan'
      },
      background: '#ffffff',
    },
    colors: ['#ED1C24', '#F19C28', '#2FB551'],
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
      horizontalAlign: 'center',
      fontSize: '14px',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'yyyy',
        style: {
          fontSize: '12px',
        },
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
        formatter: (value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      },
      tickAmount: 4,
      min: 5000000,
    },
    tooltip: {
      x: {
        format: 'DESPESA DE yyyy'
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 400,
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '10px',
          },
          xaxis: {
            labels: {
              style: {
                fontSize: '10px',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: '6px',
              },
              formatter: (value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
            },
            tickAmount: 3,
          },
        }
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            fontSize: '8px',
          },
          xaxis: {
            labels: {
              style: {
                fontSize: '8px',
              },
            },
          },
        }
      }
    ]
  });

  const updateChartOptionsForTheme = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const isHighContrastMode = document.documentElement.classList.contains('high-contrast');

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
          formatter: (value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
        }
      },
      colors: isHighContrastMode ? ['#ED1C24', '#F19C28', '#2FB551'] : ['#ED1C24', '#F19C28', '#2FB551'],
    }));
  };

  useEffect(() => {
    updateChartOptionsForTheme();

    const observer = new MutationObserver(() => {
      updateChartOptionsForTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

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

  return (
    <div className="w-4/5 mx-auto mt-10">
      <h1 className='text-3xl font-bold mb-4 text-center text-neutral-700 dark:text-neutral-300'>
        Despesas em Cultura em Minas Gerais ao Longo dos Anos (2002-2023)
      </h1>
      {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      <div>
        <ReactApexChart 
          options={chartOptions} 
          series={series} 
          type="line" 
          height={600} 
        />
      </div>
      <ul className="space-y-7 mt-8">
        <li className="flex items-center gap-4 text-lg">
          <div className="flex-shrink-0 w-8 h-8 legend-color-red rounded-sm"></div>
          <div className="text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
            <strong>Valor Empenhado:</strong>
            <span>Valor do orçamento reservado para fazer face a compromisso formalmente assumido com fornecedor ou credor.</span>
          </div>
        </li>
        <li className="flex items-center gap-4 text-lg">
          <div className="flex-shrink-0 w-8 h-8 legend-color-orange rounded-sm"></div>
          <div className="text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
            <strong>Valor Liquidado:</strong>
            <span>Valor que o fornecedor ou credor tem direito a receber referente a produto ou serviço devidamente entregue.</span>
          </div>
        </li>
        <li className="flex items-center gap-4 text-lg">
          <div className="flex-shrink-0 w-8 h-8 legend-color-green rounded-sm"></div>
          <div className="text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
            <strong>Valor Pago:</strong>
            <span>Valor referente aos pagamentos efetuados através de movimentações bancárias, escriturais e apropriação contábil da despesa.</span>
          </div>
        </li>
      </ul>

    </div>
  );
};

export default Grafico;
