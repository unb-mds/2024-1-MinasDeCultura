"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const Grafico: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    const [chartOptions, setChartOptions] = useState<ApexOptions>({
        chart: {
            type: 'bar',
            height: 500,
            background: '#ffffff',
            foreColor: '#000000',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                distributed: true,
                barHeight: '100%',
                colors: {
                    ranges: [{
                        from: 0,
                        to: 500000,
                        color: '#ED1C24'
                    }],
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            type: 'category',
            labels: {
                style: {
                    colors: '#000000'
                }
            }
        },
        yaxis: {
            title: {
                text: 'Valor',
                style: {
                    color: '#000000'
                }
            },
            labels: {
                style: {
                    colors: '#000000'
                }
            }
        },
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 1025,
                options: {
                    chart: {
                        height: 424,
                        width: 800,
                    }
                }
            },
            {
                breakpoint: 640,
                options: {
                    chart: {
                        height: 200,
                        width: 310,
                    }
                }
            },
            {
                breakpoint: 769,
                options: {
                    chart: {
                        height: 424,
                        width: 700
                    }
                }
            }
        ],
        theme: {
            mode: 'light', // Modo padrão inicial
            palette: 'palette1',
        },
    });

    const series = [{
        name: 'Valor gasto',
        data: [20000, 300000, 65000, 100000, 200000, 200000, 20000, 30000, 20000, 75000, 300000, 200000]
    }];

    useEffect(() => {
        setIsClient(true);

        const root = document.documentElement;
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    const isDarkMode = root.classList.contains('dark');
                    setChartOptions((prevOptions) => ({
                        ...prevOptions,
                        chart: {
                            ...prevOptions.chart,
                            background: isDarkMode ? 'neutral-900' : '#ffffff',
                            foreColor: isDarkMode ? '#e5e7eb' : '#000000',
                        },
                        xaxis: {
                            ...prevOptions.xaxis,
                            labels: {
                                style: {
                                    colors: isDarkMode ? '#e5e7eb' : '#000000'
                                }
                            }
                        },
                        yaxis: {
                            ...prevOptions.yaxis,
                            labels: {
                                style: {
                                    colors: isDarkMode ? '#e5e7eb' : '#000000'
                                }
                            },
                            title: {
                                style: {
                                    color: isDarkMode ? '#e5e7eb' : '#000000'
                                }
                            }
                        },
                        theme: {
                            mode: isDarkMode ? 'dark' : 'light',
                        }
                    }));
                }
            });
        });

        observer.observe(root, { attributes: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {isClient && (
                <ApexCharts
                    options={chartOptions}
                    series={series}
                    type='bar'
                    width={1200}
                    height={424}
                />
            )}
        </>
    );
}

export default Grafico;
