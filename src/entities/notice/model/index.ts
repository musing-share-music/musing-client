import { Pagination } from 'shared/types/pagination';

interface Sort {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
}
export interface Notice extends Pagination<Sort> {
  content: Content[];
}

export interface Content {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  username: string;
  imageUrl: string[];
}
