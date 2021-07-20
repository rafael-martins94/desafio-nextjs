import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
    root: {        
        display: 'flex',
        backgroundColor: '#B8860B',  
        width: 300,     
        paddingTop: 86,
        margin:0,
        padding: 30,
        justifyContent: 'center',
        color: 'white'
    },
    
}));


export default function CartBar() {
    const classes = useStyles();

    return (
    <>
        <Box color='secondary' component="span" m={1} className={classes.root}>
           <h1>Carrinho</h1>
        </Box>        
    </>

        
    )
    
}