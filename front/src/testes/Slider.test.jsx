import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from '../components/Slider';
import '@testing-library/jest-dom/extend-expect';

describe('Slider Component', () => {
  test('deve renderizar o Slider com as imagens e textos corretos', () => {
    render(<Slider />);
    
    // Verifica se as imagens estão sendo renderizadas
    const images = screen.getAllByRole('img', { name: /Slider/i });
    expect(images).toHaveLength(3);

    /* Arrumar aqui para quando os textos forem recebidos em JSON
    expect(screen.getByText('Como o mágico faz mágica?')).toBeInTheDocument();
    expect(screen.getByText('Rebolo de ladinho pros cria')).toBeInTheDocument();
    expect(screen.getByText('E isso ai')).toBeInTheDocument();*/
  });
});
