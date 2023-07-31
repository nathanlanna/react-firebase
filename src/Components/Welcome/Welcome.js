import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../Utils/routeUtils";


export class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <Card style={{margin:'100px'}}>
                    <CardContent>
                        <Typography variant="headline" component='h3'>
                            Seja bem vindo
                        </Typography>
                        {
                            Object.values(routes).map((route, index) => {
                                return <Button variant="contained" color="primary" component={props => <Link to={route.path} {...props} />}>
                                    {route.name}
                                </Button>
                            })
                        }
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}