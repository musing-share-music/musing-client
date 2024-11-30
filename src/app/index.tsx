// src/app/index.tsx
import { BrowserRouter } from 'react-router-dom';

import QueryClientProvider from './providers/queryClientProvider';
import { AppRouter } from './providers/routerProvider';
// import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
  return (
    // <ThemeProvider>
    <BrowserRouter>
      <QueryClientProvider>
        <AppRouter />
      </QueryClientProvider>
    </BrowserRouter>
    // </ThemeProvider>
  );
};

export default App;
