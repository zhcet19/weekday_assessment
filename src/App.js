import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Dashboard/>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
