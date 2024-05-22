import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [{
    id:1,
    title:"WebClass Tutorial",
    img:"webclass1.png",
    desc:"Ed-tech platform using MERN stack with authentication and authorization and used CURD operations",
    link:"https://github.com/amanbudhera/mern-webclass",
    link2:"https://github.com/amanbudhera/mern-webclass"
},{
    id:2,
    title:"Real Estate Website",
    img:"real.png",
    desc:"Responsive web design with animated effact using frame motion \n tool: ReactJs, Motion ",
    link:"https://realestate-one-cyan.vercel.app/",
    link2:"https://github.com/amanbudhera/realestate"
},
{
    id:3,
    title:"E-commerce Website",
    img:"/e-com.png",
    desc:"Mullite page e-commerce website with user friendly web design and responsive to all screen template \n tools: HTML, CSS and JS",
    link:"https://e-commerce-one-jade.vercel.app/",
    link2:"https://github.com/amanbudhera/e-commerce"
},{
    id:4,
    title:"todo list",
    img:"/todo.png",
    desc:"Todo list page using react context api with local storage to store data and features to edit list, delete and mark. \n tools: Reactjs and Tailwind",
    link:"https://todo-list-001-red.vercel.app/",
    link2:"https://github.com/amanbudhera/todo-list-001"
},
];



const Single = ({item})=>{
    const ref = useRef()
    const {scrollYProgress} = useScroll(
        {target:ref,
            // offset:["start start","end start"]
        }
    );
    const y = useTransform(scrollYProgress,[0,1],[-300,300])
    return(
        <section >
            <div className="container">
                <div className='wrapper'>
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link}><button>See Demo</button></a>
                        <a href={item.link2}><button>Github</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


function Portfolio() {
    const ref = useRef();
    const {scrollYProgress} = useScroll(
        {target:ref,
        offset:["end end","start start"]
        }
    );

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        dumping:30
    })

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Projects</h1>
            <motion.div style={{scaleX:scaleX}} className='progressBar'></motion.div>
        </div>
        {items.map(item=>(<Single item={item} key={item.id}/>))}
    </div>
  )
}

export default Portfolio
