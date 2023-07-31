import { AppBar, Toolbar, Typography } from "@mui/material";
import { Component } from "react";

export class TopBar extends Component {

    render() {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='headline' component='h2'>
                        RL SYSTEM
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}