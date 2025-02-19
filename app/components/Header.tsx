import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ButtonUsed from './ButtonUsed'

  

const Header = () => {
  return (
    <header className="bg-background border-b container mx-auto flex border-border p-4">
    {/* Logo */}
    <div className="flex items-center">  
      <Link href="/" className="font-bold text-3xl text-blue-900">Maids</Link>
    </div>

       {/* Links */}
       <div className='flex flex-1 gap-8 justify-center items-center'>
       <Link className="hover:underline  text-blue-900 hover:underline-offset-4 hover:transition-all duration-300" href="/">
  Residence
</Link>
<Link className="hover:underline  text-blue-900 hover:underline-offset-4 hover:transition-all duration-300" href="/">
  Monthly Workers in Jeddah
</Link>
<Link className="hover:underline  text-blue-900 hover:underline-offset-4 hover:transition-all duration-300" href="/">
  Services
</Link>
<Link className="hover:underline  text-blue-900 hover:underline-offset-4 hover:transition-all duration-300" href="/">
 Communication
</Link>

  
     
      </div>
       
        {/* Button */}
        <div className='flex items-center'>
        <ButtonUsed phoneNumber={+966563646538} />
        </div>
    
  </header>
  )
}

export default Header