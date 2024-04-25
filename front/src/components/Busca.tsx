import {MoveRight } from "lucide-react";

const Busca = () => {
    return (
       <div className="bg-primary-gray" style={{ display: 'flex' }}>
        <div className="container h-[400px] w-[650px] bg-primary-white border rounded-lg mt-8 ml-12 mb-20"></div>
        <div>
         <h1 className="text-azul-busca font-DMsans text-5xl mt-20 ml-20">
                <strong>Faça sua busca <br></br>filtrada</strong>:
                <p className="text-bg-neutral-700 text-2xl" 
                >Veja os dados para cada município do Estado de <br></br>Minas Gerais</p>
                </h1>
                <button className="flex flex-row items-center gap-2 px-6 py-4 md:justify-start justify-center bg-primary-red text-white rounded-lg ml-20 mt-10">
                        Buscar
                        <MoveRight className="w-6 h-6" color="#fff" />
                </button>
        </div>
       </div>
    )
  }
  
  export default Busca