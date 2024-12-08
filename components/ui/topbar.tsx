import { ChevronDown, Heart, Mail, Phone, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <div className='bg-[#7E33E0] w-full md:flex items-center justify-between'>
      <div className='max-w-7xl mx-auto flex items-center justify-center gap-8 p-2'>
       <div className='relative'>
       <p className='text-[#F1F1F1] text-xs font-semibold'>
        <a href='mailto:mhhasanul@gmail.com' className='flex space-x-8'>
        <Mail className='absolute w-5 h-4'/>
        <span>mhhasanul@gmail.com</span>
        </a>
      </p>
       </div>
       <div className='relative'>
       <p className='text-[#F1F1F1] text-xs font-semibold gap-4'>
       <a href='tel:(12345)67890' className='flex space-x-8'>
        <Phone className='absolute w-5 h-4'/>
        <span>(12345)67890</span>
       </a>
      </p>
       </div>
      </div>
      <div className='max-w-7xl mx-auto flex items-center justify-center gap-3 p-2'>
      <p className='flex items-center text-[#F1F1F1] text-xs font-semibold'>
        English
        <ChevronDown className='w-5 h-4'/>
        </p>
        <p className='flex items-center text-[#F1F1F1] text-xs font-semibold'>
        USD
        <ChevronDown className='w-5 h-4'/>
        </p>
        <p className='flex items-center text-[#F1F1F1] text-xs font-semibold'>
        Login
        <User className='w-5 h-3 mb-1'/>
        </p>
        <p className='flex items-center text-[#F1F1F1] text-xs font-semibold gap-1'>
        Wishlist
        <Heart className='w-4 h-3 ' />
        </p>
        <p className='flex items-center text-[#F1F1F1] p-2'>
        <ShoppingCart className='w-5 h-4 ' />
        </p>
      </div>
    </div>
  )
}

export default Topbar