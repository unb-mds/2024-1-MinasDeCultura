import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Integrantes from '../components/Integrantes';
import Gabriel from "../assets/Gabriel.png";
import Isaac from "../assets/Isaac.jpeg";
import Marcos from "../assets/Marcos.jpeg";
import Manuella from "../assets/Manuella.png";
import Mateus from "../assets/Mateus.jpeg";
import William from "../assets/William.jpeg";

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
      expect(images[0]).toHaveAttribute('src', Gabriel);
      expect(images[1]).toHaveAttribute('src', Isaac);
      expect(images[2]).toHaveAttribute('src', Marcos);
      expect(images[3]).toHaveAttribute('src', Manuella);
      expect(images[4]).toHaveAttribute('src', Mateus);
      expect(images[5]).toHaveAttribute('src', William);
    });
});
