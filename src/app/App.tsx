import { ThemeProvider} from "../shared/config/mui/ThemeProvider";
import { RouterProvider } from "./providers/RouterProvider";

import './styles/App.css';
import {AppRouter} from "./router/AppRouter";

function App() {

  return (
    <ThemeProvider>
        <RouterProvider>
            <AppRouter />
        </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
