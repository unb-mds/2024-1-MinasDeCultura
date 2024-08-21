import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filtro from '../components/Filtro';
import { fetchCities, fetchUnits, searchLicitacoes } from '../services/api';
import ApexCharts from 'react-apexcharts';

// Mock das funções de API
jest.mock('../services/api');

// Mock do ApexCharts
jest.mock('react-apexcharts', () => {
  return function MockApexCharts() {
    return <div data-testid="mock-apexcharts">Mock ApexCharts</div>;
  };
});

const mockCities = [
  { id: 1, name: 'Cidade 1' },
  { id: 2, name: 'Cidade 2' },
];

const mockUnits = [
  { id: 1, name: 'Unidade 1' },
  { id: 2, name: 'Unidade 2' },
];

const mockLicitacoes = [
  {
    administrative_unit_id: 1,
    city_id: 1,
    committed_value: 1000,
    liquidated_value: 800,
    paid_value: 600,
    year: 2023,
    month: 1,
  },
  // Adicione mais dados conforme necessário
];

beforeEach(() => {
  fetchCities.mockResolvedValue(mockCities);
  fetchUnits.mockResolvedValue(mockUnits);
  searchLicitacoes.mockResolvedValue(mockLicitacoes);
});

test('renders Filtro component', async () => {
  render(<Filtro />);

  // Verifica se o título está presente
  expect(screen.getByText('Pesquise por cidade, período e tema')).toBeInTheDocument();

  // Verifica se o seletor de cidades está presente
  expect(screen.getByText('Selecione uma cidade')).toBeInTheDocument();

  // Aguarda a carga das cidades
  await waitFor(() => expect(fetchCities).toHaveBeenCalled());

  // Simula a seleção de uma cidade
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });

  // Verifica se a cidade foi selecionada
  expect(screen.getByRole('combobox')).toHaveValue('1');

  // Simula a seleção de datas
  fireEvent.change(screen.getByPlaceholderText('Data Inicial'), { target: { value: '01 / 2023' } });
  fireEvent.change(screen.getByPlaceholderText('Data final'), { target: { value: '12 / 2023' } });

  // Aguarda a busca de licitações
  await waitFor(() => expect(searchLicitacoes).toHaveBeenCalled());

  // Verifica se os gráficos são renderizados
  expect(screen.getByText('Valor Empenhado')).toBeInTheDocument();
  expect(screen.getByText('Valor Liquidado')).toBeInTheDocument();
  expect(screen.getByText('Valor Pago')).toBeInTheDocument();

  // Verifica se há três gráficos renderizados
  const charts = screen.getAllByTestId('mock-apexcharts');
  expect(charts).toHaveLength(3);
});