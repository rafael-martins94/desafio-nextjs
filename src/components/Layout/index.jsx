import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import TopBar from '../Layout/TopBar';
import CartBar from './CartBar';


const useStyles = makeStyles((theme) => ({
    root: {        
        height: '100vh',
        overflow: 'hidden',
        width: '100vw',
        display: 'flex',
        
    },
    wrapper: {
        backgroundColor: '#545454',
        display: 'flex',        
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 84,
    
        
    },
    contentContainer: {        
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
    },
}));

export default function Layout({ children, title }) {
    const classes = useStyles()

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={classes.root}>     
            <TopBar/>                 
                <div className={classes.wrapper}>
                    <div className={classes.contentContainer}>
                        <div className={classes.content}>{children}</div>
                    </div>
                </div>  
            <CartBar/>              
            </div>
            
        </>
    )
}