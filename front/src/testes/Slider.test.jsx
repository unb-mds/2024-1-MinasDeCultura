import { render, screen } from '@testing-library/react';
import Slider from '../components/Slider';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders slider with fetched data', async () => {
  fetchMock.mockResponseOnce(JSON.stringify([
    {
      link: '/noticia1',
      image_url: '/image1.jpg',
      title: 'Notícia 1'
    },
    {
      link: '/noticia2',
      image_url: '/image2.jpg',
      title: 'Notícia 2'
    },
    {
      link: '/noticia3',
      image_url: '/image3.jpg',
      title: 'Notícia 3'
    },
    {
      link: '/noticia4',
      image_url: '/image4.jpg',
      title: 'Notícia 4'
    },
    {
      link: '/noticia5',
      image_url: '/image5.jpg',
      title: 'Notícia 5'
    },
    {
      link: '/noticia6',
      image_url: '/image6.jpg',
      title: 'Notícia 6'
    }
    
  ]));

  render(<Slider />);

  const imgElements = await screen.findAllByAltText('Slider');
  
  expect(imgElements[0]).toHaveAttribute('src', 'https://www.secult.mg.gov.br/image1.jpg');
  expect(imgElements[1]).toHaveAttribute('src', 'https://www.secult.mg.gov.br/image2.jpg');
  expect(imgElements[2]).toHaveAttribute('src', 'https://www.secult.mg.gov.br/image3.jpg');
  expect(imgElements[3]).toHaveAttribute('src', 'https://www.secult.mg.gov.br/image4.jpg');
  expect(imgElements[4]).toHaveAttribute('src', 'https://www.secult.mg.gov.br/image5.jpg');
  expect(imgElements[5]).toHaveAttribute('src', 'https://www.secult.mg.gov.br/image6.jpg');

  const linkElements = screen.getAllByRole('link');
  expect(linkElements[0]).toHaveAttribute('href', 'https://www.secult.mg.gov.br/noticia1');
  expect(linkElements[1]).toHaveAttribute('href', 'https://www.secult.mg.gov.br/noticia2');
  expect(linkElements[2]).toHaveAttribute('href', 'https://www.secult.mg.gov.br/noticia3');
  expect(linkElements[3]).toHaveAttribute('href', 'https://www.secult.mg.gov.br/noticia4');
  expect(linkElements[4]).toHaveAttribute('href', 'https://www.secult.mg.gov.br/noticia5');
  expect(linkElements[5]).toHaveAttribute('href', 'https://www.secult.mg.gov.br/noticia6');
});