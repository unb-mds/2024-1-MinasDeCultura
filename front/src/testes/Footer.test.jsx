import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import  Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders the navigation links', () => {
    render(<Footer />);

    const homeLink = screen.getByRole('button', { name: /HOME/i });
    const sobreLink = screen.getByRole('button', { name: /SOBRE/i });
    const pesquisaLink = screen.getByRole('button', { name: /PESQUISA FILTRADA/i });

    expect(homeLink).toBeInTheDocument();
    expect(sobreLink).toBeInTheDocument();
    expect(pesquisaLink).toBeInTheDocument();
  });

  test('navigation links redirect correctly', () => {
    render(<Footer />);

    const homeLink = screen.getByRole('button', { name: /HOME/i });
    const sobreLink = screen.getByRole('button', { name: /SOBRE/i });
    const pesquisaLink = screen.getByRole('button', { name: /PESQUISA FILTRADA/i });

    // Simula o clique nos links e verifica se os links estão presentes
    fireEvent.click(homeLink);
    expect(screen.getByRole('link', { name: /HOME/i })).toHaveAttribute('href', '/');

    fireEvent.click(sobreLink);
    expect(screen.getByRole('link', { name: /SOBRE/i })).toHaveAttribute('href', '/Sobre');

    fireEvent.click(pesquisaLink);
    expect(screen.getByRole('link', { name: /PESQUISA FILTRADA/i })).toHaveAttribute('href', '/Pesquisa');
  });

  test('renders the GitHub link', () => {
    render(<Footer />);

    const githubLink = screen.getByRole('link', { name: 'imggit' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/unb-mds/2024-1-MinasDeCultura');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
