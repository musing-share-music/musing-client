import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary1};
  background: ${({ theme }) => theme.colors.primary1Hover2};

  ${({ theme }) => theme.fonts.wantedSans.H1};
`;

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null); // 상태 선언

  function fetchTest() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: { data: any }) => {
        setData(response.data); // response에 타입 지정
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div>
      <Title>Theme 적용 테스트</Title>
      <h1>메인 홈페이지1</h1>
      안녕하세요🤔
      <button onClick={() => navigate('/community')}>커뮤니티 페이지로 이동</button>
      <br />
      <br />
      <br />

      <h1>서버 호출 Test</h1>
      <button onClick={fetchTest}>서버 호출 테스트</button>
      {data && (
        <div>
          <h2>응답 데이터:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;
