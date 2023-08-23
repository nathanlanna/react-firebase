import { Button, TextField } from "@mui/material";
import React, { Component } from "react";
import "./AddStyle.css"
import FirebaseService from "../../Service/firebaseService";
import withRouter from "../HOC/withRouter"
import { routes } from '../../Utils/routeUtils';



class Add extends Component {
    state = { id: null, name: "", city: "", date: "" }

    componentDidMount() {

        const {id} = this.props.params;

        if(id != undefined) {
            this.setState({ id });
            FirebaseService.getUniquData("clientes", id, (data) =>
                this.setState(data, () => console.log(data)));
        

        } else {
            console.log(id);
        }
    }

    submit = (event) => {
        event.preventDefault();
        const  {name}  = this.state;
        const  {city}  = this.state;
        const  {date}  = this.state;

        const pageid = this.props.params.id;
        let objToSubmit = {
            name, city, date
        }
        if(pageid == undefined) {
             const id = FirebaseService.insertData("clientes",  objToSubmit );
        } else {
            const id = FirebaseService.updateData("clientes", pageid,  objToSubmit );
        }
        window.location = routes.listar.path;
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submit}>
                    <TextField className="input_text"
                        type="text"
                        defaultValue={''}
                        label="Nome"
                        variant="filled"
                        value={this.state.name}
                        required
                        onChange={this.handleChange('name')} />
                    <TextField className="input_text"
                        type="text"
                        defaultValue={''}
                        label="Cidade"
                        variant="filled"
                        value={this.state.city}
                        required
                        onChange={this.handleChange('city')} />
                    <TextField className="input_text"
                        type="text"
                        defaultValue={''}
                        label="Data"
                        variant="filled"
                        value={this.state.date}
                        required
                        onChange={this.handleChange('date')} />
                    <Button type="submit" variant='contained' color="primary" style={{ marginTop: "20px", display: "inline-block" }} >Adicionar</Button>
                </form>
            </React.Fragment>
        )
    }
}

export default withRouter(Add)