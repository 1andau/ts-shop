import { createAsyncThunk } from '@reduxjs/toolkit';
import { Books } from './types';
import { SearchBooksParams } from './types';
import identity from 'lodash/identity';
import pickBy from 'lodash/pickBy';
import axios from 'axios';

export const fetchBooks = createAsyncThunk<Books[], SearchBooksParams>(
    'books/fetchBooksStatus',
    async (params) => {
      const { sortBy, order, category, search } = params;
      // console.log(params, 4444);
      
      const { data } = await axios.get<Books[]>(`https://624c63b1d71863d7a80997bc.mockapi.io/Books`, {
        params: pickBy(    //используется для возврата копии объекта, состоящего из предиката свойств объекта, который возвращает истину. 
          {
            category,
            sortBy,
            order,
            search,
          },
          identity, //функция, вызываемая для каждого свойства.
        ),
      });
  
      return data;
    },
  );
