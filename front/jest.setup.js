import React from 'react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('@/assets/logo_vermelha.png', () => 'test-file-stub');
jest.mock('next/image', () => {
  return ({ src, alt }) => {
    // Retorna uma tag de imagem básica para simulação nos testes
    return <img src={src} alt={alt} />;
  };
});

jest.mock('@/assets/unblogo.png', () => 'test-file-stub');
jest.mock('next/image', () => {
  return ({ src, alt }) => {
    return <img src={src} alt={alt} />;
  };
});

jest.mock('@/assets/imggit.png', () => 'test-file-stub');
jest.mock('next/image', () => {
  return ({ src, alt }) => {
    return <img src={src} alt={alt} />;
  };
});

jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div>{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}));

jest.mock('swiper/modules', () => ({
  Navigation: {},
  Pagination: {},
  Autoplay: {},
}));

jest.mock('swiper/css', () => {});
jest.mock('swiper/css/navigation', () => {});
jest.mock('swiper/css/pagination', () => {});
jest.mock('swiper/css/autoplay', () => {});

