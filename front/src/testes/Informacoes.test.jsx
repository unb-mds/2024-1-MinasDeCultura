import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Informacoes from '../components/Informacoes';

describe('Informacoes', () => {
  test('renders the Informacoes component', () => {
    render(<Informacoes />);

    // Verifica se a imagem do logo é renderizada
    const logoImage = screen.getByAltText('Logo Vermelha');
    expect(logoImage).toBeInTheDocument();

    // Verifica se o título é renderizado
    const title = screen.getByText(/Projeto de Análise de Licitações Culturais/i);
    expect(title).toBeInTheDocument();

    // Verifica se o parágrafo é renderizado
    const paragraphText = "Este é um projeto desenvolvido como parte da disciplina de Métodos de Desenvolvimento de Software (MDS) da Universidade de Brasília (UnB). O objetivo principal deste projeto é criar uma plataforma online para análise e armazenamento de dados de licitações relacionadas aos gastos culturais apoiados pelo Governo Federal, utilizando a plataforma e a API do Querido Diário.";
    const paragraph = screen.getByText((content, element) => {
      const hasText = element => element.textContent === paragraphText;
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(child => !hasText(child));
      return elementHasText && childrenDontHaveText;
    });
    expect(paragraph).toBeInTheDocument();

    // Verifica se o link é renderizado
    const link = screen.getByRole('link', { name: /Github: https:\/\/unb-mds.github.io\/2024-1-MinasDeCultura\//i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://unb-mds.github.io/2024-1-MinasDeCultura/');
  });
});
