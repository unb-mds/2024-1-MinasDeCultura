import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filtro from '../components/Filtro';

describe('Filtro', () => {
  test('renders the Filtro component', () => {
    render(<Filtro />);

    // Check if the heading is rendered
    const headingElement = screen.getByText(/Pesquise por cidade periodo e tema/i);
    expect(headingElement).toBeInTheDocument();

    // Check if the inputs are rendered
    const assuntoInput = screen.getByPlaceholderText(/Assunto/i);
    const localInput = screen.getByPlaceholderText(/Local/i);
    const dataInput = screen.getByPlaceholderText(/Data/i);
    expect(assuntoInput).toBeInTheDocument();
    expect(localInput).toBeInTheDocument();
    expect(dataInput).toBeInTheDocument();

    // Check if the button is rendered
    const buttonElement = screen.getByRole('button', { name: /Buscar/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('inputs and button function correctly', () => {
    render(<Filtro />);

    // Get the inputs and button
    const assuntoInput = screen.getByPlaceholderText(/Assunto/i);
    const localInput = screen.getByPlaceholderText(/Local/i);
    const dataInput = screen.getByPlaceholderText(/Data/i);
    const buttonElement = screen.getByRole('button', { name: /Buscar/i });

    // Simulate user typing in inputs
    fireEvent.change(assuntoInput, { target: { value: 'Educação' } });
    fireEvent.change(localInput, { target: { value: 'Belo Horizonte' } });
    fireEvent.change(dataInput, { target: { value: '2024-08-01' } });

    // Check if the input values are updated
    expect(assuntoInput.value).toBe('Educação');
    expect(localInput.value).toBe('Belo Horizonte');
    expect(dataInput.value).toBe('2024-08-01');

    // Simulate button click
    fireEvent.click(buttonElement);

    // You can add more assertions here to check what happens when the button is clicked
  });
});
