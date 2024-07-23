import Logo from "@/assets/logo_vermelha.png";
import Image from "next/image";

export default function Sobre() {
    return (
        <main className="bg-primary-gray flex justify-center items-center min-h-screen p-12">
            <div className="container flex lg:flex-row items-center justify-center lg:p-12 p-8 space-x-8">
                <div className="lg:mr-8 mb-8 lg:mb-0 w-full lg:w-auto">
                    <Image 
                        src={Logo}
                        alt='Logo Vermelha' 
                        layout="responsive"
                    />
                </div>
                <div className="w-full lg:w-full h-auto p-8 overflow-auto">
                    <h1 className="text-4xl font-bold mb-10 leading-[46px]">
                        Projeto de Análise de Licitações Culturais
                    </h1>
                    <p className="text-2xl text-justify leading-[46px]">
                        Este é um projeto desenvolvido como parte da disciplina de <b>Métodos de Desenvolvimento de Software</b> (MDS) da 
                        Universidade de Brasília (UnB). O objetivo principal deste projeto é criar uma plataforma online para análise e 
                        armazenamento de dados de licitações relacionadas aos gastos culturais apoiados pelo Governo Federal, utilizando a 
                        plataforma e a API do Querido Diário.
                    </p>
                    <a href="https://unb-mds.github.io/2024-1-MinasDeCultura/" className="text-2xl block mt-4">
                        Github: https://unb-mds.github.io/2024-1-MinasDeCultura/
                    </a>
                </div>
            </div>            
        </main>
    );
}
