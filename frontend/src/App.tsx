import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { AuthProvider } from "./components/contexts/AuthProvider"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/default"
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
