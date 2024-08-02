import {MoveRight } from "lucide-react";
import Lupa1 from "../assets/lupa1.png"
import Image from "next/image";

const Busca = () => {
    return (
       <div className="bg-primary-gray flex ">
        <Image className="lg:ml-10 sm:-ml-10 -ml-12 lg:h-auto lg:w-auto lg:mt-2 sm:h-96 sm:w-96 sm:mt-2 sm h-60 w-48 mt-16"
          src={Lupa1}
          alt='Lupa1'
        />
        <div>
         <h1 className="text-azul-busca font-DMsans mt-20 ml-4 lg:text-4xl sm:text-3xl text-xl ">
                <strong>Faça sua busca <br></br>filtrada</strong>:
                <p className="text-bg-neutral-700 lg:text-2xl sm:text-xl text-sm" 
                >Veja os dados para cada município do Estado de <br></br>Minas Gerais</p>
                </h1>
                <button className="flex flex-row items-center gap-2 md:justify-start justify-center bg-primary-red text-white rounded-lg ml-4 mt-8 lg:px-8 lg:py-4 sm:px-6 sm:py-4 px-2 py-1">
                        Buscar
                        <MoveRight className="w-6 h-6" color="#fff" />
                </button>
        </div>
       </div>
    )
  }
  
  export default Busca