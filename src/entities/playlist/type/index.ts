export interface Genre {
  id: number;
  genreName: string;
}

export interface Video {
  id: string;
  name: string;
  playtime: string | null;
  albumName: string;
  songLink: string;
  thumbNailLink: string;
  genres: string[] | null;
}

export interface Representative {
  listName: string;
  description: string;
  itemCount: number;
  youtubePlaylistId: string;
  youtubePlaylistUrl: string;
  thumbnailUrl: string;
}

export interface SavePlayListPayload {
  videoList: Video[];
  representative: Representative;
}
