import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import React from 'react'

export const DataTable = ({ data }) => {
    return (
        <React.Fragment>
            <Typography variant='headline' component='h1'>Adicionar novo cliente </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Key</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Cidade</TableCell>
                        <TableCell>Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((item, index) =>
                            <TableRow key={index}>
                                <TableCell>{item.key}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.date}</TableCell>

                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    )
}