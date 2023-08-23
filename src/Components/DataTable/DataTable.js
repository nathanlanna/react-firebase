import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import React from 'react'
import FirebaseService from "../../Service/firebaseService"
import { Link } from "react-router-dom"

export const DataTable = ({ data }) => {

    const remove = (id)=>{
        FirebaseService.deleteData("clientes",id);
    }
    return (
        <React.Fragment>
            <Typography variant='headline' component='h1'>Listagem de Clientes </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Cidade</TableCell>
                        <TableCell>Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((item, index) =>
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>
                                    <Button variant='contained' color="primary" style={{marginTop:"20px", display:"inline-block"}}
                                        component = {props => <Link to={"/editar/" + item.key} {...props}/>}>
                                        Editar</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant='contained' color="primary" style={{marginTop:"20px", display:"inline-block"}} onClick={()=>{remove(item.key)}} >Apagar</Button>
                                </TableCell>

                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    )
}