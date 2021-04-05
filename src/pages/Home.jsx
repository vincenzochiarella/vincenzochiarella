import React from 'react'
import { useHistory } from "react-router-dom";

import { DEV , FOTOGRAFIA} from '../consts/routes'

import { Box, Button, Grid, Typography, Container } from "@material-ui/core"
import Footer  from './layout/Footer'
// import { ImageBackground } from 'react'

import { NavigateNext, NavigateBefore } from '@material-ui/icons'
import { useEffect } from "react"

import anime from 'animejs'
import bg from '../resources/Bg_home.jpg'


// const bg = React.lazy(() => require('../resources/Bg_home.jpg'));


function Home (){
    const cvRef = React.useRef()
    const photoRef = React.useRef()
    const txtRef = React.useRef()
    const vinsRef = React.useRef()
    const bgRef = React.useRef()

    const history = useHistory()

    const allPage = anime.timeline()

    useEffect(()=>{
        anime({
            targets: cvRef.current,
            opacity: [0, 1],
            translateX: [-100, 0],
            duration: 2000,
            easing: "easeInOutCubic"
        })
        anime({
            targets: photoRef.current,
            opacity: [0, 1],
            translateX: [100, 0],
            duration: 2000,
            easing: "easeInOutCubic"
        })
        anime({
            targets: txtRef.current,
            opacity: [0, 1],
            translateY: [200, 0],
            duration: 4000,
            easing: "easeInOutQuad"
        })
        anime({
            targets: vinsRef.current,
            opacity: [0, 1],
            translateY: [-600, 0],
            duration: 3000,
            easing: "easeInOutQuad"
        })
        allPage
            .add({
                targets: bgRef.current,
                duration: 1,
                opacity: 0,
            })
            .add({
                targets: bgRef.current,
                duration: 3000,
                opacity: 1,
                easing: 'easeInQuad'
            })
        },[])//Squared parentesis to load once
    const [touchStart, setTouchStart] = React.useState(0);
    const [isTouchLeft, setTouchEnd] = React.useState(0);
    return (
        <Box ref={bgRef}
            style={{
                backgroundImage: 'url(' + bg + ')',
                backgroundPosition: 'center',
                backgroundBlendMode: 'darken',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Container maxWidth="md" 
                onTouchStart={tE => setTouchStart(tE.targetTouches[0].clientX)}
                onTouchMove={tM => setTouchEnd(tM.targetTouches[0].clientX)}
                onTouchEnd={() => {
                    if (touchStart - touchEnd > 150) {
                        // do your stuff here for left swipe
                        console.log('Swipe a sinistra')
                        anime({
                            targets: [ bgRef.current ], 
                            duration: 3000,
                            translateX: '-100em',
                            delay: 300,
                            update: function(anim){
                                vinsRef.current.style.filter = 'blur(' + 20 * anim.progress / 100 + 'px)'
                                txtRef.current.style.filter = 'blur(' + 30 * anim.progress / 100 + 'px)'
                            },
                            complete: (a) =>{   
                                history.push(FOTOGRAFIA)
                            }
                            
                        })
                        
                    }

                    if (touchStart - touchEnd < -150) {
                        // do your stuff here for right swipe
                        console.log('Swipe a destra')
                        anime({
                            targets: [ bgRef.current ], 
                            duration: 3000,
                            translateX: '100em',
                            delay: 300,
                            update: function(anim){
                                vinsRef.current.style.filter = 'blur(' + 20 * anim.progress / 100 + 'px)'
                                txtRef.current.style.filter = 'blur(' + 30 * anim.progress / 100 + 'px)'
                            },
                            complete: (a) =>{   
                                history.push(DEV)
                            }
                            
                        })                   
                        
                    }
                }}>
                <Box
                    width={'100%'}
                    height={'100vh'}
                    display='flex'>
                    <Box m="auto">
                        <Grid
                            container
                            direction='row'
                            align='center'
                            justify='center'
                            margin='auto'
                        >
                            <Grid item lg={12} md={12} xs={12}>
                                <Box
                                    ref={vinsRef}
                                >
                                    <Typography
                                        align='center'
                                        variant="h4"
                                    >
                                        Vincenzo Chiarella
                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={6}>
                                <Button
                                    onMouseOver={e => {
                                        anime({
                                            targets: e.currentTarget,
                                            scale: {
                                                value: 1.5,
                                                delay: 100,
                                                duration: 2000
                                            }
                                        })
                                    }}
                                    onMouseOut={e => {
                                        anime({
                                            targets: e.currentTarget,
                                            scale: {
                                                value: 1,
                                                delay: 100,
                                                duration: 2000
                                            }
                                        })
                                    }}
                                    startIcon={<NavigateBefore style={{ fontSize: '3em' }} />}
                                    ref={cvRef} >CV</Button>
                            </Grid>
                            <Grid item lg={6} md={6} xs={6} >
                                <Button
                                    onMouseOver={e => {
                                        anime({
                                            targets: e.currentTarget,
                                            scale: {
                                                value: 1.5,
                                                delay: 100,
                                                duration: 2000
                                            }
                                        })
                                    }}
                                    onMouseOut={e => {
                                        anime({
                                            targets: e.currentTarget,
                                            scale: {
                                                value: 1,
                                                delay: 100,
                                                duration: 2000
                                            }
                                        })
                                    }}
                                    onClick={e => {
                                        anime({
                                            targets: [cvRef.current, photoRef.current, txtRef.current]

                                        })
                                    }}

                                    endIcon={<NavigateNext style={{ fontSize: '3em' }}


                                    />}
                                    ref={photoRef} >Foto</Button>
                            </Grid>
                            <Grid item lg={12} md={12} xs={12}>
                                <Typography
                                    ref={txtRef}
                                    align='center'
                                    variant="h6">
                                    fai swipe o clicca
                    </Typography>
                            </Grid>
                            <Grid item lg={12} md={12} xs={12}>
                                <Footer />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </Box>
    )

}
export default Home