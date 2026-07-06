import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import Auth from '../pages/Auth'

const AuthModel = ({ onClose }) => {

  const { userData } = useSelector((state) => state.user)

  useEffect(() => {
    if (userData) {
      onClose()
    }
  }, [userData, onClose])

  return (
    <div
      onClick={onClose}
      className='fixed inset-0 z-[999] flex items-center justify-center bg-black/40
      backdrop-blur-sm px-4 py-6 overflow-y-auto'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative w-full max-w-md my-auto max-h-[90vh] overflow-y-auto
        rounded-2xl shadow-2xl'
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center
          rounded-full bg-black/30 hover:bg-black/50 text-white text-lg transition'
        >
          <FaTimes size={20} />
        </button>
        <Auth isModel={true} />
      </div>
    </div>
  )
}

export default AuthModel