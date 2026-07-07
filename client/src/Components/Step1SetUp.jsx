import React, { useState } from 'react'
import {motion} from 'motion/react'
import { FaUserTie,FaBriefcase, FaFileUpload,
  FaMicrophoneAlt, FaChartLine, FaCheckCircle, FaCloudUploadAlt
 } from 'react-icons/fa'
import axios from 'axios'
import { serverUrl } from '../App'

const Step1SetUp = ({onStart}) => {

const [role,setRole] = useState("")
const [experience,setExperience] = useState("")
const [mode,setMode] = useState("Technical")
const [resumeFile,setResumeFile] = useState(null)
const [loading,setLoading] = useState(false)
const [projects,setProjects] = useState([])
const [skills,setSkills] = useState([])
const [resumeText,setResumeText] = useState("")
const [analysisDone, setAnalysisDone] = useState(false)
const [analyzing,setAnalyzing]  = useState(false)


const handleUploadResume = async () => {
  if (!resumeFile || analyzing) return;
  setAnalyzing(true)

  const formdata = new FormData()
  formdata.append("resume", resumeFile)
  try {
    const result = await axios.post(serverUrl + "/api/interview/resume",formdata,
      {withCredentials:true})

  setRole(result.data.role || ""),
  setExperience(result.data.experience || ""),
  setProjects(result.data.projects || [])
  setSkills(result.data.skills || [])
  setResumeText(result.data.resumeText || "")
  setAnalysisDone(true)
  
  setAnalyzing(false)
  } catch (error) {
    console.log(error)
    setAnalyzing(false)
  }
}

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.6}}
    className='min-h-screen flex items-center justify-center
    bg-linear-to-br from-gray-100 to-gray-200 px-4 py-10 sm:py-14'>

      <div className='w-full max-w-6xl bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]
      ring-1 ring-black/5 grid md:grid-cols-2 overflow-hidden'>

