import React, { useEffect } from "react"
import anime from 'animejs'

function MovingFadeLetter(props){
    const [ text, setText ] = React.useState(props.children)
    const letter = React.useRef()
    const title = React.useRef()
    useEffect(
        anime.timeline()
            .add({
                targets: '.ml12 .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 500 + 30 * i
            })
            // .add({
            //     targets: '.ml12 .letter',
            //     translateX: [0, -30],
            //     opacity: [1, 0],
            //     easing: "easeInExpo",
            //     duration: 1100,
            //     delay: (el, i) => 100 + 30 * i
            // })
    )
    return(
        <>
            <h1 ref={title} style={{
                  fontWeight: 200,
                  fontSize: '1.8em',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5em'
            }}>
               {text}
            </h1>
        </>
    )
}
export default MovingFadeLetter