import { css } from '@emotion/react';
import styled from '@emotion/styled';

import IconArrow from 'shared/assets/icons/nav-bar/icon-arrow.svg';
import IconShowMoreSvg from 'shared/assets/icons/nav-bar/icon-show-more.svg';

const hoverTransition = css`
  transition: 0.3s ease;
`;

const PlayListEle = styled.div<{ small: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
`;

export const PlayList = Object.assign(PlayListEle);

PlayList.Small = styled(PlayListEle)`
  justify-content: center;
`;

export const PlayListInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const TrackListContainerEle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
`;

export const TrackListContainer = Object.assign(TrackListContainerEle);
TrackListContainer.Small = styled(TrackListContainerEle)`
  align-items: center;
`;

export const Aside = styled.aside``;

export const TrackInfoContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Title = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;

export const ArtistName = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.C1};
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoverWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  overflow: hidden;
`;

export const PlayListCoverWrapper = styled(CoverWrapper)``;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const MoreButton = styled.button`
  width: 32px;
  height: 32px;
  background: url(${IconShowMoreSvg}) no-repeat center;
  background-size: cover;
  border: none;
`;

export const Track = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const NavBarItemListEle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const NavBarItemList = Object.assign(NavBarItemListEle);
NavBarItemList.Small = styled(NavBarItemListEle)`
  gap: 20px;
`;

export const IconBox = styled.div<{ src: string }>`
  width: 44px;
  height: 44px;
  background: url(${({ src }) => src}) no-repeat;
  ${hoverTransition}
`;

export const NavContainer = styled.nav`
  padding: 0 30px;
  padding-bottom: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
`;

const NavBarContainerEle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 320px;
  height: 100svh;
  background: ${({ theme }) => theme.colors[700]};
`;

export const NavBarContainer = Object.assign(NavBarContainerEle);

NavBarContainer.Small = styled(NavBarContainerEle)`
  width: 120px;
`;

export const NavBarItem = styled.li``;

const NavLinkEle = styled.a<{
  iconActive: string;
}>`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 20px;
  border-radius: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 24px;
  font-size: 18px;
  ${({ theme }) => theme.fonts.wantedSans.B6};
  ${hoverTransition}

  &:hover {
    background: ${({ theme }) => theme.colors[500]};
  }

  &:hover .nav-icon-box {
    background-image: url(${(props) => props.iconActive});
  }
`;

export const NavLink = Object.assign(NavLinkEle);
NavLink.Small = styled(NavLinkEle)`
  flex-direction: column;
  padding: 8px 12px;
  font-size: 14px;
  gap: 8px !important;
`;

const FooterEle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 38px 0 30px;
`;
export const Footer = Object.assign(FooterEle);
Footer.Small = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CircleButton = styled.button`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors[500]};
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

export const AddButton = styled(CircleButton)``;

export const FoldButton = styled(CircleButton)`
  background-image: url(${IconArrow});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`;
