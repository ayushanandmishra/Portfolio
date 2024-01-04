import AnimatedPage from "./AnimatedPage";
import DrawerAppBar from "./Drawer";
import './aboutme.css'
import { Box,Divider } from "@mui/material";
import dba from '../assets/Education/dba.jpg'
import hmss from '../assets/Education/hmss.jpg'
import lnmiit from '../assets/Education/lnmiit.jpg'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'

export default function Aboutme() {

    return (
        <>
            <DrawerAppBar/>

            <AnimatedPage>

                <Box style={{ fontFamily: 'Poppins', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <div className="container">
                        <h1>Educational History</h1>

                        <div className="path">
                                <img src={dba} alt="" />
                                <div>
                                <h1>Don Bosco Academy School</h1>
                                <h3>2008-2019</h3>
                                <h2>10th Aggerate : <span className="marks">94</span>%</h2>
                                </div>
                               
                                
                               
                        </div>

                     

                        <div className="path">
                                <img src={hmss} alt="" />
                                <div>
                                <h1>Holy Mission Seconday School</h1>
                                <h3>2019-2021</h3>
                                <h2>12th Aggerate : <span className="marks">96</span>%</h2>
                                </div>
                        </div>

                        <div className="path">
                                <img src={lnmiit} alt="" />
                                <div>
                                <h1>The LNM Institute of Information</h1>
                                <h1>Technology</h1>
                                <h3>2021-Current</h3>
                                <h3>BTECH : Communication and Computer Engineering</h3>
                                <h2>CGPA : <span className="marks">7.8</span></h2>
                                </div>
                        </div>
                    </div>

                        <div className="contactme">
                            <div>

                            <h2>Want to reach me?</h2>
                            <h3>ayushanandmishra@gmail.com</h3>
                            <h4>+91-7370813492</h4>

                            </div>

                            <div>
                                    <h2>My social media profiles</h2>
                                    <div className="socialcontainer">
                                    <a target="_blank" href="https://twitter.com/ChaRliE90O"><img className="social" src={twitter} alt="" /></a>
                                    <a target="_blank" href="https://www.instagram.com/_ayush_029/"><img className="social" src={insta} alt="" /></a>
                                    </div>
                                    

                            </div>
                                
                                

                        </div>

                </Box>

            </AnimatedPage>

        </>
    )

}