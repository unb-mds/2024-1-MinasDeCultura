import Image from "next/image";
import Logo from '@/assets/Logo.png';
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
                    <Link href="/">
                        <button>
                            <span>
                                HOME
                            </span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/Sobre">
                        <button>
                            <span>
                                SOBRE
                            </span>
                        </button>
                    </Link>
                </li>
                <li>
                <Link href="/Pesquisa">
                        <button>
                            <span>
                                PESQUISA FILTRADA
                            </span>
                        </button>
                    </Link>
                </li>                       
            </ul>
        </header>
    )
}