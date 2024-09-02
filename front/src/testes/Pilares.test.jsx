import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pilares from '../components/Pilares';

describe('Pilares', () => {
  test('renders the Pilares component', () => {
    render(<Pilares />);

    // Check if the main heading is rendered
    const mainHeading = screen.getByText(/A Secretaria de Cultura e Turismo do Estado de Minas Gerais/i);
    expect(mainHeading).toBeInTheDocument();

    // Check if the first section is rendered
    const firstHeading = screen.getByText(/Deve preservar/i);
    const firstSubheading = screen.getByText(/patrimônio cultural do estado de Minas Gerais/i);
    expect(firstHeading).toBeInTheDocument();
    expect(firstSubheading).toBeInTheDocument();

    // Check if the second section is rendered
    const secondHeading = screen.getByText(/Deve promover/i);
    const secondSubheading = screen.getByText(/acessibilidade e inclusão social à cultura/i);
    expect(secondHeading).toBeInTheDocument();
    expect(secondSubheading).toBeInTheDocument();

    // Check if the third section is rendered
    const thirdHeading = screen.getByText(/Deve fomentar/i);
    const thirdSubheading = screen.getByText(/produção artística da população/i);
    expect(thirdHeading).toBeInTheDocument();
    expect(thirdSubheading).toBeInTheDocument();
  });
});
