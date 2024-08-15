import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import React, { useState, useEffect } from 'react';

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
        <div className="flex justify-center items-center mb-16 bg-primary-gray">
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
                            <img
                                src={`${site}${item.image_url}`}
                                alt="Slider"
                                className="w-full object-cover h-96"
                            />
                            <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-30 text-white font-sans lg:text-4xl md:text-xl text-sm">
                                <p className="text-center">{item.title}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
