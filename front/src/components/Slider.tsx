import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface NewsItem {
    link: string;
    image_url: string;
    title: string;
}

const Slider: React.FC = () => {
    const [data, setData] = useState<NewsItem[]>([]);
    const site = 'https://www.secult.mg.gov.br';

    useEffect(() => {
        fetch('/data/novas_noticias.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o arquivo JSON');
                }
                return response.json();
            })
            .then(jsonData => setData(jsonData))
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    return (
        <div className="container font-Dmsans">
            <h1 className='font-DMsans text-center p-2 md:p-5 text-xl lg:text-3xl font-DMsans text-neutral-700 dark:text-neutral-300'>
                <span>
                    <strong>Notícias Recentes sobre Cultura em Minas Gerais</strong>
                </span>
            </h1>
            <div className="relative flex justify-center items-center bg-primary-gray dark:bg-neutral-800">
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <a className="w-full h-96" href={`${site}${item.link}`} target='_blank'>
                                <Image
                                    src={`${site}${item.image_url}`}
                                    alt="Slider"
                                    className="w-full object-cover h-96"
                                    width={1920}
                                    height={1080}
                                />

                                <div className="absolute bottom-0 w-full p-4 bg-black dark:bg-neutral-800 bg-opacity-30 text-white font-sans lg:text-4xl md:text-xl text-sm">
                                    <p className="text-center">{item.title}</p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
