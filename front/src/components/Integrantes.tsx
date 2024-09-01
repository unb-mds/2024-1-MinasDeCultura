import Gabriel from "../assets/Gabriel.png";
import Isaac from "../assets/Isaac.jpeg";
import Marcos from "../assets/Marcos.jpeg";
import Manuella from "../assets/Manuella.png";
import Mateus from "../assets/Mateus.jpeg";
import William from "../assets/William.jpeg";
import Image from "next/image";

const Integrantes = () => {
    return (
      <div>
      <div className="bg-primary-gray dark:bg-neutral-900 flex sm:gap-10 justify-center max-w-auto ">
        <div className="card w-[190px] h-[230px] mb-10 bg-gradient-to-b from-primary-red via-primary-red to-black rounded-lg pt-2 mx-2  font-inherit transition-transform transform hover:scale-110 hover:bg-gradient-to-b hover:from-primary-red hover:to-gray-800 sm:w-[190px] sm:h-[254px] ">
          <div className="card-border-top">
          </div>
          <div className="img w-[70px] h-[70px] rounded-full mx-auto mt-5 overflow-hidden">
            <Image
             src={Gabriel} 
             className="w-full h-full object-cover" 
             alt="Gabriel Scheidt"
             />
          </div>
          <span className="font-semibold text-white text-center block pt-2 lg:text-xl text-sm">Gabriel <br></br>Scheidt</span>
          <p className="job font-normal text-white text-center block pt-1 lg:text-xl text-sm">Scrum Master</p>
          <div className="relative">
            <div className="w-full h-[2px] bg-gray-700 mt-2"></div>
            <div className="flex justify-center space-x-4 mt-3 ">
              
              <a href="https://github.com/Gxaite">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-7 fill-current">             
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-scheidt-a431b3218/">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-5 fill-current">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            </div>
            </div>
        </div>

        <div className="card w-[190px] h-[230px] sm:h-[254px] bg-gradient-to-b from-primary-red via-primary-red to-black rounded-lg pt-2 mx-2 font-inherit transition-transform transform hover:scale-110 hover:bg-gradient-to-b hover:from-primary-red hover:to-gray-800">
          <div className="card-border-top">
          </div>
          <div className="img w-[70px] h-[70px] bg-[#e8e8e8] rounded-full mx-auto mt-5 overflow-hidden">
            <Image 
              src={Isaac} 
              className="w-full h-full object-cover"
              alt="Isaac Batista"
              />
          </div>
          <span className="font-semibold text-white text-center block pt-2 lg:text-xl text-sm">Isaac<br></br> Batista</span>
          <p className="job font-normal text-white text-center block pt-1 lg:text-xl text-sm">Desenvolvedor</p>
          <div className="relative">
            <div className="w-full h-[2px] bg-gray-700 mt-2"></div>
            <div className="flex justify-center space-x-4 mt-3 ">
              
              <a href="https://github.com/isaacbatista26">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-7 fill-current">             
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
              </a>
              <a href="https://www.linkedin.com/in/isaac-batista-017660265/">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-5 fill-current">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            </div>
            </div>
        </div>
        <div className="card w-[190px] h-[230px] sm:h-[254px] bg-gradient-to-b from-primary-red via-primary-red to-black rounded-lg pt-2 mx-2 font-inherit transition-transform transform hover:scale-110 hover:bg-gradient-to-b hover:from-primary-red hover:to-gray-800">
          <div className="card-border-top">
          </div>
          <div className="img w-[70px] h-[70px] bg-[#e8e8e8] rounded-full mx-auto mt-5 overflow-hidden">
            <Image 
              src={Marcos}
              className="w-full h-full object-cover"
              alt="Marcos Marinho"
            />
          </div>
          <span className="font-semibold text-white text-center block pt-2 lg:text-xl text-sm">Marcos <br></br>Marinho</span>
          <p className="job font-normal text-white text-center block pt-1 lg:text-xl text-sm">Desenvolvedor</p>
          <div className="relative">
            <div className="w-full h-[2px] bg-gray-700 mt-2"></div>
            <div className="flex justify-center space-x-4 mt-3 ">
              
              <a href="https://github.com/devMarcosVM">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-7 fill-current">             
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
              </a>
              <a href="https://www.linkedin.com/in/https:/www.linkedin.com/in/marcos-vieira-marinho-b433b4191/">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-5 fill-current">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            </div>
            </div>
        </div>
        </div>
        <div className="bg-primary-gray dark:bg-neutral-900 flex sm:gap-10 justify-center ">
        <div className="card w-[190px] h-[230px] sm:h-[254px] bg-gradient-to-b from-primary-red via-primary-red to-black rounded-lg pt-2 mx-2 font-inherit mb-36 transition-transform transform hover:scale-110 hover:bg-gradient-to-b hover:from-primary-red hover:to-gray-800">
          <div className="card-border-top">
          </div>
          <div className="img w-[70px] h-[70px] bg-[#e8e8e8] rounded-full mx-auto mt-5 overflow-hidden">
            <Image 
              src={Manuella}
              className="w-full h-full object-cover"
              alt="Manuella Valadares"
              />
          </div>
          <span className="font-semibold text-white text-center block pt-2 lg:text-xl text-sm">Manuella <br></br>Valadares</span>
          <p className="job font-normal text-white text-center block pt-1 lg:text-xl text-sm">Desenvolvedora</p>
          <div className="relative">
            <div className="w-full h-[2px] bg-gray-700 mt-2"></div>
            <div className="flex justify-center space-x-4 mt-3 ">
              
              <a href="https://github.com/manuvaladares">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-7 fill-current">             
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
              </a>
              <a href="https://www.linkedin.com/in/manuella-valadares/">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-5 fill-current">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            </div>
            </div>
        </div>
        <div className="card w-[190px] h-[230px] sm:h-[254px] bg-gradient-to-b from-primary-red via-primary-red to-black rounded-lg pt-2 mx-2 font-inherit transition-transform transform hover:scale-110 hover:bg-gradient-to-b hover:from-primary-red hover:to-gray-800">
          <div className="card-border-top">
          </div>
          <div className="img w-[70px] h-[70px] bg-[#e8e8e8] rounded-full mx-auto mt-5 overflow-hidden">
            <Image
              src={Mateus}
              className="w-full h-full object-cover"
              alt="Mateus Henrique"
              />
          </div>
          <span className="font-semibold text-white text-center block pt-2 lg:text-xl text-sm">Mateus <br></br>Henrique</span>
          <p className="job font-normal text-white text-center block pt-1 lg:text-xl text-sm">Desenvolvedor</p>
          <div className="relative">
            <div className="w-full h-[2px] bg-gray-700 mt-2"></div>
            <div className="flex justify-center space-x-4 mt-3 ">
              
              <a href="https://github.com/Mateushqms">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-7 fill-current">             
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
              </a>
              <a href="https://www.linkedin.com/in/mateus-henrique-queiroz-a4058b2bb/">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-5 fill-current">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            </div>
            </div>
        </div>
        <div className="card w-[190px] h-[230px] sm:h-[254px] bg-gradient-to-b from-primary-red via-primary-red to-black rounded-lg pt-2 mx-2 font-inherit transition-transform transform hover:scale-110 hover:bg-gradient-to-b hover:from-primary-red hover:to-gray-800">
          <div className="card-border-top">
          </div>
          <div className="img w-[70px] h-[70px] bg-[#e8e8e8] rounded-full mx-auto mt-5 overflow-hidden">
            <Image 
              src={William}
              className="w-full h-full object-cover"
              alt="William Bernardo"
              />
          </div>
          <span className="font-semibold text-white text-center block pt-2 lg:text-xl text-sm">William <br></br>Bernardo</span>
          <p className="job font-normal text-white text-center block pt-1 lg:text-xl text-sm">Project Owner</p>
          <div className="relative">
            <div className="w-full h-[2px] bg-gray-700 mt-2"></div>
            <div className="flex justify-center space-x-4 mt-3 ">
              
              <a href="https://github.com/WillxBernardo">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-7 fill-current">             
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
              </a>
              <a href="https://www.linkedin.com/in/william-bernardo-a194b5197/">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="text-primary-white w-5 fill-current">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            </div>
            </div>
        </div>
      </div>
      </div>
    )
}

export default Integrantes;