// src/app/index.tsx
import { BrowserRouter } from 'react-router-dom';

import QueryClientProvider from './providers/QueryClientProvider';
import { AppRouter } from './providers/RouterProvider';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <QueryClientProvider>
          <AppRouter />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
