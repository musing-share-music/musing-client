import image from 'shared/assets/image/main/image1.png';
import image2 from 'shared/assets/image/main/roundimg.png';

import { MainItem } from './types';

export const MAIN_ITEM: MainItem = {
  noticeDto: {
    id: 1,
    title: '공지사항 입니다.',
    content: '여러분들의 음악 취향을 공유해주세요',
    createdAt: '2025-01-05T11:51:23',
    username: '더미',
  },

  recommendGenres: [
    {
      id: '1',
      musicName: 'Honey',
      artist: 'TRPP',
      thumbNailLink: image,
    },
    {
      id: '2',
      musicName: 'Honey',
      artist: 'TRPP',
      thumbNailLink: image,
    },
    {
      id: '3',
      musicName: 'Honey',
      artist: 'TRPP',
      thumbNailLink: image,
    },
    {
      id: '4',
      musicName: 'Honey',
      artist: 'TRPP',
      thumbNailLink: image,
    },
  ],

  recommendGenreName: '슈게이징',

  LikeMusicList: [
    {
      id: '1',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
    {
      id: '2',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
    {
      id: '3',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
    {
      id: '4',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
    {
      id: '5',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
    {
      id: '6',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
    {
      id: '7',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
    {
      id: '8',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
    {
      id: '7',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
    {
      id: '8',
      title: 'Honey',
      name: 'TRPP',
      img: image,
    },
  ],

  HotMusicList: [
    {
      id: '1',
      title: '그린내',
      name: '실리카겔',
      img: image2,
    },
    {
      id: '2',
      title: '그린내',
      name: '실리카겔',
      img: image2,
    },
    {
      id: '3',
      title: '그린내',
      name: '실리카겔',
      img: image2,
    },
    {
      id: '4',
      title: '그린내',
      name: '실리카겔',
      img: image2,
    },
    {
      id: '5',
      title: '그린내',
      name: '실리카겔',
      img: image2,
    },
    {
      id: '6',
      title: '그린내',
      name: '실리카겔',
      img: image2,
    },
  ],

  recentBoard: [
    {
      id: 125,
      title: 'Awake Insights',
      username: '더미',
      createdAt: '2025-01-05T11:55:01',
      replyCount: 0,
      recommendCount: 0,
      viewCount: 0,
      musicName: 'Awake',
      artist: 'Tycho',
      thumbNailLink: 'https://img.youtube.com/vi/Y9mvrHdWDgU/maxresdefault.jpg',
    },
    {
      id: 124,
      title: 'Vapour Trail Review',
      username: '더미',
      createdAt: '2025-01-05T11:55:01',
      replyCount: 0,
      recommendCount: 0,
      viewCount: 0,
      musicName: 'Vapour Trail',
      artist: 'Ride',
      thumbNailLink: 'https://img.youtube.com/vi/pVhNi5cU8mo/maxresdefault.jpg',
    },
    {
      id: 96,
      title: '이제 나와 Review',
      username: '더미',
      createdAt: '2025-01-05T11:54:06',
      replyCount: 0,
      recommendCount: 0,
      viewCount: 0,
      musicName: '이제 나와',
      artist: '임영웅',
      thumbNailLink: 'https://img.youtube.com/vi/kSzraUekkNE/maxresdefault.jpg',
    },
    {
      id: 92,
      title: 'A Moment Apart Insights',
      username: '더미',
      createdAt: '2025-01-05T11:54:06',
      replyCount: 0,
      recommendCount: 0,
      viewCount: 0,
      musicName: 'A Moment Apart',
      artist: 'ODESZA',
      thumbNailLink: 'https://img.youtube.com/vi/tKmwR2jo0zw/maxresdefault.jpg',
    },
    {
      id: 95,
      title: '사랑의 트위스트 Discussion',
      username: '더미',
      createdAt: '2025-01-05T11:54:06',
      replyCount: 0,
      recommendCount: 0,
      viewCount: 0,
      musicName: '사랑의 트위스트',
      artist: '송대관',
      thumbNailLink: 'https://img.youtube.com/vi/qqpC25z4n8E/maxresdefault.jpg',
    },
  ],

  hotMusicBoard: {
    id: 0,
    title: 'First Love Reflection',
    musicName: 'First Love',
    artist: 'Hikaru Utada',
    thumbNailLink: 'https://img.youtube.com/vi/o1sUaVJUeB0/maxresdefault.jpg',
  },

  RecommendedMusicList: [
    {
      id: '1',
      name: 'hathaw9y',
      img: image,
    },
    {
      id: '2',
      name: 'Midnight jogging c',
      img: image,
    },
    {
      id: '3',
      name: '모스크바서핑클럽',
      img: image,
    },
  ],
};
