"use client"
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import axios from 'axios';

interface LicitacaoData {
  unidade_adm: string;
  valor_empenhado: string;
  valor_liquidado: string;
  valor_pago: string;
  ano: number;
  mes: number;
  cidade: string;
}

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [units, setUnits] = useState<string[]>([]);
  const [empenhadoSeries, setEmpenhadoSeries] = useState<ApexAxisChartSeries>([]);
  const [liquidadoSeries, setLiquidadoSeries] = useState<ApexAxisChartSeries>([]);
  const [pagoSeries, setPagoSeries] = useState<ApexAxisChartSeries>([]);

  const chartOptions: ApexOptions = {
    chart: {
        type: 'bar',
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
                    to: 50000000,
                    color: '#ED1C24'
                }],
            }
        }
    },
    legend: {
        show: false,
    },
    responsive:[
        {
          breakpoint:2500,
          options:{
            chart:{
                height: 200,
                width: 1200,
            }
        }
        },
        {
            breakpoint: 1025,
            options:{
                chart:{
                    height: 424,
                    width: 800,
                }
            }
        },
        {
            breakpoint: 640,
            options:{
                chart:{
                    height: 200,
                    width: 310,
                }
            }
        },
        {
            breakpoint: 769,
            options:{
                chart:{
                    height: 424,
                    width: 700
                }
            }
        }
    ],
  
  };
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/licitacoes?inicio=2301&fim=2312&cidade=${selectedCity}`);
      const data: LicitacaoData[] = await response.json();

      const processData = (data: LicitacaoData[]) => {
        const empData: { [key: string]: number[] } = {};
        const liquidData: { [key: string]: number[] } = {};
        const pagoData: { [key: string]: number[] } = {};
        const uniqueUnits = new Set<string>();

        data.forEach(item => {
          // Filtrar os dados pela unidade administrativa selecionada
          if (selectedUnit && item.unidade_adm !== selectedUnit) {
            return;
          }

          const month = item.mes - 1;
          uniqueUnits.add(item.unidade_adm);

          if (!empData[item.unidade_adm]) {
            empData[item.unidade_adm] = new Array(12).fill(0);
          }
          if (!liquidData[item.unidade_adm]) {
            liquidData[item.unidade_adm] = new Array(12).fill(0);
          }
          if (!pagoData[item.unidade_adm]) {
            pagoData[item.unidade_adm] = new Array(12).fill(0);
          }

          empData[item.unidade_adm][month] = parseFloat(item.valor_empenhado);
          liquidData[item.unidade_adm][month] = parseFloat(item.valor_liquidado);
          pagoData[item.unidade_adm][month] = parseFloat(item.valor_pago);
        });

        setUnits(Array.from(uniqueUnits)); 

        return { empData, liquidData, pagoData };
      };

      const { empData, liquidData, pagoData } = processData(data);

      const empenhadoSeries = Object.keys(empData).map(key => ({
        name: key,
        data: empData[key]
      }));

      const liquidadoSeries = Object.keys(liquidData).map(key => ({
        name: key,
        data: liquidData[key]
      }));

      const pagoSeries = Object.keys(pagoData).map(key => ({
        name: key,
        data: pagoData[key]
      }));

      setEmpenhadoSeries(empenhadoSeries);
      setLiquidadoSeries(liquidadoSeries);
      setPagoSeries(pagoSeries);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      fetchData();
    }
  }, [selectedCity, selectedUnit]);

  return (
    <div className="bg-primary-gray">
      <div className="bg-primary-gray p-4 rounded-md">
        <div className="flex justify-center mb-4">
          <label className="mr-2 text-lg font-DMSans text-azul-busca ">Cidade:</label>
          <select
            className="px-3 py-2 border border-black rounded-lg"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Selecione uma cidade</option>
            <option value="Juiz de Fora">Juiz de Fora</option>
            <option value="Montes Claros">Montes Claros</option>
          </select>
        </div>
        
        <div className="flex justify-center">
          <label className="mr-2 text-lg font-Dmsans text-azul-busca">Unidade Administrativa:</label>
          <select
            className="px-3 py-2 border border-black rounded-lg"
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            disabled={!selectedCity}
          >
            <option value="">Selecione uma unidade</option>
            {units.map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto">
        <div>
          <h2 className="flex justify-center font-DMsans text-2xl mt-4 mb-2">Valor Empenhado</h2>
          <Chart options={chartOptions} series={empenhadoSeries} type="bar" />
        </div>

        <div>
          <h2 className="flex justify-center font-DMsans text-2xl mt-2 mb-2">Valor Liquidado</h2>
          <Chart options={chartOptions} series={liquidadoSeries} type="bar" />
        </div>

        <div>
          <h2 className="flex justify-center font-DMsans text-2xl mt-2 mb-2">Valor Pago</h2>
          <Chart options={chartOptions} series={pagoSeries} type="bar" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;