"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from '@/assets/logo_vermelha.png';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex flex-col items-center bg-primary-white dark:bg-neutral-800 w-full relative">
            <div className="py-1 flex w-full h-22 gap-20 px-5 sm:px-10 lg:px-20 xl:px-44 mx-auto items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-4">
                    <button
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md"
                        onClick={toggleNavbar}
                    >
                        {isOpen ? <X className="text-neutral-700 dark:text-neutral-300" /> : <Menu className="text-neutral-700 dark:text-neutral-300" />}
                    </button>
                    <Link href="/" className="flex flex-row items-center justify-center gap-4">
                        <Image className="size-14 lg:size-20" src={Logo} alt='Logo' />
                        <h1 className="text-center text-2xl text-neutral-700 dark:text-neutral-300 sm:text-3xl font-DMsans">
                            <strong>Minas</strong>deCultura
                        </h1>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center text-lg lg:text-xl space-x-4 font-DMsans">
                    <Link className="text-neutral-700 dark:text-neutral-300 rounded-lg p-2" href="/">HOME</Link>
                    <Link className="text-neutral-700 dark:text-neutral-300 rounded-lg p-2" href="/Sobre">SOBRE</Link>
                    <Link className="text-neutral-700 dark:text-neutral-300 rounded-lg p-2" href="/Pesquisa">PESQUISA FILTRADA</Link>
                </nav>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
                >
                    {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
            </div>
            <nav className={`mobile-menu w-full md:hidden bg-primary-white dark:bg-neutral-900 shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col items-start space-y-1 py-2 px-8 sm:px-10">
                    <Link href="/">
                        <button className="text-lg block w-full text-center py-2 font-DMsans text-neutral-700 dark:text-neutral-300">HOME</button>
                    </Link>
                    <Link href="/Sobre">
                        <button className="text-lg block w-full text-center py-2 font-DMsans text-neutral-700 dark:text-neutral-300">SOBRE</button>
                    </Link>
                    <Link href="/Pesquisa">
                        <button className="text-lg block w-full text-center py-2 font-DMsans text-neutral-700 dark:text-neutral-300">PESQUISA FILTRADA</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
