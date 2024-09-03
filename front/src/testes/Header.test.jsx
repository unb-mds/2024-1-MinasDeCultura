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

    // Simula o clique para abrir o menu
    fireEvent.click(toggleButton);

    // Verifica se o menu mobile está visível após o clique
    const menus = screen.getAllByRole('navigation', { hidden: true });
    const mobileMenu = menus.find(menu => menu.classList.contains('mobile-menu'));
    expect(mobileMenu).toBeInTheDocument();

    // Verifica se o botão de toggle mudou para "Close menu"
    const closeButton = screen.getByLabelText(/Close menu/i);
    expect(closeButton).toBeInTheDocument();

    // Simula o clique para fechar o menu
    fireEvent.click(closeButton);

    // Verifica se o menu mobile foi fechado
    expect(mobileMenu).not.toBeInTheDocument();
  });
});
