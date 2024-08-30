"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from '@/assets/logo_vermelha.png';
import Link from 'next/link';
import { Menu, X, Sun, Moon, Contrast, PersonStanding, Text, AArrowUp } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [highContrast, setHighContrast] = useState(false);
    const [fontSize, setFontSize] = useState('');
    const [accessibilityMenuOpen, setAccessibilityMenuOpen] = useState(false);
    const [keepMenuOpen, setKeepMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        document.documentElement.classList.toggle('high-contrast', highContrast);
        document.documentElement.classList.toggle('font-lg', fontSize === 'text-lg');
        document.documentElement.classList.toggle('font-original', fontSize === 'text-base');
    }, [darkMode, highContrast, fontSize]);

    const toggleNavbar = () => setIsOpen(!isOpen);

    const increaseFontSize = () => setFontSize('text-lg');

    const resetFontSize = () => setFontSize('text-base');

    const handleMouseEnter = () => {
        setAccessibilityMenuOpen(true);
        setKeepMenuOpen(true);
    };

    const handleMouseLeave = () => {
        if (!keepMenuOpen) {
            setAccessibilityMenuOpen(false);
        }
    };

    const closeMenu = () => {
        setAccessibilityMenuOpen(false);
        setKeepMenuOpen(false);
    };

    return (
        <header className="flex flex-col items-center bg-primary-white dark:bg-neutral-800 high-contrast:bg-hc-background w-full relative">
            <div className="py-1 flex w-full h-22 gap-20 px-5 sm:px-10 lg:px-20 xl:px-44 mx-auto items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-4">
                    <button
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md"
                        onClick={toggleNavbar}
                    >
                        {isOpen ? <X className="text-neutral-700 dark:text-neutral-300 high-contrast:text-hc-text" /> : <Menu className="text-neutral-700 dark:text-neutral-300 high-contrast:text-hc-text" />}
                    </button>
                    <Link href="/" className="flex flex-row items-center justify-center gap-4">
                        <Image className="size-14 lg:size-20" src={Logo} alt='Logo' />
                        <h1 className="text-center text-2xl text-neutral-700 dark:text-neutral-300 high-contrast:text-hc-text sm:text-3xl font-DMsans">
                            <strong>Minas</strong>deCultura
                        </h1>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center text-lg lg:text-xl space-x-4 font-DMsans">
                    <Link className="text-neutral-700 dark:text-neutral-300 rounded-lg p-2" href="/">HOME</Link>
                    <Link className="text-neutral-700 dark:text-neutral-300 rounded-lg p-2" href="/Sobre">SOBRE</Link>
                    <Link className="text-neutral-700 dark:text-neutral-300 rounded-xl p-2 bg-primary-red" href="/Pesquisa">PESQUISA</Link>
                </nav>

                <div className="relative">
                    <button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        aria-label="Acessibilidade"
                    >
                        <PersonStanding className="w-6 h-6" />
                    </button>

                    {accessibilityMenuOpen && (
                        <div 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={closeMenu}
                            className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-700 shadow-lg rounded-lg z-10"
                        >
                            <button
                                onClick={() => { setDarkMode(!darkMode); closeMenu(); }}
                                className={`w-full flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-600 ${darkMode || highContrast ? 'text-black' : 'text-neutral-700 dark:text-neutral-300'}`}
                            >
                                {darkMode ? <Sun className="w-5 h-5 mr-2" /> : <Moon className="w-5 h-5 mr-2" />}
                                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
                            </button>
                            <button
                                onClick={() => { setHighContrast(!highContrast); closeMenu(); }}
                                className={`w-full flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-600 ${darkMode || highContrast ? 'text-black' : 'text-neutral-700 dark:text-neutral-300'}`}
                            >
                                <Contrast className="w-5 h-5 mr-2" />
                                {highContrast ? 'Contraste Normal' : 'Alto Contraste'}
                            </button>
                            <button
                                onClick={() => { increaseFontSize(); closeMenu(); }}
                                className={`w-full flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-600 ${darkMode || highContrast ? 'text-black' : 'text-neutral-700 dark:text-neutral-300'}`}
                            >
                                <AArrowUp className="w-5 h-5 mr-2" />
                                Aumentar Fonte
                            </button>
                            <button
                                onClick={() => { resetFontSize(); closeMenu(); }}
                                className={`w-full flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-600 ${darkMode || highContrast ? 'text-black' : 'text-neutral-700 dark:text-neutral-300'}`}
                            >
                                <Text className="w-5 h-5 mr-2" />
                                Fonte Original
                            </button>
                        </div>
                    )}
                </div>
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
