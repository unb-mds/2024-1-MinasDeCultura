import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../components/Header';

describe('Header', () => {
  test('renders the header component', () => {
    render(<Header />);
    
    // Verifica se o texto MinasdeCultura é renderizado
    const titleElement = screen.getByText(/Minas/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('toggles the navbar when the button is clicked', () => {
    render(<Header />);
    
    // Seleciona o botão de toggle pelo aria-label
    const toggleButton = screen.getByLabelText(/Open menu/i);
    expect(toggleButton).toBeInTheDocument();

    // Verifica se o menu está inicialmente fechado
    const menu = document.querySelector('.mobile-menu');
    expect(menu).toHaveClass('max-h-0');

    // Simula o clique para abrir o menu
    fireEvent.click(toggleButton);

    // Verifica se o menu está visível após o clique
    expect(menu).not.toHaveClass('max-h-0');

    // Verifica se o botão de toggle mudou para "Close menu"
    const closeButton = screen.getByLabelText(/Close menu/i);
    expect(closeButton).toBeInTheDocument();

    // Simula o clique para fechar o menu
    fireEvent.click(closeButton);
    expect(menu).toHaveClass('max-h-0');
  });
});
