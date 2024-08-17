import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Integrantes from '../components/Integrantes';

describe('Integrantes', () => {
test('renders Integrantes component', () => {
    render(<Integrantes />);
    
    
    expect(screen.getByText('Gabriel Scheidt')).toBeInTheDocument();
    expect(screen.getByText('Isaac Batista')).toBeInTheDocument();
    expect(screen.getByText('Marcos Marinho')).toBeInTheDocument();
    expect(screen.getByText('Manuella Valadares')).toBeInTheDocument();
    expect(screen.getByText('Mateus Henrique')).toBeInTheDocument();
    expect(screen.getByText('William Bernardo')).toBeInTheDocument();
  });
  
    test('renders images correctly', () => {
      render(<Integrantes />);
      
     
      const images = screen.getAllByRole('img');
      expect(images[0]).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/111130521?v=4');
      expect(images[1]).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/118384776?v=4');
      expect(images[2]).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/108913498?v=4');
      expect(images[3]).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/119461383?v=4');
      expect(images[4]).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/163928182?v=4');
      expect(images[5]).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/124713089?v=4');
    });
});
