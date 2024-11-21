// src/app/index.tsx
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/RouterProvider';
// import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
    return (
        // <ThemeProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <AppRouter />
        </BrowserRouter>
        // </ThemeProvider>
    );
};

export default App;