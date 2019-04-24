import request from '../utils/request';

enum apiList {
  'getCurrentUserInfo' = 'getCurrentUserInfo',
  'getSubscriptionSynthesize' = 'getSubscriptionSynthesize', // &pageNum=${pageNum}&pageSize=${pageSize}
  'getSubscriptionByCreateAt' = 'getSubscriptionByCreateAt', // &pageNum=${pageNum}&pageSize=${pageSize}
  'getSubscriptionBySubAt' = 'getSubscriptionBySubAt', // &pageNum=${pageNum}&pageSize=${pageSize}
  'getRecommendAlbum' = 'getRecommendAlbum',
  'getListened' = 'getListened',
  'getHasBroughtAlbums' = 'getHasBroughtAlbums', // &pageNum=${pageNum}&pageSize=${pageSize}
  'getLikeTracks' = 'getLikeTracks',
}

export interface AlbumsInfoItem {
  albumStatus: number;
  albumUrl: string;
  anchorNickName: string;
  anchorUid: number;
  anchorUrl: string;
  coverPath: string;
  description: string;
  id: number;
  isFinished: boolean;
  isPaid: boolean;
  isRecordsDesc: true;
  isTop: boolean;
  lastUptrackAt: number;
  lastUptrackAtStr: string;
  playCount: number;
  serialState: number;
  subTitle: null;
  title: string;
  trackCount: number;
}

export interface AlbumsInfoRspData {
  albumsInfo: AlbumsInfoItem[];
  maxCount: number;
  page: number;
  pageSize: number;
  privateSub: boolean;
  totalCount: number;
  uid: number;
}

export interface ListenedItem {
  albumId: number;
  albumName: string;
  albumUrl: string;
  anchorId: number;
  anchorName: string;
  anchorUrl: string;
  createAt: number;
  createAtStr: string;
  trackCover: string;
  trackDuration: '16:49';
  trackId: number;
  trackStatus: number;
  trackTitle: string;
  trackUrl: string;
}

export interface ListenedRspData {
  earlier: ListenedItem[];
  today: ListenedItem[];
  yesterday: ListenedItem[];
  totalCount: number;
}

export type MyApi = { [key in apiList]: () => any };
const myApi: MyApi = {} as MyApi;

Object.keys(apiList).forEach((api) => {
  myApi[api] = async () => {
    return request.get(`/my/${api}`);
  };
});

export default myApi;
