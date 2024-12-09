import { Input } from '@/components/ui/input';
import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='w-full border-b-2 border-gray-100 p-4'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
            <h1 className='text-2xl font-bold ml-72 text-[#0D0E43] tracking-wide'>Hekto</h1>
            <div className='flex items-center justify-center gap-8 text-[#0D0E43] '>
                <p className='relative text-[#FB2E86]'> 
                <Link href={"#"} className='text-xs font-medium'>
                Home
                <ChevronDown className='absolute w-5 h-4 ml-7 top-1'/>
                </Link>
                </p>
                <p>
                <Link href={"#"} className='text-xs font-medium'>Pages</Link>
                </p>
                <p>
                <Link href={"#"} className='text-xs font-medium'>Products</Link>
                </p>
                <p>
                <Link href={"#"} className='text-xs font-medium'>Blog</Link>
                </p>
                <p>
                <Link href={"#"} className='text-xs font-medium'>Pages</Link>
                </p>
                <p>
                <Link href={"#"} className='text-xs font-medium'>Shop</Link>
                </p>
                <p>
                <Link href={"#"} className='text-xs font-medium'>Contact</Link>
                </p>
            </div>
            <div className='hidden md:flex gap-2 mr-40'> 
            <div className='relative'>
                <Input 
                type='search' 
                className='bg-white text-black mr-16 rounded-none h-8'/>
                <Search className=' bg-[#FB2E86] absolute right-0 top-0 bottom-0 py-2 rounded-none stroke-white w-11 h-8'/>
            </div>
        </div>
        </div>
    </nav>
  )
}
  
export default Navbar