import Image from "next/image";
import lupa from '@/assets/lupa.png';
import calendario from '@/assets/calendario.png';
import arrow from '@/assets/arrow.png';
import local from '@/assets/local.png';

export default function Home() {
  return (
    <main className="bg-primary-gray flex flex-col items-center min-h-screen p-[44px]">
      <div className="w-[1390px] bg-primary-white border rounded-lg flex flex-col items-center justify-center px-[70px] py-[23px]">
        <h1 className="font-sans text-4xl text-center mb-[50px]">
          Realize sua pesquisa filtrando os resultados desejados:
        </h1>
        <div className="flex gap-[34px]">
          <ul className="flex gap-4">
            <li className="relative flex items-center">
              <Image
                src={lupa}
                alt="lupa"
                width={24}
                height={24}
              />
              <input
                type="text"
                placeholder="Assunto"
                className="flex-1 px-4 py-2 "
              />
              <div className="border-b border-black absolute left-0 right-0 bottom-0"></div>
            </li>
            
            <li className="relative flex items-center">
              <Image
                src={local}
                alt="Local"
                width={24}
                height={24}
              />
              <input
                type="text"
                placeholder="Local"
                className="flex-1 px-4 py-2 "
              />
              <div className="border-b border-black absolute left-0 right-0 bottom-0"></div>
            </li>

            <li className="relative flex items-center">
              <Image
                src={calendario}
                alt="calendario"
                width={24}
                height={24}
              />
              <input
                type="text"
                placeholder="Data"
                className="flex-1 px-4 py-2"
              />
              <div className="border-b border-black absolute left-0 right-0 bottom-0"></div>
            </li>
            <li className="relative flex items-center">
              <Image
                src={arrow}
                alt="arrow"
                width={24}
                height={24}
              />
              <button className="w-[177px] h-[48px] px-4 py-2 bg-primary-red text-white rounded-lg">
                Buscar
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1382px] h-[485px] bg-primary-white border rounded-lg mt-8">

      </div>
    </main>
  );
}