import DrawerAppBar from "./Drawer"
import AnimatedPage from "./AnimatedPage"
import "./skills.css"
import { Box } from '@mui/material'
import react from '../assets/react.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import css from '../assets/css.png'
import nodejs from '../assets/nodejs.png'
import firebase from '../assets/firebase.png'
import mongo from '../assets/mongodb.png'
import redux from '../assets/redux.png'
import git from '../assets/git.png'
import postman from '../assets/postman.png'
import java from '../assets/java.png'
import mysql from '../assets/mysql.png'
import { useState } from "react"



export default function Skills() {

    const navigate=(props)=>{
        window.open(
            `${props}`,
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    return (
        <>
            <DrawerAppBar />
           
            <AnimatedPage>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="container">

                        <h1 className="header1">My Primary skills are</h1>
                        <div className="skills-div">

                            <div onClick={() => {
                                navigate('https://react.dev/')
                            }} className="skills-card">
                                <img src={react} alt="" />
                                <h3 className="skill-name">React</h3>
                            </div>
                            <div onClick={() => {
                                navigate(' https://nodejs.org/en/about')
                            }}  className="skills-card">
                                <img src={nodejs} alt="" />
                                <h3 className="skill-name">Node js</h3>
                            </div>
                            <div onClick={() => {
                                navigate(' https://www.mongodb.com/')
                            }} className="skills-card">
                                <img src={mongo} alt="" />
                                <h3 className="skill-name">Mongo</h3>
                            </div>
                            <div onClick={() => {
                                navigate('https://en.wikipedia.org/wiki/HTML')
                            }} className="skills-card">
                                <img src={html} alt="" />
                                <h3 className="skill-name">Html</h3>
                            </div>
                            <div onClick={() => {
                                navigate('https://en.wikipedia.org/wiki/CSS')
                            }} className="skills-card">
                                <img src={css} alt="" />
                                <h3 className="skill-name">Css</h3>
                            </div>
                            <div onClick={() => {
                                navigate('https://en.wikipedia.org/wiki/JavaScript')
                            }} className="skills-card">
                                <img src={javascript} alt="" />
                                <h3 className="skill-name">JS</h3>
                            </div>


                        </div>
                    </div>

                    <div className="container">

                        <h1 className="header1">I'm familiar with these technologies</h1>
                        <div className="skills-div">

                            <div className="skills-card">
                                <img src={redux} alt="" />
                                <h3 className="skill-name">Redux</h3>
                            </div>
                            <div className="skills-card">
                                <img src={java} alt="" />
                                <h3 className="skill-name">Java</h3>
                            </div>
                            <div className="skills-card">
                                <img src={firebase} alt="" />
                                <h3 className="skill-name">Firebase</h3>
                            </div>
                            <div className="skills-card">
                                <img src={git} alt="" />
                                <h3 className="skill-name">Git</h3>
                            </div>
                            <div className="skills-card">
                                <img src={mysql} alt="" />
                                <h3 className="skill-name">Mysql</h3>
                            </div>

                        </div>
                    </div>

                    {/* <button
                        className="MessageDisplay"
                        onClick={() => {
                            setOverlay(true);
                        }}
                    >
                        Show Offer
                    </button>

                    <Overlay
                        className="PopupBox"
                        isOpen={isOpen}
                        closeOverlay={closeOverlay}
                        style={{backgroundColor:'red'}}
                    >
                        <h2 className="DisplayMessage">
                            Click the button below to accept our amazing offer!
                        </h2>
                                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sunt sint in, numquam quia distinctio porro maiores voluptates accusantium fugiat quo enim et saepe, eum ratione molestias. Reiciendis, doloribus inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta voluptatum nemo natus deserunt magnam repellendus, nobis molestias praesentium odio ullam quidem in illum pariatur minima eius laudantium tenetur assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi esse repellendus amet provident asperiores aliquid adipisci, quo tempora placeat, maxime itaque incidunt soluta nam aperiam doloremque ipsum nostrum! Accusantium quod, enim fugit dignissimos officiis quisquam cumque inventore nesciunt quo. Nulla molestias cupiditate suscipit facilis totam dicta exercitationem consequatur quidem deserunt illo, doloremque magnam mollitia ex ea iste pariatur sequi impedit aperiam. Amet tempora voluptatum soluta minus odio commodi, reiciendis non eaque necessitatibus, ut blanditiis expedita, similique dicta itaque eos suscipit esse perspiciatis obcaecati dolore. Magnam, deleniti commodi? Ipsa dolorum laboriosam perferendis, dolorem quo cumque voluptatem atque odit ratione sed!
                                </div>
                        <button
                            className="0fferMessage"
                            onClick={() => {
                                displayMessage();
                            }}
                        >
                            Accept Offer
                        </button>
                    </Overlay> */}
               
                </Box>
                
            </AnimatedPage>
            

        </>

    )

}