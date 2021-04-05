import { AppBar, Toolbar, useScrollTrigger, Slide } from '@material-ui/core'
// import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}


function HideOnScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

function Header( props: any){
    // const [ themeSelector, setTheme ] = useState(false);
    return (
        <HideOnScroll {...props}>
            <AppBar position='sticky' color='transparent' style={{alignItems: 'center'}}>
                <Toolbar>
                    Navigation Bar
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    ) 
}
export default Header