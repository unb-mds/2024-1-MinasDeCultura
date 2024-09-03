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
        formatter: (value: number) => `R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
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
        breakpoint: 1024,
        options: {
          xaxis: {
            tickAmount: 5,
            min: new Date(2016, 0, 1).getTime(),
            max: new Date(2023, 0, 1).getTime(),
            labels: {
              style: {
                fontSize: '10px',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: '12px',
              },
            },
          },
          legend: {
            fontSize: '12px',
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
        }
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 400,
          },
          xaxis: {
            tickAmount: 3,
            min: new Date(2018, 0, 1).getTime(),
            max: new Date(2023, 0, 1).getTime(),
            labels: {
              style: {
                fontSize: '10px',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: '10px',
              },
              formatter: (value: number) => `${(value / 1000000).toFixed(1)}M`, // Formato em milhões
            },
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '10px',
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
        }
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
          xaxis: {
            tickAmount: 2,
            min: new Date(2020, 0, 1).getTime(),
            max: new Date(2023, 0, 1).getTime(),
            labels: {
              style: {
                fontSize: '8px',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: '8px',
              },
              formatter: (value: number) => `${(value / 1000000).toFixed(1)}M`, // Formato em milhões
            },
          },
          legend: {
            fontSize: '8px',
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
        }
      }
    ]
  });

  const isMobileScreen = () => window.innerWidth <= 768;
  
  useEffect(() => {
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
            formatter: (value: number) => isMobileScreen() 
              ? `${(value / 1000000).toFixed(1)}M`
              : `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
          }
        },
        colors: isHighContrastMode ? ['#ED1C24', '#F19C28', '#2FB551'] : ['#ED1C24', '#F19C28', '#2FB551'],
      }));
    };
  
    updateChartOptionsForTheme();
  
    const observer = new MutationObserver(() => {
      updateChartOptionsForTheme();
    });
  
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  
    window.addEventListener('resize', () => updateChartOptionsForTheme());
  
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', () => updateChartOptionsForTheme());
    };
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
      <h1 className='text-xl lg:text-3xl font-DMsans mb-4 text-center text-neutral-700 dark:text-neutral-300'>
        <strong>Despesas em Cultura em Minas Gerais ao Longo dos Anos (2002-2023)</strong>
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
        <li className="flex flex-wrap items-center gap-4 text-sm md:text-base lg:text-lg">
          <div className="flex-shrink-0 w-5 h-5 md:w-8 md:h-8 legend-color-red rounded-sm"></div>
          <div className="text-neutral-700 dark:text-neutral-300 flex flex-1 flex-col md:flex-row items-start md:items-center gap-2">
            <strong className="md:w-40 w-full">Valor Empenhado:</strong>
            <span className="w-full md:w-auto">Valor do orçamento reservado para fazer face a compromisso formalmente assumido com fornecedor ou credor.</span>
          </div>
        </li>
        <li className="flex flex-wrap items-center gap-4 text-sm md:text-base lg:text-lg">
          <div className="flex-shrink-0 w-5 h-5 md:w-8 md:h-8 legend-color-orange rounded-sm"></div>
          <div className="text-neutral-700 dark:text-neutral-300 flex flex-1 flex-col md:flex-row items-start md:items-center gap-2">
            <strong className="md:w-40 w-full">Valor Liquidado:</strong>
            <span className="w-full md:w-auto">Valor que o fornecedor ou credor tem direito a receber referente a produto ou serviço devidamente entregue.</span>
          </div>
        </li>
        <li className="flex flex-wrap items-center gap-4 text-sm md:text-base lg:text-lg">
          <div className="flex-shrink-0 w-5 h-5 md:w-8 md:h-8 legend-color-green rounded-sm"></div>
          <div className="text-neutral-700 dark:text-neutral-300 flex flex-1 flex-col md:flex-row items-start md:items-center gap-2">
            <strong className="md:w-40 w-full">Valor Pago:</strong>
            <span className="w-full md:w-auto">Valor referente aos pagamentos efetuados através de movimentações bancárias, escriturais e apropriação contábil da despesa.</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Grafico;
