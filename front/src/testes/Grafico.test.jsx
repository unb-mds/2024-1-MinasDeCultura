import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Grafico from '../components/Grafico';

jest.mock('react-apexcharts', () => () => <div data-testid="apexchart">ApexChart Mock</div>);
function resizeWindow(width) {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
}

describe('Grafico Component', () => {
    beforeEach(() => {
        window.innerWidth = 1200; // Valor padrão
    });
    
    test('deve renderizar o gráfico corretamente', async () => {
        await act(async () => {
            render(<Grafico />);
        });

        // Verifica se o gráfico foi renderizado após a montagem do componente
        expect(screen.getByTestId('apexchart')).toBeInTheDocument();
    });

    test('deve renderizar corretamente em telas pequenas (<= 640px)', async () => {
        act(() => resizeWindow(640));

        await act(async () => {
            render(<Grafico />);
        });

        // Verifica se o gráfico foi renderizado
        expect(screen.getByTestId('apexchart')).toBeInTheDocument();
    });

    test('deve renderizar corretamente em telas médias (>= 641px e <= 1024px)', async () => {
        act(() => resizeWindow(800));

        await act(async () => {
            render(<Grafico />);
        });

        // Verifica se o gráfico foi renderizado
        expect(screen.getByTestId('apexchart')).toBeInTheDocument();
    });

    test('deve renderizar corretamente em telas grandes (>= 1025px)', async () => {
        act(() => resizeWindow(1025));

        await act(async () => {
            render(<Grafico />);
        });

        // Verifica se o gráfico foi renderizado
        expect(screen.getByTestId('apexchart')).toBeInTheDocument();
    });
});