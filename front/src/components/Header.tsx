import Image from "next/image";

import Logo from '@/assets/Logo.png';

export function Header(){
    return(
        <header className="w-full h-22 bg-white">
            <div>
                <Image
                    src={Logo}
                    alt='Logo'
                />
            </div>
        </header>
    )
}