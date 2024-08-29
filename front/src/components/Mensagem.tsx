import { useState, useEffect } from "react";

const Mensagem = () => {
    const [currentText, setCurrentText] = useState(0);

    const texts = [
        "Simplificando o acesso aos investimentos culturais pelo estado",
        "Facilitando a visualização de dados culturais",
        "Promovendo a transparência nos gastos culturais",
        "Aprimorando o acesso à cultura em Minas Gerais"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => (prevText + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval); 
    }, [texts.length]);

    return (
        <div className="container w-full h-auto flex flex-row justify-center items-center">
            <div className="w-1/2 pr-4 text-right">
                <p className="font-Dmsans text-2xl md:text-3xl lg:text-4xl text-neutral-700 dark:text-neutral-300">
                    <strong>Dados oficiais das despesas da Secretaria de Estado de Cultura de Minas Gerais</strong>
                </p>
            </div>
            <div className="border-l border-neutral-700 dark:border-neutral-300 h-80 xl mx-10 2xl:mx-20"></div>
            <div className="w-1/2 pl-4">
                <p className="font-DMsans text-neutral-700 dark:text-neutral-300 text-xl md:text-2xl lg:text-3xl">{texts[currentText]}</p>
            </div>
        </div>    
    );
}

export default Mensagem;
