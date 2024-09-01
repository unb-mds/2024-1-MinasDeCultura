import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filtro from '../components/Filtro';
import { fettchYearAndMonthTender } from '../services/api';

// Mock das funções de API
jest.mock('../services/api');

// Mock do ApexCharts
jest.mock('react-apexcharts', () => {
  return function MockApexCharts() {
    return <div data-testid="mock-apexcharts">Mock ApexCharts</div>;
  };
});

const mockData = [
  {
    committed_value: 1000,
    liquidated_value: 800,
    paid_value: 600,
    year: 2023,
    month: 1,
  },
];

beforeEach(() => {
  fettchYearAndMonthTender.mockResolvedValue(mockData);
});

test('renders Dashboard component and interacts with date pickers', async () => {
  render(<Filtro />);

  // Verifica se o título está presente
  expect(screen.getByText('Pesquise por período')).toBeInTheDocument();

  // Verifica se os campos de data inicial e final estão presentes
  expect(screen.getByPlaceholderText('Data Inicial')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Data Final')).toBeInTheDocument();

  // Simula a seleção de datas
  fireEvent.change(screen.getByPlaceholderText('Data Inicial'), { target: { value: '01/2023' } });
  fireEvent.change(screen.getByPlaceholderText('Data Final'), { target: { value: '12/2023' } });

  // Aguarda a busca de dados
  await waitFor(() => expect(fettchYearAndMonthTender).toHaveBeenCalled());

  // Verifica se os valores totais são exibidos
  expect(screen.getByText('Total Empenhado')).toBeInTheDocument();
  expect(screen.getByText('Total Liquidado')).toBeInTheDocument();
  expect(screen.getByText('Total Pago')).toBeInTheDocument();

  // Verifica se os gráficos são renderizados
  const charts = screen.getAllByTestId('mock-apexcharts');
  expect(charts).toHaveLength(2); // O Dashboard tem dois gráficos
});