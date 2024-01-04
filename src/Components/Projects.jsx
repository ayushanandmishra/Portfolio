import AnimatedPage from "./AnimatedPage"
import DrawerAppBar from "./Drawer"
import { Box, Button } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { ImageOverlay } from 'react-image-overlay-effect'

import './projects.css'
import cover1 from '../assets/Project 1/2.png'
import cover2 from '../assets/Project2/1.png'

export default function Projects() {

    const trigger1 = useMediaQuery('(min-width:1200px)');
    const trigger2 = useMediaQuery('(min-width:900px)')

    const github1=()=>{
        window.open(
            'https://github.com/ayushanandmishra/Music-App',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    const github0=()=>{
        window.open(
            'https://github.com/ayushanandmishra/Social-Meida-App',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    return (

        <>
            <DrawerAppBar />

            <AnimatedPage>

                <Box style={{ fontFamily: 'Poppins', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <div className="project-container">

                        <div className="project-1">

                            <h1>Social Media App</h1>

                            <div className="formatter">

                                {/* <img className="coverimage" src={cover1} alt="" /> */}

                                <ImageOverlay
                                    src={cover1}
                                    className="coverimage"
                                    description={<h1>Home Page of my Social Media Website</h1>} />


                                <div className="description">

                                    <h1>Description</h1>
                                    <p className="desc">
                                    My app combines the power of React for the frontend, Node.js and Express for the backend, and MongoDB as the database, all brought together with the seamless user interface provided by Material UI.
                                    </p>
                                    <p className="desc">
                                   You can create a personalized profile, upload photos, and engage with posts through likes and comments.With seamless navigation, responsive design, and efficient data processing, my app ensures a smooth user experience.
                                    </p>

                                    <h2>Technologies Used</h2>
                                    <p>
                                        <ul>
                                            <li className="list-item">React</li>
                                            <li className="list-item">Nodejs</li>
                                            <li className="list-item">Mongodb</li>
                                            <li className="list-item">Redux</li>
                                            <li className="list-item">Material UI</li>
                                        </ul>
                                    </p>

                                    <Button onClick={github0} color="secondary" variant="contained">Github Link</Button>
                                </div>

                            </div>


                        </div>

                        <div className="project-1">

                            <h1>Youtube Music Clone {"("}UI{")"} </h1>

                            <div className="formatter">

                                {/* <img className="coverimage" src={cover1} alt="" /> */}

                                <ImageOverlay
                                    src={cover2}
                                    className="coverimage"
                                    description={<h1>Landing page of my music app page</h1>} />


                                <div className="description">

                                    <h1>Description</h1>
                                    <p className="desc">
                                    Built using HTML, CSS, and JavaScript, our site allows you to play and navigate through a collection of locally stored songs. 
                                    </p>
                                    

                                    <h2>Technologies Used</h2>
                                    <p>
                                        <ul>
                                            <li className="list-item">HTML</li>
                                            <li className="list-item">CSS</li>
                                            <li className="list-item">JavaScript</li>
                                           
                                        </ul>
                                    </p>

                                    <Button color="secondary" onClick={github1} variant="contained">Github Link</Button>
                                </div>

                            </div>


                        </div>

                    </div>

                </Box>


            </AnimatedPage>


        </>

    )
}