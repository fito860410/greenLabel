'use client'

import React from 'react'
import Image from 'next/legacy/image'
import {CustomButton} from '@/components'

//https://www.youtube.com/watch?v=pUNSHPyVryU&t=766s

const Hero = () => {
  const handleScroll = () =>{
    
  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Encuentra un producto - Así de fácil
        </h1>

        <p className='hero__subtitle'>
          Mérida es muy grande, busca en línea el producto que deseas
        </p>

        <CustomButton 
          title="Busque productos"
          btnType='button'
          containerStyles="bg-primary-blue
          text-white rounded-full mt-10"
          handlerClick={handleScroll}
        />
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/hero.png" alt='hero' layout='fill' className='object-contain' />
          
            <div className='hero__image-overlay'></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
