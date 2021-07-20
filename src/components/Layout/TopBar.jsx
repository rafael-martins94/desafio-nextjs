import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from "react";
import axios from "axios";




const useStyles = makeStyles((theme) => ({    
    logo: {
        cursor: 'pointer',
        height: 45,
        marginLeft: theme.spacing(3)
    },

    toolbar: {
        minHeight: 56,
        display: 'flex',
        justifyContent: 'space-between'

    },
    search: {
        padding: "20px 10px",
        display: "flex",
        alignItems: 'center',
        height: 35,
        width: 500,
    },
    input: {
        flex: 1
    }

}))



export default function TopBar() {
    const [dns, setDns] = useState();


    // ESTA SENDO RECUSADA PELO CLIENTE ESSE REQUEST
    useEffect(() => {
        axios
          .get("http://edns.ip-api.com/json")
          .then((response) => console.log(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);



    const classes = useStyles()

    return (
        <AppBar color='secondary' classesName = {classes.root} >
            <Toolbar className={classes.toolbar} >
                <Box display='flex' alignItems='center' >
                    <img className={classes.logo}
                        src='https://pokeshop-gamaedition.netlify.app/static/media/pokeshop-logo.7f661f18.png'
                    />
                </Box>
                <Hidden mdDown>
                    <Box>
                        <Paper component='form' className={classes.search}>
                            <InputBase
                                className={classes.input}
                                placeholder="Pesquisar"
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                </Hidden>
                <Box>
                    <h3 color='secondary'>São Paulo</h3>
                </Box>

                <Box>
                    <Avatar>RM</Avatar>

                </Box>
            </Toolbar>
        </AppBar>
    )

}