
import Routes from "./routes/Router";
import theme from "./constants/theme"
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    

    <ThemeProvider  theme={theme}>
    <Routes />
    </ThemeProvider>
    

  )
  
}

export default App;