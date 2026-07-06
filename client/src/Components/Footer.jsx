import React from 'react'
import { BsRobot } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-200 py-10 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col items-center text-center gap-4'>

        <div className='flex items-center gap-2'>
          <div className='bg-green-50 text-green-600 w-9 h-9 rounded-xl flex items-center justify-center'>
            <BsRobot size={18} />
          </div>
          <span className='font-semibold text-lg'>AI Interview</span>
        </div>

        <p className='text-gray-500 text-sm max-w-md leading-relaxed'>
          Practice smarter, perform better. Role-based mock interviews with
          real-time AI evaluation to help you land your dream job.
        </p>

        <div className='w-full border-t border-gray-100 pt-5 mt-2'>
          <p className='text-gray-400 text-xs'>
            &copy; {new Date().getFullYear()} AI Interview. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer