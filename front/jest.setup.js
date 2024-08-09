import React from 'react';
import '@testing-library/jest-dom/extend-expect';
jest.mock('@/assets/logo_vermelha.png', () => 'test-file-stub');
jest.mock('next/image', () => {
  return ({ src, alt }) => {
    // Retorna uma tag de imagem básica para simulação nos testes
    return <img src={src} alt={alt} />;
  };
});
