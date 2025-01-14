import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles =  makeStyles((theme)=>({
    title:{
      fontSize:24
    }
  }))

export default function Header(){
    const classes = useStyles()
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography className={classes.title}>
                    Travel Advisor
                </Typography>
            </Toolbar>
        </AppBar>
    )
}