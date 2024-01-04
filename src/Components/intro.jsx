import { Box, Typography } from "@mui/material"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import programmer from '../assets/programmer.png'
import me from '../assets/me4.png'
import "./intro.css"
import Typical from 'react-typical'
import { TypeAnimation } from 'react-type-animation';
import DrawerAppBar from "./Drawer"
import AnimatedPage from "./AnimatedPage"
import useMediaQuery from '@mui/material/useMediaQuery';



export default function Intro() {

    const matches = useMediaQuery('(min-width:600px)');
    

    return (
        <>
             <DrawerAppBar/>
             <AnimatedPage>
             <Box style={{ height: '100%', fontFamily: 'Poppins', wordSpacing: '0.3rem', marginTop: '3rem',color:'white',zIndex:'1'}}>
            <Box style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', overFlow: 'hidden' }}>
                <div>
                    <h2 className="hello">Hello I'm,</h2>
                   {matches? <TypeAnimation
                        sequence={[
                            '',
                            1500,
                            'Ayush Anand',
                            10000,
                            
                        ]}
                        
                        speed={25}
                        style={{ fontSize: '50px', display: 'inline-block', marginBottom:'4px' }}
                        repeat={Infinity}
                    />:<TypeAnimation
                    sequence={[
                        '',
                        1500,
                        'Ayush Anand',
                        10000,
                        
                    ]}
                    
                    speed={25}
                    style={{ fontSize: '30px', display: 'inline-block', marginBottom:'4px' }}
                    repeat={Infinity} /> }
                    
                    <h3 className="fullstack">Full Stack Web Developer</h3>
                    <p className="desc">I'm a pre-final year student at The LNMIIT. I love coding and i like to solve problems. I'm a stickler for detail and I ensure that the work I produce is always consistent of a high technical and aesthetic standard.</p>

                </div>

                <div style={{ width: '15%', display: 'flex', justifyContent: 'space-evenly', marginTop: '3rem' }}>
                    <a target="blank_" href="https://github.com/ayushanandmishra"><img src={github} alt="github" className="logo" /> </a>
                    <a href="https://www.linkedin.com/in/ayush-anand-b32141281/" target="blank_"><img src={linkedin} alt="linkedin" className="logo" /></a>
                </div>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center',zIndex:'2' }}>
                <div>
                    <img  id="tilt" src={me} alt="" className="programmer" />
                </div>
                            
            </Box>
            
        </Box>

             </AnimatedPage>
         
        </>
        
    )

}