import { css } from '@emotion/react';

const IframeStyle = css`
  width: 100%;
  aspect-ratio: 16/9;
`;

export const YoutubeIframe = ({ videoId }: { videoId: string }) => {
  return (
    <>
      {videoId && (
        <iframe
          css={IframeStyle}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </>
  );
};
