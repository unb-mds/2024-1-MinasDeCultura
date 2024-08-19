import { render, screen } from '@testing-library/react';
import Busca from '../components/Busca';
import '@testing-library/jest-dom';
import { MoveRight } from 'lucide-react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img alt={props.alt} {...props} />, // mock do componente Next.js Image
}));

jest.mock('lucide-react', () => ({
  MoveRight: (props) => <svg {...props} />, // mock do ícone MoveRight
}));

describe('Busca Component', () => {
  it('should render the image with correct alt text', () => {
    render(<Busca />);
    
    const image = screen.getByAltText('Lupa1');
    expect(image).toBeInTheDocument();
  });

  it('should render the main heading with the correct text', () => {
    render(<Busca />);
    
    const heading = screen.getByRole('heading', {
      name: /faça sua busca filtrada/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render the paragraph with the correct text', () => {
    render(<Busca />);
    
    const paragraph = screen.getByText(/veja os dados para cada município do estado de minas gerais/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('should render the button with the correct text and icon', () => {
    render(<Busca />);
    
    const button = screen.getByRole('button', {
      name: /buscar/i,
    });
    expect(button).toBeInTheDocument();
    
    const icon = screen.getByRole('img', {
      hidden: true, // O ícone é um SVG e não será visível por padrão
    });
    expect(icon).toBeInTheDocument();
  });
});
