import React, { useState } from 'react'
import './SocialMediaIcons.css'
import { Link } from 'react-router-dom';
import Mearg_Gebremedhns_CV from './Mearg_Gebremedhns_CV.pdf';
import { FaDownload } from 'react-icons/fa';
import { motion} from 'framer-motion';


const aboutVariants = {
    hidden:{
        opacity:0,
        x: '100vw'
    },
    visible:{
        opacity:1, 
        x: 0,
        duration: 1.5,
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 12,
        }
    }
}

const About = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <>
        <h1>About Me</h1>
        <div className="about-content"> 
            <p>Hi there! I'm Mearg.</p>
                   
            <button onClick={()=>setShowMore(!showMore)} style={{cursor: 'pointer'}}>{ showMore ? "Less Info" : "More Info"}</button>
            {showMore && (
                <section>
                <p>
                  <strong>I am a Full Stack Developer</strong> with expertise in JavaScript, Django, React, MongoDB, MySQL, 
                  and mobile app development using Flutter, React Native. 
                </p>
                <p><strong>Education:</strong> I graduated with a BSc in Software Engineering from Adigrat University.</p>
                <p>I have hands-on experience in developing web and mobile applications using JavaScript and am currently focused on improving my skills in full-stack development.</p>
              </section>
            )}<br/><br/>
            <span className='span-for-resume' >
                <a href={Mearg_Gebremedhns_CV} download="Resume.pdf" style={{marginBottom:'105px'}}><FaDownload className='downloadResume' size={12}/></a> Download MY Resume <br/>
                <hr className='horizontal-line' />
            </span>
        
        </div>
        <div className='projects-overall-container'>
            <motion.div
                variants={aboutVariants}
                initial="hidden"
                animate= "visible"
            >
                <div className='project-one'>
                    <div>
                        <Link to={"https://github.com/maggie-ghub/Wudase-Mariam-Prayer-App"} >
                            <h4>Wdasie Mariam</h4>
                            <p>Orthodox's Religion Native App</p>
                            <p>Developed using React Native</p>
                        </Link>                   
                    </div>
                    <div>
                        <Link to={"https://github.com/maggie-ghub/POS-System"}>
                            <h4>Pos System</h4>
                            <p>Restaurant Food Reciept Native App</p>
                            <p>Developed using React Native</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={"https://github.com/maggie-ghub/E-Commerce"} >
                            <h4>E-Commerce</h4>
                            <p>Online Shopping Site</p>
                            <p>Developed using React Js</p>
                        </Link>
                    </div>
                </div>
                <div className='project-two'>
                    <div>
                    <Link to="https://github.com/maggie-ghub/Library-Management-System">
                        <h4>Library Management System</h4>
                        <p>Online site simplifying manual work</p>
                        <p>Developed using Html, CSS, PHP, MySQL</p>
                    </Link>
                    </div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </motion.div>
        </div>
    </>
  )
}

export default About