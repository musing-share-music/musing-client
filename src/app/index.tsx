// src/app/index.tsx
import { BrowserRouter } from 'react-router-dom';

import useSSE from 'shared/hooks/useSSE';

import QueryClientProvider from './providers/QueryClientProvider';
import { AppRouter } from './providers/RouterProvider';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
  useSSE('/musing/alarm/create'); // 알람 연결
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
