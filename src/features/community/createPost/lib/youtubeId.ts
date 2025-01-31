/**
 * url에서 videoId를 리턴합니다.
 * @param url
 */
export const getYoutubeVideoId = (url: string): string | null => {
  const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/;
  const match = regex.exec(url);

  if (match && match[3]) {
    return match[3];
  }

  return null;
};
