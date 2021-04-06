import { IconButton } from '@material-ui/core'
import { GitHub, Instagram, LinkedIn, Mail } from '@material-ui/icons'
// import React from 'react'


function Footer( props: any ){
    // const [ themeSelector, setTheme ] = useState(false);
    return (
        <div id='ff'>
            <IconButton href='https://www.instagram.com/vince_chiarella'>
                <Instagram fontSize='large' />
                </IconButton>                
            <IconButton href='https://www.linkedin.com/in/vincenzo-chiarella-0528131a2'>
                <LinkedIn fontSize='large' />
                </IconButton>              
            <IconButton href='MAILTO:vins14nov@outlook.it'>
                <Mail fontSize='large' />
            </IconButton>
            <IconButton href='https://github.com/vincenzochiarella'>
                <GitHub fontSize='large' />
            </IconButton>
        </div>
    )
}
export default Footer