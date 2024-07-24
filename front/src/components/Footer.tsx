import Image from "next/image";
import ImgGit from '@/assets/imggit.png';

const Footer = () => {
  return (
    <footer className=" bg-primary-red p-14">
      <div>
        <h1 className="text-white lg:text-4xl sm:text-3xl text-2xl -mt-6"><strong>Minas</strong>deCultura</h1>
      </div>
        <ul className="flex gap-10 font-sans text-2xl bg-primary-red text-white -mt-8 ml-96">
                    <li className="hidden lg:flex">
                        <button>
                            <span>
                                HOME
                            </span>
                        </button>
                    </li>
                    <li className="hidden lg:flex">
                        <button>
                            <span>
                                SOBRE
                            </span>
                        </button>
                    </li>
                    <li className="hidden lg:flex">
                        <button>
                            <span>
                                PESQUISA FILTRADA
                            </span>
                        </button>
                    </li>                       
                </ul>
                
                  <a href="https://github.com/unb-mds/2024-1-MinasDeCultura" target="_blank" rel="noopener noreferrer">
                  <Image className="lg:-mt-14 -mt-4"
                  src={ImgGit}
                  alt='imggit'
                  style={{marginLeft:'96%'}}
                  />
                  </a>
                  <div className="w-full h-px bg-white mt-20 hidden sm:flex"></div>
                  <div className="flex justify-end">
                   <p className="text-white mt-10 hidden sm:flex">© 2024. All Rights Reserved.</p>
                  </div>
                
    </footer>
  )
}

export default Footer