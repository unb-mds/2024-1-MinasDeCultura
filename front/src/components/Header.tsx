import Image from "next/image";
import Logo from '@/assets/Logo.png';

export function Header() {
    return (
        <div className="flex justify-center items-center  bg-primary-gray">
            <header className="flex w-[1280px] h-22 bg-primary-white relative px-[120px] mx-auto items-center justify-between rounded-xl">
                <div className="max-w-[348px]">
                    <Image
                        src={Logo}
                        alt='Logo'
                    />
                </div>
                <ul className="flex gap-[40px] font-sans 2xl">
                    <li>
                        <button>
                            <span>
                                HOME
                            </span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>
                                SOBRE
                            </span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>
                                PESQUISA FILTRADA
                            </span>
                        </button>
                    </li>                       
                </ul>
            </header>
        </div>
    )
}
