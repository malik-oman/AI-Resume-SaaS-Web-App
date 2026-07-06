import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'motion/react'
import { BsRobot, BsCoin } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { HiOutlineLogout } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { serverUrl } from '../App'
import { setUserData } from '../redux/userSlice'
import AuthModel from './AuthModel'

const Navbar = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector((state) => state.user)
    
    const [showCreditPopup, setShowCreditPopup] = useState(false)
    const [showUserPopup, setShowUserPopup] = useState(false) // Typo fixed here
    const [showAuth, setShowAuth] = useState(false)
    
    const navigate = useNavigate()
    const navRef = useRef(null) 
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setShowCreditPopup(false)
                setShowUserPopup(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleLogout = async () => {
        try {
            await axios.get(serverUrl + "/api/user/logout", { withCredentials: true })
            dispatch(setUserData(null))
            setShowCreditPopup(false)
            setShowUserPopup(false)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full flex justify-center px-4 pt-4 sm:pt-6'>
            <motion.div
                ref={navRef}
                initial={{ opacity: 0, y: -30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className='w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-[22px] shadow-lg shadow-black/5 border border-white/50
                px-5 sm:px-8 py-3.5 flex justify-between items-center relative z-50'
            >
                
                {/* Logo */}
                <div onClick={() => navigate("/")} className='flex items-center gap-3 cursor-pointer group'>
                    <div className='bg-[#111827] text-white p-2 rounded-xl group-hover:scale-105 transition-transform duration-200'>
                        <BsRobot size={18} />
                    </div>
                    <h1 className='font-bold hidden md:block text-lg text-[#111827] tracking-tight'>Interview.With.AI</h1>
                </div>

                {/* Right Side Actions */}
                <div className='flex items-center gap-3 sm:gap-4'>

                    {/* Credits Button */}
                    <div className='relative'>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                                if (!userData) { setShowAuth(true); return; }
                                setShowCreditPopup(!showCreditPopup)
                                setShowUserPopup(false)
                            }}
                            className='flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 px-4 py-2 rounded-full
                            text-sm font-semibold border border-amber-200/50 transition-colors duration-200'
                        >
                            <BsCoin size={18} className='text-amber-500' />
                            <span className='hidden sm:inline'>{userData?.credits || 0}</span>
                            <span className='sm:hidden'>{userData?.credits || 0}</span>
                        </motion.button>

                        {/* Credits Dropdown */}
                        <AnimatePresence>
                            {showCreditPopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    style={{ transformOrigin: "top right" }}
                                    className='absolute right-0 sm:right-[-20px] mt-3 w-64 bg-white shadow-2xl shadow-black/10 border
                                    border-gray-100 rounded-2xl p-5 z-50'
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="p-1.5 bg-amber-100 rounded-lg"><BsCoin className="text-amber-600" /></div>
                                        <p className='text-sm font-bold text-[#111827]'>{userData?.credits || 0} Credits Left</p>
                                    </div>
                                    <p className='text-xs text-gray-500 mb-4 leading-relaxed'>Need more credits to continue your AI mock interviews?</p>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => { navigate("/pricing"); setShowCreditPopup(false) }}
                                        className='w-full bg-[#111827] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-black transition-colors'
                                    >
                                        Buy more credits
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Profile Button */}
                    <div className='relative'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                if (!userData) { setShowAuth(true); return; }
                                setShowUserPopup(!showUserPopup)
                                setShowCreditPopup(false)
                            }}
                            className={`w-10 h-10 bg-[#111827] text-white rounded-full flex items-center
                            justify-center font-bold text-sm transition-all duration-200 ${showUserPopup ? 'ring-2 ring-offset-2 ring-[#111827]' : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-300'}`}
                        >
                            {userData ? userData?.name.slice(0, 1).toUpperCase() : <FiUser size={16} />}
                        </motion.button>

                        {/* User Dropdown */}
                        <AnimatePresence>
                            {showUserPopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    style={{ transformOrigin: "top right" }}
                                    className='absolute right-0 mt-3 w-52 bg-white shadow-2xl shadow-black/10 border
                                    border-gray-100 rounded-2xl p-3 z-50'
                                >
                                    <div className='px-3 py-2 mb-1 border-b border-gray-100'>
                                        <p className='text-sm font-bold text-[#111827] truncate'>{userData?.name}</p>
                                        <p className='text-xs text-gray-400 truncate'>{userData?.email}</p>
                                    </div>

                                    <button
                                        onClick={() => { navigate("/history"); setShowUserPopup(false) }}
                                        className='w-full text-left text-sm px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-[#111827] transition-colors font-medium'
                                    >
                                        Interview History
                                    </button>
                                    
                                    <button
                                        onClick={handleLogout}
                                        className='w-full text-left text-sm px-3 py-2.5 flex items-center gap-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium'
                                    >
                                        <HiOutlineLogout size={16} /> Log Out
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </motion.div>

        {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
        </div>
    )
}

export default Navbar