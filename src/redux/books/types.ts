export type Books = {
    imageLink: string;
    title: string;
    author: string;
    id: string;
    price: number;
    subtitle: string;
    name: string;
    category: string;
    rating: number;
  };
  
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }
  
  export type SearchBooksParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
  };
  
  export interface BooksSliceState {
    items: Books[];
    status: Status;
  }
  
  
  