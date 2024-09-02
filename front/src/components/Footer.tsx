import Image from "next/image";
import ImgGit from '@/assets/imggit.png';
import unblogo from '@/assets/unblogo.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" bg-primary-red p-10">
      <div>
        <h1 className="text-white lg:text-4xl sm:text-3xl text-2xl -mb-16 flex justify-initial"><strong>Minas</strong>deCultura</h1>
      </div>
        <ul className="flex gap-10 font-sans text-2xl bg-primary-red text-white mt-8 ml-96">
            <li className="hidden lg:flex">
                <Link href="/">
                    <button className="text-lg">HOME</button>
                </Link>
            </li>
            <li className="hidden lg:flex">
                <Link href="/Sobre" >
                    <button className="text-lg">SOBRE</button>
                </Link> 
            </li>
            <li className="hidden lg:flex">
                <Link href="/Pesquisa" >
                    <button className="text-lg">PESQUISA FILTRADA</button>
                </Link>
            </li>                   
        </ul>
        <div className="flex justify-end gap-6">
          <a href="https://unb.br" target="_  blank" rel="noopener noreferrer">
            <Image className="hidden md:flex w-12 h-12 lg:-mt-9 lg:mb-10 -mt-4"
                src={unblogo}
                alt='unblogo'
            />       
          </a>
          <a href="https://github.com/unb-mds/2024-1-MinasDeCultura" target="_blank" rel="noopener noreferrer">
            <Image className="lg:-mt-12 lg:mb-10 -mt-4"
              src={ImgGit}
              alt='imggit'
            />
          </a>
        </div>
        <div className="hidden lg:flex justify-end ">       
            
        </div>
        <div className="w-full h-px bg-white hidden sm:flex"></div>
        <div className="flex justify-end">
          <p className="text-white mt-10 hidden sm:flex">© 2024. All Rights Reserved.</p>
        </div>
                
    </footer>
  )
}

export default Footer;
