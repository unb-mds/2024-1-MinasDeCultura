import Informacoes from '@/components/Informacoes';
import Integrantes from '@/components/Integrantes';

export default function Sobre() {
    return (
        <>
        <main className="bg-primary-gray dark:bg-neutral-900 flex justify-center items-center min-h-screen gap-36 p-5 lg:p-12">  
        <Informacoes/>  
         
        </main>
       <Integrantes/> 
       
        </>
    );
}
