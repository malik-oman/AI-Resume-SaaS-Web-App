import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { BsRobot, BsMic, BsClock, BsBarChart, BsFileEarmarkText } from 'react-icons/bs'
import { HiSparkles } from 'react-icons/hi'
import AuthModel from '../Components/AuthModel'
import { useNavigate } from 'react-router-dom'
import evaImg from '../assets/ai-ans.png'
import hrImg from '../assets/HR.png'
import techImg from '../assets/tech.png'
import confidenceImg from '../assets/confi.png'
import creditImg from '../assets/credit.png'
import resumeImg from '../assets/resume.png'
import pdfImg from '../assets/pdf.png'
import analyticsImg from '../assets/history.png'
import { FiCpu, FiUsers, FiCode, FiSmile, FiCreditCard, FiFileText, FiDownload, FiTrendingUp, FiArrowRight, FiPlay, FiClock } from "react-icons/fi";
import Footer from '../Components/Footer'

const Home = () => {

  const { userData } = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false)
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const steps = [
    {
      icon: <BsRobot size={26} />,
      step: "STEP 1",
      title: "Role & Experience Selection",
      desc: "AI adjusts difficulty based on selected job role.",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-600",
      rotate: "rotate-[-3deg]"
    },
    {
      icon: <BsMic size={26} />,
      step: "STEP 2",
      title: "Smart Voice Interface",
      desc: "Dynamic follow-up questions based on your answer.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      rotate: "rotate-[2deg] md:mt-8"
    },
    {
      icon: <BsClock size={26} />,
      step: "STEP 3",
      title: "Timer Based Simulation",
      desc: "Real Interview pressure with time tracking.",
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      textColor: "text-violet-600",
      rotate: "rotate-[-2deg]"
    }
  ]

  const capabilities = [
    {
      image: evaImg,
      icon: <FiCpu size={24} />,
      title: "AI-Generated Answers",
      description: "Get smart, AI-powered answer suggestions for interview questions to help you understand what a strong response looks like.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      image: resumeImg,
      icon: <FiFileText size={24} />,
      title: "Resume Analysis",
      description: "Upload your resume and let AI analyze it to generate personalized interview questions based on your experience.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      image: pdfImg,
      icon: <FiDownload size={24} />,
      title: "Downloadable PDF Reports",
      description: "Get a detailed performance report in PDF format that you can save, share, or review anytime.",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      image: analyticsImg,
      icon: <FiTrendingUp size={24} />,
      title: "Performance History & Analytics",
      description: "Track your progress over time with detailed analytics and history of all your past interview sessions.",
      gradient: "from-amber-500 to-orange-600"
    },
  ]

  const modes = [
    {
      image: hrImg,
      title: "HR Interview Mode",
      description: "Behavioral and communication based evaluation.",
      gradient: "from-rose-400 to-pink-500",
      badge: "Popular"
    },
    {
      image: techImg,
      title: "Technical Mode",
      description: "Deep Technical questioning based on selected role.",
      gradient: "from-cyan-400 to-blue-500",
      badge: "New"
    },
    {
      image: confidenceImg,
      title: "Confidence Detection",
      description: "Basic tone and voice analysis insights.",
      gradient: "from-amber-400 to-orange-500",
      badge: "AI Powered"
    },
    {
      image: creditImg,
      title: "Credits System",
      description: "Unlock premium interview sessions easily.",
      gradient: "from-emerald-400 to-green-500",
      badge: "Premium"
    },
  ]

  return (
    <div className='min-h-screen bg-[#f8f9fb] flex flex-col overflow-x-hidden'>
      <Navbar />

      <div className='flex-1'>
        {/* Hero Section */}
        <section className='relative px-6 pt-20 pb-28 overflow-hidden'>
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
            <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-violet-200/15 rounded-full blur-3xl" />
          </div>

          <div className='max-w-6xl mx-auto relative z-10'>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className='flex justify-center mb-8'
            >
              <div className='bg-white/80 backdrop-blur-sm border border-emerald-200/50 text-emerald-700 text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm shadow-emerald-100/50'>
                <HiSparkles size={16} className='text-emerald-500' />
                AI Powered Smart Interview Platform
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='text-center mb-10'
            >
              <h1 className='text-5xl md:text-7xl font-bold leading-[1.1] max-w-5xl mx-auto tracking-tight'>
                Practice Interviews With{" "}
                <span className='relative inline-block'>
                  <span className='bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent'>
                    AI Intelligence
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8C50 2 100 2 150 6C200 10 250 10 298 4" stroke="url(#grad1)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className='text-gray-500 text-center max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12'
            >
              Role-based mock interview with smart follow-ups,
              adaptive difficulty and real-time performance evaluation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className='flex flex-wrap justify-center gap-4'
            >
              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true)
                    return;
                  }
                  navigate("/interview")
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className='group bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-4 rounded-full font-semibold text-base shadow-xl shadow-gray-900/20 hover:shadow-gray-900/30 transition-all duration-300 flex items-center gap-3'
              >
                <FiPlay size={18} />
                Start Interview
                <FiArrowRight size={16} className='group-hover:translate-x-1 transition-transform duration-300' />
              </motion.button>

              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true)
                    return;
                  }
                  navigate("/history")
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className='group bg-white text-gray-700 border-2 border-gray-200 px-10 py-4 rounded-full font-semibold text-base hover:border-gray-300 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 flex items-center gap-3'
              >
                <FiClock size={18} />
                View History
              </motion.button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className='mt-20 flex flex-wrap justify-center gap-8 md:gap-16'
            >
              {[
                { value: "10K+", label: "Interviews Taken" },
                { value: "95%", label: "Success Rate" },
                { value: "50+", label: "Job Roles" },
                { value: "4.9", label: "User Rating" },
              ].map((stat, i) => (
                <div key={i} className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'>
                    {stat.value}
                  </div>
                  <div className='text-gray-500 text-sm mt-1 font-medium'>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Steps */}
        <section className='px-6 py-24'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className='text-center mb-20'
            >
              <div className='inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4'>
                How It Works
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight'>
                Three Simple <span className='text-emerald-600'>Steps</span>
              </h2>
            </motion.div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10'>
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className={`relative bg-white rounded-[2rem] border-2 ${item.borderColor} p-10 w-full max-w-[340px] shadow-lg hover:shadow-2xl transition-all duration-500 ${item.rotate}`}
                >
                  {/* Step Number Badge */}
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br ${item.color} text-white`}>
                    {item.icon}
                  </div>

                  {/* Connector line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className='hidden md:block absolute top-1/2 -right-14 w-10 h-0.5 bg-gradient-to-r from-gray-300 to-transparent'>
                      <div className='absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-gray-300' />
                    </div>
                  )}

                  <div className='pt-12 text-center'>
                    <div className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${item.textColor}`}>
                      {item.step}
                    </div>
                    <h3 className='font-bold text-xl text-gray-900 mb-3 leading-snug'>
                      {item.title}
                    </h3>
                    <p className='text-gray-500 text-sm leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced AI Capabilities */}
        <section className='px-6 py-24 bg-white/50'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className='text-center mb-20'
            >
              <div className='inline-flex items-center gap-2 bg-violet-50 text-violet-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4'>
                Features
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight'>
                Advanced AI <span className='text-emerald-600'>Capabilities</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className='grid md:grid-cols-2 gap-8'
            >
              {capabilities.map((item, index) => (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.01 }}
                  key={index}
                  className='group bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden relative'
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-[2rem]`} />

                  <div className='flex flex-col md:flex-row items-center gap-8 relative z-10'>
                    <div className='w-full md:w-1/2 flex justify-center'>
                      <motion.img
                        whileHover={{ scale: 1.08, rotate: 2 }}
                        transition={{ duration: 0.4 }}
                        src={item.image}
                        alt={item.title}
                        className='w-full h-auto object-contain max-h-56 drop-shadow-lg'
                      />
                    </div>

                    <div className='w-full md:w-1/2'>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg bg-gradient-to-br ${item.gradient} text-white`}>
                        {item.icon}
                      </div>
                      <h3 className='font-bold text-xl text-gray-900 mb-3'>
                        {item.title}
                      </h3>
                      <p className='text-gray-500 text-sm leading-relaxed'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Interview Modes */}
        <section className='px-6 py-24'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className='text-center mb-20'
            >
              <div className='inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4'>
                Modes
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight'>
                Multiple Interview <span className='text-emerald-600'>Modes</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className='grid md:grid-cols-2 gap-8'
            >
              {modes.map((item, index) => (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.01 }}
                  key={index}
                  className='group bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden relative'
                >
                  {/* Badge */}
                  <div className={`absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${item.gradient} shadow-md`}>
                    {item.badge}
                  </div>

                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-[2rem]`} />

                  <div className='flex flex-col md:flex-row items-center gap-8 relative z-10'>
                    <div className='w-full md:w-1/2 flex justify-center'>
                      <motion.img
                        whileHover={{ scale: 1.08, rotate: -2 }}
                        transition={{ duration: 0.4 }}
                        src={item.image}
                        alt={item.title}
                        className='w-full h-auto object-contain max-h-52 drop-shadow-lg'
                      />
                    </div>

                    <div className='w-full md:w-1/2'>
                      <div className={`w-12 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} mb-5`} />
                      <h3 className='font-bold text-xl text-gray-900 mb-3'>
                        {item.title}
                      </h3>
                      <p className='text-gray-500 text-sm leading-relaxed'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className='px-6 py-20'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden'
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

            <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Ready to Ace Your Next Interview?
              </h2>
              <p className='text-gray-400 text-lg mb-10 max-w-xl mx-auto'>
                Join thousands of candidates who have improved their interview skills with AI-powered practice.
              </p>
             
            </div>
          </motion.div>
        </section>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
      <Footer />
    </div>
  )
}

export default Home