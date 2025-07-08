// import { Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/nav';
import { FaFacebook, FaInstagram, FaGithub, FaTiktok, FaYoutube} from 'react-icons/fa';
import './components/SocialMediaIcons.css';
import mearg from './image/mearg.png';
import profile1 from './image/profile1.jpg';
import profile3 from './image/profile3.jpg';
import { FaLinkedin } from 'react-icons/fa6';
import twitter from './image/twitter-x-logo.png';
import { motion } from 'framer-motion'
const headerVariants = {
  hidden:{
      opacity:0,
      y: '-100vh'
  },
  visible:{
      opacity:1, 
      y: 0,
      duration: 1.5,
      transition: {
          type: "spring",
          mass: 0.4,
          stiffness: 90,
          damping: 8,
          
      }
  }
} 

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || 'home');
    };
    
    // Set up event listener
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    handleHashChange();
    
    // Clean up
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const nameElement = document.querySelector('.name');

    if(nameElement) {
      let iterations = 0;
      const interval = setInterval(() => {
        nameElement.innerText = nameElement.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return nameElement.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= nameElement.dataset.value.length) {
          clearInterval(interval);
        }

        iterations += 1 / 3;
      }, 30);
    }
    
  }, []);
    return (
        <div style={{width: '100%'}}>
            <Nav />
            <img src={mearg} alt='Logo' className='logo'/>
            <img src={profile1} alt='Profile_Picture' className='profile' /> 
            <img src={profile3} alt='pro' className='tocenter' />
            <div className='backgroundText'></div>
            <div className='container-background'></div>
          
            <div className='content'>
                <motion.h1
                  variants={headerVariants}
                  initial="hidden"
                  animate= "visible"
                >
                  <center className="names">Welcome to my portfolio! </center>
                </motion.h1>
                
                <p style={{fontSize: 35, fontWeight: 'bold'}} className='name' data-value="I am Mearg Gebremedhn">I am Mearg Gebremedhn</p>
                
                <p style={{fontSize: 25}}>
                  I am a full-stack developer passionate about building intuitive, user-friendly applications. 
                  My experience spans <strong style={{color:'rgb(10,10,10)'}}>web and mobile development</strong>, working with technologies such as 
                  HTML, CSS, PHP, JavaScript, React.js, React Native, SQL, and WordPress. Currently, I am expanding my knowledge in 
                  <strong style={{color:'rgb(10,10,10)'}}> Flutter and Django</strong>.
                </p>
                {/* Conditional rendering based on current page */}
                {currentPage === '' && <App />}
                {currentPage === 'about' && <About name="about" />}
                {currentPage === 'contact' && <Contact name="contact" />}
                {/* <Routes>
                    <Route path='/about' element={<About name="about" />} />
                    <Route path='/contact' element={<Contact name="contact" />} />
                </Routes> */}
            </div>
            <SocialLinks />
        </div>
    )
};
export default App;
const SocialLinks = () => (
    <>  
      <div  className='footer' >
        <a href="https://www.facebook.com/mearg.gebremedhn.50" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} className='facebook' />
        </a>
        <a href="https://www.instagram.com/mearg_g?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} className='instagram instagram2' />
        </a>
        <a href="https://github.com/maggie-ghub" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} className='github' />
        </a>
        <a href="https://www.tiktok.com/@g.maggie" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={32} className='tiktok'/>
        </a>
        <a href="https://x.com/MGmedhn4067" target="_blank" rel="noopener noreferrer" >
          <img style={{width: '32px', height: '32px'}} src={twitter} alt='twitter X'/>
        </a>
        <a href="https://youtube.com/@meag1967" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={32} className='youtube' />
        </a>
        <a href='https://www.linkedin.com/in/mearg-gmedhn-11716119a/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin size={32} className='linkedin' />
        </a>
       
       {/* <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> */}
      </div>

  </>
  );