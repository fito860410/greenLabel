"use client"

import React from 'react'

import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import CustomButton from './CustomButton'

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {

  }
  return (    
    <div className='w-full flex-center gap-5 mt-10'>
      {
        !isNext && (
            <CustomButton
            title='Ver Más'
            btnType='button'
            containerStyles='bg-primary-blue rounded-full text-white'
            handlerClick={handleNavigation}
            />
        )
      }
    </div>
  )
}

export default ShowMore
