import { ErrorBoundary } from 'react-error-boundary';

import { DetailPage } from './ui/';
import { ErrorBoundaryMessage } from './ui/styled';

const Page = () => {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <ErrorBoundaryMessage role="alert">{error.message || '오류가 발생했습니다.'}</ErrorBoundaryMessage>
      )}
    >
      <DetailPage />
    </ErrorBoundary>
  );
};

export default Page;
