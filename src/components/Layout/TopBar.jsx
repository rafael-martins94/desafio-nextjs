import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme)=>({
    logo: {
        cursor: 'pointer',
        height: 45,
        marginLeft: theme.spacing(3)
    },
    search: {
        padding: "20px 10px",
        display: "flex",
        alignItems: 'center',        
        height: 35,
        width: 300,
        marginLeft: "20px" 
    },
    input: {
        flex: 1
    }


}))


export default function TopBar() {
    const classes = useStyles()

    return (
        <AppBar color = 'secondary' >
            <Toolbar >
                <Box display= 'flex' alignItems='center' >
                    <img className={classes.logo} 
                    src='https://pokeshop-gamaedition.netlify.app/static/media/pokeshop-logo.7f661f18.png' 
                />
                </Box>
                <Box>
                    <Paper component= 'form' className={classes.search}>
                        <InputBase
                            className={classes.input}
                            placeholder= "Pesquisar"                            
                        />
                        <IconButton type= "submit" aria-label="search">
                            <SearchIcon/>
                        </IconButton>

                    </Paper>

                </Box>
                <Box></Box>
            </Toolbar>
        </AppBar>
    )

}