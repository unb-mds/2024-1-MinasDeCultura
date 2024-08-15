import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filtro from '../components/Filtro';

describe('Filtro Component', () => {

  test('renders Filtro component', () => {
    render(<Filtro />);
    
    // Check if the title is rendered
    expect(screen.getByText(/Pesquise por cidade, período e tema/i)).toBeInTheDocument();
  
    // Check if all input fields are rendered
    expect(screen.getByPlaceholderText(/Assunto/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Local/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Data Inicial/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Data final/i)).toBeInTheDocument();
  });

  test('handles subject and location input changes', () => {
    render(<Filtro />);

    const subjectInput = screen.getByPlaceholderText(/Assunto/i);
    const locationInput = screen.getByPlaceholderText(/Local/i);

    fireEvent.change(subjectInput, { target: { value: 'Educação' } });
    fireEvent.change(locationInput, { target: { value: 'Belo Horizonte' } });

    expect(subjectInput).toHaveValue('Educação');
    expect(locationInput).toHaveValue('Belo Horizonte');
  });

  test('handles start and end date selection', () => {
    render(<Filtro />);
    
    const startDatePicker = screen.getByPlaceholderText(/Data Inicial/i);
    const endDatePicker = screen.getByPlaceholderText(/Data final/i);
  
    // Select a start date
    act(() => {
      fireEvent.change(startDatePicker, { target: { value: '01 / 2024' } });
    });
  
    // Select an end date that is before the start date
    act(() => {
      fireEvent.change(endDatePicker, { target: { value: '12 / 2023' } });
    });
  
    // The start date should remain the same, and the end date should reflect the user selection
    expect(startDatePicker).toHaveValue('01 / 2024');
    expect(endDatePicker).toHaveValue('12 / 2023');
  });
  

  test('handles search button click', () => {
    render(<Filtro />);
    
    const searchButton = screen.getByText(/Buscar/i);
    
    fireEvent.click(searchButton);
  });


});
