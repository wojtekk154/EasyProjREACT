import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {Provider} from 'react-redux';
import store from './store';
import App from './app';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import cyan from 'material-ui/colors/cyan';

const theme = createMuiTheme({
	palette: {
		primary: cyan,
		secondary: cyan
	}
});
ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<App/>
		</MuiThemeProvider>
	</Provider>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const EasyPro = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <EasyPro/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
