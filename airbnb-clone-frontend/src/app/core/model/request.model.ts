import {HttpParams} from "@angular/common/http";


//phan trang
export interface Pagination {
  page: number;
  size: number;
  sort: string[];
}

//phan trang. offset: vi tri de bat dau lay data trong ds kqua
export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort
  offset: number;
  paged: boolean; //cho biet kqua co dc phan trang hay ko
  unpaged: boolean; //nguoc lai
}

//sap xep kqua
export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}


export interface Page<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  sort: Sort;
  number: number;
  size: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}


export const createPaginationOption = (req: Pagination): HttpParams => {
   let params = new HttpParams();
   params = params.append("page", req.page).append("size", req.size);

   req.sort.forEach(value => {
     params = params.append("sort", value);
   });

   return params;
};
