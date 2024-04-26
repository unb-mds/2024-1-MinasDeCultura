import Logobranca from '@/assets/logobranca.png';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary-red p-40">
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Image
          src={Logobranca}
          alt='logobranca'
          style={{ marginTop: '-9%', marginLeft: '-5%' }}
          
          />
      </div>
    </footer>
  )
}

export default Footer