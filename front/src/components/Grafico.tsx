"use client";//Precisa colocar o use client aqui e na página principal também
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const Grafico: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 500,
            background: '#ffffff',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                distributed: true,
                barHeight: '100%',
                colors:{
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
        },
        yaxis: {
            title: {
                text: 'Valor',
            }
        },
        /*tooltip: {
            y: {
                formatter: (val: number) => `${val} M`
            }
        },
        dataLabels: {
            formatter: (val: number) => `${val.toFixed(2)} M`
        },*/
        legend: {
            show: false,
        },
    };

    const series = [{
        name: 'Valor gasto',
        data: [20000, 300000, 65000, 100000, 200000, 200000, 20000, 30000, 20000, 75000, 300000, 200000]
    }];

    return (
        <>
            {isClient && (
                <ApexCharts
                    options={options}
                    series={series}
                    type='bar'
                    width={1550}
                    height={424}
                />
            )}
        </>
    );
}

export default Grafico;
