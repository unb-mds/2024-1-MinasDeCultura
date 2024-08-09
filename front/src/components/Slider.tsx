import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const data = [
    { id: '1', image: 'https://s3-alpha-sig.figma.com/img/c78b/78f1/b9537749840db161b8ed24d85dffc6a5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=plYV3zIFr6E00m910rQWSxUhYiVggfDxdfT9DtC2VD0gDVXWZ4WfQFjTimSr2plLBcRYpb6BYOfm9lKul5xe2Hd82YaX~Mc8j2x65mzOsIPoIAqy0azkW1cP4NiC5gNQPW5OaN31fccAUo~1J901QCSRheMxXiPaW2wWYqovJxPwFXE1GwLj3raPfoJdnk3uSCBqZA8N6PJBFvIqwTB6miDwxLl743HQ0Fdqhm5yQqB5C4uHUoDtriaE2ZUDKd3dyoSthablJ0plZQBdt6UAKDlhy4dP01USKZF9abUvzPiKTealX-~u-wxk0iFskahPrbm7IQzAJ4vt~Q~aPlVjmQ__', text: 'Como o mágico faz mágica?' },
    { id: '2', image: 'https://www.secult.mg.gov.br/images/2024/Cruzeiro_do_Parque_Estadual_do_Ibitipoca_-_Foto_Reprodu%C3%A7%C3%A3o_ief.mg.gov.br.jpg', text: 'Rebolo de ladinho pros cria' },
    { id: '3', image: 'https://www.secult.mg.gov.br/images/2024/%C3%93pera_DEvo%C3%A7%C3%A3o_em_Congonhas.jpeg', text: 'E isso ai' },
];

const Slider = () => {
    return(
        <div className="flex justify-center items-center mb-16 bg-primary-gray">
                <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation={ true }
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                    <div className="w-full h-96">
                            <img
                                src={item.image}
                                alt="Slider"
                                className="w-full h-full object-cover"
                            />
                          <div className="absolute bottom-0 w-full p-4 bg-primary-gray bg-opacity-30 text-white font-sans text-4xl">
                                <p className="text-center">{item.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>

        </div>
    )
}

export default Slider