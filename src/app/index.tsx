// src/app/index.tsx
import { BrowserRouter } from 'react-router-dom';

import useSSE from 'shared/hooks/useConnectAlarm';

import QueryClientProvider from './providers/QueryClientProvider';
import { AppRouter } from './providers/RouterProvider';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
  useSSE(); // 알람 연결
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
