"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from '@/assets/logo_vermelha.png';
import Link from 'next/link';
import { Menu, X } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex flex-col items-center bg-primary-white w-full relative">
            <div className="py-1 flex w-full h-22 gap-20 px-5 sm:px-10 lg:px-20 xl:px-44 mx-auto items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-4">
                    <button
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md"
                        onClick={toggleNavbar}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                    <Link href="/" className="flex flex-row items-center justify-center gap-4">
                        <Image className="size-14 lg:size-20" src={Logo} alt='Logo' />
                        <h1 className="text-center text-2xl text-neutral-700 sm:text-3xl font-DMsans">
                            <strong>Minas</strong>deCultura
                        </h1>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center text-lg lg:text-xl space-x-4 font-DMsans">
                    <Link className="text-neutral-700 rounded-lg p-2 " href="/">HOME</Link>
                    <Link className="text-neutral-700 rounded-lg p-2 " href="/Sobre">SOBRE</Link>
                    <Link className="text-white rounded-2xl p-2 bg-primary-red" href="/Pesquisa">PESQUISA </Link>
                </nav>
            </div>
            <nav className={`mobile-menu w-full md:hidden bg-primary-white shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col items-start space-y-1 py-2 px-8 sm:px-10">
                    <Link href="/">
                        <button className="text-lg block w-full text-center py-2 font-DMsans">HOME</button>
                    </Link>
                    <Link href="/Sobre">
                        <button className="text-lg block w-full text-center py-2 font-DMsans">SOBRE</button>
                    </Link>
                    <Link href="/Pesquisa">
                        <button className="text-lg block w-full text-center py-2 font-DMsans">PESQUISA FILTRADA</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
