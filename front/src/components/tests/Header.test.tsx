import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import { Header } from '../Header';
import '@testing-library/jest-dom'; // Importa as extensões do jest-dom para o expect

describe('Header Component', () => {
  test('Deve renderizar o logo e o título corretamente', () => {
    render(<Header />);
    const logo = screen.getByAltText('Logo');
    const title = screen.getByRole('heading', { level: 1, name: /MinasdeCultura/i });
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Deve renderizar os links de navegação corretamente', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: /HOME/i });
    const sobreLink = screen.getByRole('link', { name: /SOBRE/i });
    const pesquisaLink = screen.getByRole('link', { name: /PESQUISA FILTRADA/i });
    expect(homeLink).toBeInTheDocument();
    expect(sobreLink).toBeInTheDocument();
    expect(pesquisaLink).toBeInTheDocument();
  });

  test('Deve alternar o menu móvel ao clicar no botão de menu', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', { hidden: true });

    // Inicialmente, o menu deve estar fechado
    expect(screen.queryByText(/HOME/i, { selector: 'button' })).not.toBeInTheDocument();

    // Clicar para abrir o menu
    fireEvent.click(menuButton);
    expect(screen.getByText(/HOME/i, { selector: 'button' })).toBeInTheDocument();
    expect(screen.getByText(/SOBRE/i, { selector: 'button' })).toBeInTheDocument();
    expect(screen.getByText(/PESQUISA FILTRADA/i, { selector: 'button' })).toBeInTheDocument();

    // Clicar para fechar o menu
    fireEvent.click(menuButton);
    expect(screen.queryByText(/HOME/i, { selector: 'button' })).not.toBeInTheDocument();
  });
});
