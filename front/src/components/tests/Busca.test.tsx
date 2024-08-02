import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import Busca from '../Busca';
import '@testing-library/jest-dom';

describe('Busca Component', () => {
  test('Deve renderizar a imagem corretamente', () => {
    render(<Busca />);
    const image = screen.getByAltText('Lupa1');
    expect(image).toBeInTheDocument();
  });

  test('Deve renderizar o título e a descrição corretamente', () => {
    render(<Busca />);
    const title = screen.getByRole('heading', { level: 1, name: /Faça sua busca/i });
    const description = screen.getByText(/Veja os dados para cada município do Estado de Minas Gerais/i);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('Deve renderizar o botão de busca corretamente', () => {
    render(<Busca />);
    const button = screen.getByRole('button', { name: /Buscar/i });
    expect(button).toBeInTheDocument();
  });
});
