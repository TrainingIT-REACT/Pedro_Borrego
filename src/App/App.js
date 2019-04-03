import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import store from './store';

// Componentes que se renderizarán siempre
import TopBarLayout from "./components/topBar"

// Css
import './App.css';

// Componentes que se renderizarán en las distintas rutas

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
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <TopBarLayout />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
