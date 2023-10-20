import './App.css';
import { AppRoutes } from './exibition-pages/routes'
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { ThemeProvider } from './components/contexs/theme-context';

function App() {
  return (
    <div>
      <ThemeProvider>
        <ThemeTogglerButton/>
        <AppRoutes/>
      </ThemeProvider>
    </div>
  )
}

export default App;
