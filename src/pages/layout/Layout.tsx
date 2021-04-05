// import { Grid } from '@material-ui/core'
// import { LANDING } from '../../consts/routes'

// import { useLocation } from 'react-router';

/**
 * 
 * @param props 
 * @returns 
 * @description Layout center body
 */
function Layout( props: any){
    //TODO set tema dark
    // const [ themeSelector, setTheme ] = useState(false);
    // const location = useLocation();
    
    return (
            <>
                {props.children}          
            </>
            
    )
}
export default Layout