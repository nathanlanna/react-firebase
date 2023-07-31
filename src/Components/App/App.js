import { AppBar, Card, CardContent, Toolbar, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles/index'
import React, { Component } from 'react';
import { DataTable } from '../DataTable/DataTable';
import FirebaseService from '../../Service/firebaseService';

const tema = createTheme({
  palette: {
    primary: red,
  },
});

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    let obj = {
      name: 'Nathan',
      city: 'DF',
      date: '2023'
    }
    //FirebaseService.insertData('/clientes', obj)
    FirebaseService.getAllData("clientes", (dataReceived) => this.setState({ data: dataReceived }))
  }
  render() {
    return (
        <React.Fragment>
          <Card style={{margin:'100px'}}>
            <CardContent >
              <DataTable data={this.state.data}> </DataTable>
            </CardContent>
          </Card>
        </React.Fragment>
    );
  }
}
export default App;
