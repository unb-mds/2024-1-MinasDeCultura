import Image from "next/image";
import Logo from '@/assets/Logo.png';
import Sobre from "../app/Sobre/page";
import Link from 'next/link';


export function Header() {

    return (
            <header className="flex w-full h-22 bg-primary-white relative px-44 mx-auto items-center justify-between rounded-xl">
                <div>
                    <Image
                        src={Logo}
                        alt='Logo'
                    />
                </div>
                <ul className="flex gap-10 font-sans 2xl">
                    <li>
                        <button>
                            <span>
                                HOME
                            </span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>
                                SOBRE
                            </span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>
                                PESQUISA FILTRADA
                            </span>
                        </button>
                    </li>                       
                </ul>
            </header>
    )
}
