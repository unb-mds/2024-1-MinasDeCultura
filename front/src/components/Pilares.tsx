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
    <div>
      <h1 className="text-neutral-700 dark:text-neutral-300 text-4xl text-center">
        A Secretaria de Cultura e Turismo do Estado de Minas Gerais: 
      </h1>
      
      <div className="flex md:flex-row flex-col py-6 gap-6 justify-items-center">
        <div className="w-full h-auto text-neutral-700 dark:text-neutral-300 bg-primary-white dark:bg-neutral-800 rounded-2xl text-center p-8">
          <h1 className="text-4xl">Deve preservar</h1>
          <h2 className="text-2xl">o patrimônio cultural do estado de Minas Gerais</h2>
        </div>
        <div className="w-full h-auto text-neutral-700 dark:text-neutral-300 bg-primary-white dark:bg-neutral-800 rounded-2xl text-center p-8">
          <h1 className="text-4xl">Deve promover</h1>
          <h2 className="text-2xl">a acessibilidade e inclusão social à cultura</h2>
        </div>
        <div className="w-full h-auto text-neutral-700 dark:text-neutral-300 bg-primary-white dark:bg-neutral-800 rounded-2xl text-center p-8">
          <h1 className="text-4xl">Deve fomentar</h1>
          <h2 className="text-2xl">a produção artística da população</h2>
        </div>
      </div>
    </div>
  );
};

export default Pilares;

