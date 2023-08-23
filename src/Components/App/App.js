
import React, { Component } from 'react';
import { DataTable } from '../DataTable/DataTable';
import FirebaseService from '../../Service/firebaseService';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    //FirebaseService.insertData('/clientes', obj)
    FirebaseService.getAllData("clientes", (dataReceived) => this.setState({ data: dataReceived }))
  }
  render() {
    return (
        <React.Fragment>
              <DataTable data={this.state.data}> </DataTable>
        </React.Fragment>
    );
  }
}
export default App;
