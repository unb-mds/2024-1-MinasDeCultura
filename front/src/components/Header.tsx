import Image from "next/image";
import Logo from '@/assets/logo_vermelha.png';
import Link from 'next/link';
import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="flex w-full h-22 bg-primary-white relative px-5 gap-20 sm:px-20 lg:px-44 mx-auto items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-4">
                    <Menu className="w-6 h-6 lg:hidden gap-4" />
                    <Image className="size-14 lg:size-20"
                        src={Logo}
                        alt='Logo'
                    />
                    <h1 className="text-center text-2xl sm:text-3xl font-DMsans "><strong>Minas</strong>deCultura</h1>
            </div>
            <ul className="hidden lg:flex lg:gap-10 lg:font-DMsans">
                <li>
                    <Link href="/">
                        <button className="text-lg">HOME</button>
                    </Link>
                </li>
                <li>
                    <Link href="/Sobre" >
                        <button className="text-lg">SOBRE</button>
                    </Link> 
                </li>
                <li>
                    <Link href="/Pesquisa" >
                        <button className="text-lg">PESQUISA FILTRADA</button>
                    </Link>
                </li>                       
            </ul>
        </header>
    );
}
