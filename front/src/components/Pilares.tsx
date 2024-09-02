import { useState, useEffect } from 'react';

const Pilares = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="-mb-10">
      <h1 className="justify-center text-neutral-700 dark:text-neutral-300 lg:text-4xl md:text-4xl text-2xl text-center">
        A Secretaria de Cultura e Turismo do Estado de Minas Gerais:
      </h1>
      <div className="flex py-6 lg:gap-6 gap-2 justify-items-center">
          <div className="gap-2 w-full text-neutral-700 dark:text-neutral-300 bg-primary-white dark:bg-neutral-800 rounded-2xl text-center lg:p-8 p-2 ">
            <h1 className="text-sm lg:text-2xl md:text-xl"> Deve preservar</h1>
            <h2 className="text-xs lg:text-xl md:text-lg"> patrimônio cultural do estado de Minas gerais</h2>
          </div>
          <div className="gap-2 w-full text-neutral-700 dark:text-neutral-300 bg-primary-white dark:bg-neutral-800 rounded-2xl text-center lg:p-8 p-2 ">
            <h1 className="text-sm lg:text-2xl md:text-xl "> Deve promover</h1>
            <h2 className="text-xs lg:text-xl md:text-lg"> acessibilidade e inclusão social à cultura</h2>
          </div>
          <div className="gap-2 w-full text-neutral-700 dark:text-neutral-300 bg-primary-white dark:bg-neutral-800 rounded-2xl text-center lg:p-8 p-2">
            <h1 className="text-sm lg:text-2xl md:text-xl"> Deve fomentar</h1>
            <h2 className="text-xs lg:text-xl md:text-lg"> produção artística da população</h2>
          </div>
      </div>
    </div>
  );
};

export default Pilares;

