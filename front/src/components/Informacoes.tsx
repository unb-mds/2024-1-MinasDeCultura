import Logo from "@/assets/logo_vermelha.png";
import Image from "next/image";

const Informacoes = () => {
    return (
        <div className="container flex flex-col 2xl:flex-row">
            <div className="2xl:w-2/5 2xl:order-1 order-2 flex 2xl:flex-start items-center justify-center mb-10">
                <Image
                    src={Logo}
                    alt="Logo Vermelha"
                    layout="responsive"
                    className="max-w-[300px] md:max-w-[520px] 2xl:min-w-[400px]"
                />
            </div>
            <div className="2xl:w-3/5 lg:p-4 2xl:order-2 order-1 flex flex-col">
                <div className="w-full">
                    <h1 className="text-center 2xl:text-start text-neutral-700 dark:text-neutral-300 high-contrast:text-hc-text text-base md:text-3xl 2xl:text-[40px] font-DMsans font-bold sm:mb-10 leading-8 md:leading-10">
                        Projeto de Análise de Licitações Culturais
                    </h1>   
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-2xl 2xl:text-2xl font-DMsans font-regular text-justify leading-10">
                        Este é um projeto desenvolvido como parte da disciplina de <b>Métodos de Desenvolvimento de Software</b> (MDS) da 
                        Universidade de Brasília (UnB). O objetivo principal deste projeto é criar uma plataforma online para análise e 
                        armazenamento de dados de licitações relacionadas aos gastos culturais apoiados pelo Governo Federal, utilizando 
                        informações da Secretaria de Cultura do Estado de Minas Gerais. 
                    </p>
                    <p> </p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-2xl 2xl:text-2xl font-DMsans font-regular text-justify leading-10">
                        <br></br>A plataforma permite aos usuários filtrar dados por um intervalo de tempo para obter informações de interesse, 
                        além de oferecer um dashboard informativo que facilita a consulta e visualização dos dados. Adicionalmente, 
                        a plataforma busca abranger a comunidade com funcionalidades como modo noturno, alto contraste e aumento de 
                        fonte para melhorar a acessibilidade, além de permitir o acesso via dispositivos móveis, garantindo 
                        disponibilidade em várias plataformas.
                    </p>
                </div>
            </div>
        </div>    
    )
}

export default Informacoes;
