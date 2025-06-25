import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import IconLogo from 'shared/assets/image/icons/icon-footer-logo.svg?react';
import IconGithub from 'shared/assets/image/icons/icon-github.svg?react';
import { ROUTES } from 'shared/config/routes';

const FooterBlock = styled.footer`
  background-color: ${({ theme }) => theme.colors[800]};
  width: 100%;
  height: 160px;
  padding: 56px 260px 64px 380px;
  display: flex;
  justify-content: space-between;
`;

const LogoContents = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoTitle = styled.p`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.H1};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
  cursor: pointer;
`;

const InfoContents = styled.p`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterBlock>
      <LogoContents>
        <IconLogo></IconLogo>
        <LogoTitle>Musing</LogoTitle>
      </LogoContents>

      <InfoContents>
        <InfoText onClick={async () => await navigate(`${ROUTES.NOTICE + '/1'}`)}>사용자 이용약관</InfoText>
        <InfoText onClick={async () => await navigate(`${ROUTES.NOTICE + '/2'}`)}>개인정보처리방침</InfoText>
        <InfoText onClick={async () => await navigate(`${ROUTES.NOTICE + '/3'}`)}>개발자 문의</InfoText>
        <IconGithub
          style={{ cursor: 'pointer' }}
          onClick={() => window.open('https://github.com/JTH-00/ReadMe_Preset', '_blank')}
        />
      </InfoContents>
    </FooterBlock>
  );
};
