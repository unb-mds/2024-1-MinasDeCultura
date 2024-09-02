import { MoveRight } from "lucide-react";
import Lupa1 from "../assets/lupa1.png";
import Image from "next/image";
import Link from 'next/link';

const Busca = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-primary-gray dark:bg-neutral-900 p-6">
      <Image
        className="lg:ml-10 lg:h-auto lg:w-auto sm:h-48 sm:w-48 h-32 w-32 mt-4 lg:mt-0"
        src={Lupa1}
        alt='Lupa1'
      />
      <div className="mt-6 lg:mt-0 lg:ml-8 text-center lg:text-left">
        <h1 className="text-azul-busca dark:text-primary-white font-DMsans lg:text-4xl sm:text-3xl text-2xl">
          <strong>Faça sua busca <br className="hidden sm:block" /> filtrada</strong>:
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 lg:text-2xl sm:text-xl text-sm mt-2">
          Veja os dados para cada município do Estado de <br className="hidden sm:block" /> Minas Gerais
        </p>
        <Link href="/Pesquisa">
          <button className="flex flex-row items-center gap-2 justify-center bg-primary-red text-white rounded-lg mt-6 lg:px-8 lg:py-4 sm:px-6 sm:py-4 px-4 py-2 mx-auto lg:mx-0">
            Buscar
            <MoveRight className="w-6 h-6" color="#fff" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Busca;