{/* LEFT SIDE =============================================================== */}
        <motion.div
        initial={{x:-80, opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.7, ease:"easeOut"}}
        className='relative bg-linear-to-br from-green-50 to-green-100 p-8 sm:p-12
        flex flex-col justify-center overflow-hidden'>

          {/* Decorative ambient blobs */}
          <div className='pointer-events-none absolute -top-16 -right-16 w-56 h-56 bg-green-300/30
          rounded-full blur-3xl'/>
          <div className='pointer-events-none absolute -bottom-20 -left-10 w-64 h-64 bg-green-400/20
          rounded-full blur-3xl'/>

          <span className='relative inline-flex w-fit items-center gap-2 text-xs font-semibold
          tracking-wide uppercase text-green-700 bg-white/70 backdrop-blur-sm px-3 py-1.5
          rounded-full mb-5 shadow-sm ring-1 ring-green-200'>
            <FaMicrophoneAlt className='text-green-600'/> AI Mock Interview
          </span>

          <h2 className='relative text-3xl sm:text-4xl font-extrabold text-gray-800 mb-5
          leading-tight tracking-tight'>
            Start Your <span className='text-green-600'>AI Interview</span>
          </h2>
          <p className='relative text-gray-600 mb-10 leading-relaxed max-w-md'>
            Practice real interview scenarios powered by AI.
            Improve communication, technical skills, and confidence.
          </p>

          <div className='relative space-y-4'>
          {
            [
              {
                icon:<FaUserTie className='text-green-600 text-xl'/>,
                text:"Choose Role & Experience."
              },
              {
                icon: <FaMicrophoneAlt  className='text-green-600 text-xl'/>,
                text:"Smart Voice Interview."
              },
              {
                icon:<FaChartLine  className='text-green-600 text-xl'/>,
                text:"Performance Analytics",
              },
            ].map((item,index)=>(
              <motion.div 
              initial={{y:30, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{delay:0.3 + index * 0.15, ease:"easeOut"}}
              whileHover={{scale:1.03, x:4}}
              key={index} className='flex items-center space-x-4 bg-white/90 backdrop-blur-sm
              p-4 rounded-2xl shadow-sm hover:shadow-md ring-1 ring-black/5 cursor-pointer
              transition-shadow duration-300'>
                <span className='flex items-center justify-center w-10 h-10 rounded-xl
                bg-green-50 ring-1 ring-green-100 shrink-0'>
                  {item.icon}
                </span>
                <span className='text-gray-700 font-semibold'>{item.text}</span>
              </motion.div>
            ))
          }  
          </div>


        </motion.div>

{/* RIGHT SIDE=============================================================== */}
        <motion.div
        initial={{x:80, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:0.7, ease:"easeOut"}}
        className='p-8 sm:p-12 bg-white'
        >

          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-1'>
            Interview Setup
          </h2>
          <p className='text-sm text-gray-500 mb-8'>
            Fill in a few details to personalize your session.
          </p>

          <div className='space-y-5'>

            <div className='relative group'>
          <FaUserTie className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400
          group-focus-within:text-green-600 transition-colors'/>
          <input type="text" placeholder='Enter Role'
          className='w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl
          focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white
          outline-none transition-all duration-200 placeholder:text-gray-400'
          onChange={(e)=>setRole(e.target.value)}
          value={role}
          />
            </div>

          <div className='relative group'>
          <FaBriefcase className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400
          group-focus-within:text-green-600 transition-colors'/>
          <input type="text" placeholder='Experience (e.g. 2 years)'
          className='w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl
          focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white
          outline-none transition-all duration-200 placeholder:text-gray-400'
          onChange={(e)=>setExperience(e.target.value)}
          value={experience}
          />
            </div>   

            <div className='relative'>
            <select
           value={mode}
          onChange={(e)=>setMode(e.target.value)}
          className='w-full py-3.5 px-4 bg-gray-50 border border-gray-200 rounded-xl
          focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white
          outline-none transition-all duration-200 appearance-none cursor-pointer
          text-gray-700 font-medium' >
            <option value="Technical">Technical Interview</option>  
            <option value="HR">HR Interview</option>  
          </select>
          <svg className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2
          w-4 h-4 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
          </div>

          {!analysisDone && (
            <motion.div
            whileHover={{scale:1.01}}
            onClick={()=>document.getElementById("resumeUpload").click()}
            className='border-2 border-dashed border-gray-300
            rounded-2xl p-8 text-center cursor-pointer bg-gray-50/50
            hover:border-green-500 hover:bg-green-50/60 transition-all duration-300'>
              <motion.div
              animate={{y:[0,-6,0]}}
              transition={{duration:2.5, repeat:Infinity, ease:"easeInOut"}}
              >
                <FaCloudUploadAlt className='text-5xl mx-auto text-green-500 mb-3 drop-shadow-sm'/>
              </motion.div>
              <input type="file"  accept='application/pdf'
              id='resumeUpload'
              className='hidden'
              onChange={(e)=>setResumeFile(e.target.files[0])}
              />
              <p className='text-gray-600 font-medium'>
                {resumeFile ? resumeFile.name : "Click to upload resume (optional)"}
              </p>
              <p className='text-gray-400 text-xs mt-1'>PDF only</p>

             {resumeFile && (
              <motion.button
              onClick={(e)=>{e.stopPropagation();
                handleUploadResume()
              }}
              whileHover={{scale:1.03}}
              whileTap={{scale:0.97}}
              disabled={analyzing}
              className='mt-5 inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5
              rounded-full hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed
              shadow-md transition-all duration-200 font-medium text-sm'
              >
                {analyzing && (
                  <span className='w-3.5 h-3.5 border-2 border-white/40 border-t-white
                  rounded-full animate-spin'/>
                )}
                {analyzing ? "Analyzing..." : "Analyze Resume"}
              </motion.button>
             )} 
            </motion.div>
          )}


          {analysisDone && (
            <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5, ease:"easeOut"}}
            className='bg-linear-to-br from-green-50 to-gray-50 border border-green-100
            rounded-2xl p-6 space-y-4 shadow-sm'
            >
      <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-800'>
        <FaCheckCircle className='text-green-600'/> Resume Analysis Result
      </h3>
      
      {projects.length > 0 && (
        <div>
        <p className='font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide'>
          Projects
        </p>

        <ul className='space-y-1.5'>
          {projects.map((p,i)=>(
            <li key={i} className='flex items-start gap-2 text-gray-600 text-sm'>
              <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0'/>
              {p}
            </li>
          ))}
        </ul>
        </div>
      )}


{skills.length > 0 && (
        <div>
        <p className='font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide'>
          Skills
        </p>

        <div className='flex flex-wrap gap-2'>
          {skills.map((s,i)=>(
            <span className='bg-white text-green-700 px-3 
            py-1 rounded-full text-sm font-medium shadow-sm ring-1 ring-green-200
            hover:ring-green-400 transition-all' key={i}>{s}</span>
          ))}
        </div>
        </div>
      )}
            </motion.div>
          )}

          <motion.button
          disabled={!role || !experience}
          whileHover={{scale: (!role || !experience) ? 1 : 1.02}}
          whileTap={{scale: (!role || !experience) ? 1 : 0.97}}
          className='w-full disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none
          disabled:cursor-not-allowed bg-linear-to-r from-green-600 to-green-500
          hover:from-green-700 hover:to-green-600
          text-white py-3.5 rounded-full text-lg font-semibold transition-all duration-300
          shadow-lg shadow-green-600/25'>
             Start Interview 
          </motion.button>
          </div>

        </motion.div>
      </div>

    </motion.div>
  )
}

export default Step1SetUp