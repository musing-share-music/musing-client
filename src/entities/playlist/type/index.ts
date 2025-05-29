export interface Genre {
  id: number;
  genreName: string;
}

export interface Video {
  name: string;
  playtime: string;
  albumName: string;
  songLink: string;
  thumbNailLink: string;
  genres: Genre[];
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
