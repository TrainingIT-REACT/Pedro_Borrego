import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


// Componentes que se renderizarán siempre
import TopBarLayout from "./components/topBar"

// Css
import './App.css';

// Componentes que se renderizarán en las distintas rutas

const Album = () => <p>Vista de detalle de album</p>;
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <TopBarLayout />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
