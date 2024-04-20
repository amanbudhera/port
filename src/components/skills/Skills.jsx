import React, { useRef } from 'react'
import "./skills.scss"
import {color, motion,useScroll, useTransform} from "framer-motion"

function Skills() {

    const ref = useRef()

    const {scrollYProgress}= useScroll({
        target:ref,
        offset:["start start","end start"]
    });

    const yText = useTransform(scrollYProgress,[0,1],["0%","500%"]);
    const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"]);
  return (
    <div className='parallax' ref={ref}>
        <div className='hed'>
          <h1>Skills</h1>
        </div>
      <motion.div style={{ y: yText }}>
        <div className='iconContainer'>
          <div>
          <img src="/mongo-db.png" alt="mongo-db" />
          <img src="/Express-js.png" alt="express" />
          <img src="/react.png" alt="react" />
          </div>
          <div>
          <img src="/nodejs.png" alt="nodejs" />
          <img src="/github.png" alt="github" />
          <img src="/javascript.png" alt="js" />
          </div>
        </div>
      </motion.div>
      <motion.div className='mountains'></motion.div>
      <motion.div style={{y:yBg}} className='planets'></motion.div>
      <motion.div style={{x:yBg}} className='stars'></motion.div>
    </div>
  )
}

export default Skills
