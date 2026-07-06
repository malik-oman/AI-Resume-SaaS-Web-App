import React from 'react'
import { BsRobot } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { IoSparklesOutline } from "react-icons/io5"
import { FiMic, FiCalendar, FiCheckCircle } from "react-icons/fi"
import { motion } from 'motion/react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../utils/firebase'
import axios from 'axios'
import { serverUrl } from '../App'
import authimg from '../assets/authimg.png'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

const Auth = ({ isModel = false }) => {

  const dispatch = useDispatch()

  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider)
      let User = response.user
      let name = User.displayName
      let email = User.email
      const result = await axios.post(serverUrl + "/api/auth/google", { name, email }, { withCredentials: true })
      dispatch(setUserData(result.data))
    } catch (error) {
      console.log(error)
      dispatch(setUserData(null))
    }
  }

  return (
    <div className={`w-full flex bg-[#FBFAF7] relative ${isModel ? 'rounded-2xl overflow-hidden' : 'min-h-screen'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        * { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* MOBILE / MODAL: IMAGE AS BACKGROUND (skip entirely when isModel to keep it light) */}
      {!isModel && (
        <div className='lg:hidden absolute inset-0 z-0'>
          <img src={authimg} alt="Background" className='w-full h-full object-cover' />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/90 backdrop-blur-sm"></div>
        </div>
      )}

      {/* LEFT: DESKTOP VISUAL PANEL — never shown inside modal */}
      {!isModel && (
        <div className='hidden lg:flex relative w-1/2 min-h-screen overflow-hidden bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827]'>

          <div className='absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#F2B84B]/5 blur-[150px]' />
          <div className='absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#7C6BDB]/5 blur-[120px]' />

          <div className='relative z-10 flex flex-col justify-between p-12 w-full'>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className='flex items-center gap-3'
            >
              <div className='bg-white/10 backdrop-blur-md text-[#F2B84B] p-2.5 rounded-xl border border-white/10'>
                <BsRobot size={20} />
              </div>
              <span className='text-white font-semibold tracking-wide'>InterView.With.AI</span>
            </motion.div>

            <div className='flex-1 flex flex-col justify-center gap-8 py-10'>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className='font-display text-white text-4xl xl:text-5xl leading-tight max-w-md'
              >
                Walk into every interview like you've already done it before.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='text-white/60 max-w-sm text-[15px] leading-relaxed'
              >
                Practice live with an AI interviewer, or schedule a real one-on-one
                session with a human expert — same platform, your pace.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className='relative mt-2 w-full max-w-sm h-80 xl:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10'
              >
                <img src={authimg} alt="AI interview preview" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent' />

                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10'
                >
                  <span className='w-2 h-2 rounded-full bg-[#4ADE80]' />
                  <span className='text-white text-xs font-medium'>AI is listening…</span>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className='flex items-center gap-8 text-white/70 text-sm'
            >
              <div className='flex items-center gap-2'><FiMic size={14} /> Live mock interviews</div>
              <div className='flex items-center gap-2'><FiCalendar size={14} /> Physical scheduling</div>
              <div className='flex items-center gap-2'><FiCheckCircle size={14} /> Instant feedback</div>
            </motion.div>
          </div>
        </div>
      )}

      {/* RIGHT: AUTH PANEL — full form, shrinks to fit when inside modal */}
      <div className={`w-full flex items-center justify-center relative z-10
        ${isModel ? 'px-6 py-8 bg-[#FBFAF7]' : 'lg:w-1/2 px-6 py-16'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='w-full max-w-md'
        >

          {/* Logo — always dark text when in modal since bg is light there */}
          <div className={`flex items-center justify-center gap-3 ${isModel ? 'mb-6' : 'lg:hidden mb-8'}`}>
            <div className={`p-2.5 rounded-xl border ${isModel ? 'bg-[#F2B84B]/15 text-[#946209] border-transparent' : 'bg-white/20 backdrop-blur-md text-[#F2B84B] border-white/20'}`}>
              <BsRobot size={20} />
            </div>
            <span className={`font-semibold text-xl tracking-wide ${isModel ? 'text-[#12142B]' : 'text-white'}`}>InterView.With.AI</span>
          </div>

          {/* Badge */}
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4
            ${isModel ? 'bg-[#F2B84B]/15 text-[#946209] border-transparent' : 'bg-white/10 lg:bg-[#F2B84B]/15 text-white/90 lg:text-[#946209] border border-white/10 lg:border-transparent'}`}>
            <IoSparklesOutline size={14} /> AI Smart Interview
          </span>

          {/* Heading */}
          <h1 className={`font-display text-2xl md:text-3xl leading-tight mb-3 text-center
            ${isModel ? 'text-[#12142B]' : 'text-white lg:text-[#12142B] text-left'}`}>
            Continue to your interview room
          </h1>

          {/* Paragraph */}
          <p className={`text-sm leading-relaxed mb-6 text-center
            ${isModel ? 'text-[#6B6B76]' : 'text-white/70 lg:text-[#6B6B76] text-left mb-10'}`}>
            Sign in to start AI-powered mock interviews, schedule physical sessions
            with real interviewers, track your progress, and unlock detailed
            performance insights.
          </p>

          {/* Google button */}
          <motion.button
            onClick={handleGoogleAuth}
            whileHover={{ scale: 1.02, boxShadow: '0 12px 30px -8px rgba(18,20,43,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className={`w-full flex items-center justify-center gap-3 py-3 rounded-full shadow-lg cursor-pointer transition-colors border
              ${isModel ? 'bg-[#12142B] text-white border-transparent' : 'bg-white text-[#12142B] lg:bg-[#12142B] lg:text-white border-white/20 lg:border-transparent'}`}
          >
            <FcGoogle size={20} />
            <span className='font-medium'>Continue with Google</span>
          </motion.button>

          {/* Divider */}
          <div className='flex items-center gap-3 my-6'>
            <div className={`h-px flex-1 ${isModel ? 'bg-gray-200' : 'bg-white/20 lg:bg-gray-200'}`} />
            <span className={`text-xs ${isModel ? 'text-gray-400' : 'text-white/50 lg:text-gray-400'}`}>secure & private</span>
            <div className={`h-px flex-1 ${isModel ? 'bg-gray-200' : 'bg-white/20 lg:bg-gray-200'}`} />
          </div>

          {/* Stats grid */}
          <div className='grid grid-cols-3 gap-2'>
            {[
              { top: '1:1', bottom: 'Real interviewers' },
              { top: '24/7', bottom: 'AI practice' },
              { top: '100%', bottom: 'Free to start' },
            ].map((s) => (
              <div key={s.top} className={`p-2.5 rounded-xl text-center backdrop-blur-sm
                ${isModel ? 'bg-[#FBFAF7] border border-gray-100' : 'bg-white/5 border border-white/10 lg:bg-[#FBFAF7] lg:border-gray-100'}`}>
                <p className={`font-semibold text-sm ${isModel ? 'text-[#12142B]' : 'text-white lg:text-[#12142B]'}`}>{s.top}</p>
                <p className={`text-[11px] ${isModel ? 'text-gray-400' : 'text-white/60 lg:text-gray-400'}`}>{s.bottom}</p>
              </div>
            ))}
          </div>

          <p className={`text-center text-xs mt-6 ${isModel ? 'text-gray-400' : 'text-white/40 lg:text-gray-400 mt-10'}`}>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Auth