import { Button } from '@/components/ui/button'
import Link from 'next/link'

  

const Header = () => {
  return (
    <header className="bg-background border-b container mx-auto flex border-border p-4">
    {/* Logo */}
    <div className="flex items-center">  
      <Link href="/" className="font-bold text-3xl">Maids</Link>
    </div>

       {/* Links */}
       <div className='flex flex-1 gap-8 justify-center items-center'>
       <Link className="hover:underline hover:underline-offset-4 hover:transition-all duration-300" href="/">
  Residence
</Link>
<Link className="hover:underline hover:underline-offset-4 hover:transition-all duration-300" href="/">
  Monthly Workers in Jeddah
</Link>
<Link className="hover:underline hover:underline-offset-4 hover:transition-all duration-300" href="/">
  Services
</Link>
<Link className="hover:underline hover:underline-offset-4 hover:transition-all duration-300" href="/">
 Communication
</Link>

  
     
      </div>
       
        {/* Button */}
        <div className='flex items-center'>
        <Button variant="default" size="lg">+966563646538</Button>
        </div>
    
  </header>
  )
}

export default Header