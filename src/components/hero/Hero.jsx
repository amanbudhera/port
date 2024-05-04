import { animate,motion } from "framer-motion"
import "./hero.scss"
import React from 'react'
import cv from "../../../public/aman.mern.pdf"

const textVariants={
    initial:{
        x: -500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}
const sliderVariants={
    initial:{
        x: 0,
    },
    animate:{
        x:'-220%',
        transition:{
            repeat:Infinity,
            repeatType:'mirror',
            duration:20,
        }
    }
}

function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>AMAN DAHIYA</motion.h2>
                <motion.h1 variants={textVariants}>Full-Stack Developer</motion.h1>
                <motion.div variants={textVariants} className="button">
                    <motion.a className="cvbutton" download href={cv} variants={textVariants}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg> Download CV</motion.a>
                </motion.div>
            </motion.div>
        </div>
        <motion.div  className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
            Full-Stack Developer
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero