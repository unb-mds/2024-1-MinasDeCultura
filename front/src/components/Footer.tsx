import Logobranca from '@/assets/logobranca.png';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary-red p-40">
      <div>
        <Image 
          src={Logobranca}
          alt='logobranca'
          style={{ marginTop: '-7%', marginLeft: '-5%' }}
          
          />
      </div>
    </footer>
  )
}

export default Footer