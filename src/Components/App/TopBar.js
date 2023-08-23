import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { Component } from "react";
import { routes } from "../../Utils/routeUtils";

export class TopBar extends Component {

    render() {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={()=>{window.location=routes.home.path}}>
                    </IconButton>
                    <Typography>
                        <Link href="/" variant="headline" color="#FFFFFF" underline="none" >Rl System</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}