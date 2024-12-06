import { Cover, MoreButton, PlayListCoverWrapper, PlayListInfo, Title } from './styled';

export const PlayListItem = {
  Small: ({ src }: { src: string }) => (
    <PlayListInfo>
      <PlayListCoverWrapper>
        <Cover src={src} />
      </PlayListCoverWrapper>
    </PlayListInfo>
  ),
  Large: ({ src }: { src: string }) => (
    <>
      <PlayListInfo>
        <PlayListCoverWrapper>
          <Cover src={src} />
        </PlayListCoverWrapper>
        <Title>플레이리스트1</Title>
      </PlayListInfo>
      <MoreButton />
    </>
  ),
};
