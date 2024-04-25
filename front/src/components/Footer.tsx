import Logo from '@/assets/Logo.png';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary-yellow p-40">
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Image
          src={Logo}
          alt='Logo'
          style={{ marginTop: '-150px', marginLeft: '-100px' }}
          
          />
      </div>
    </footer>
  )
}

export default Footer