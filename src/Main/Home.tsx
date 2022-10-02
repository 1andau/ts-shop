import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import {Categories, Sort, Footer} from '../components';
import {Books} from './Books';
import {setCategoryId } from '../redux/filters/slice';
import { selectFilters } from '../redux/filters/selectors';
import { fetchBooks } from '../redux/books/AsyncActions';
import { selectBooksData } from '../redux/books/selectors';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  // const navigate = useNavigate();

  const { categoryId, sort, searchValue } = useSelector(selectFilters);
  const { items } = useSelector(selectBooksData);
  // const isMounted = useRef(false);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const getBooks = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;
    dispatch(
      fetchBooks({
        sortBy,
        category,
        order,
        search,
      }),
    );
    window.scrollTo(0, 0);
  };
  // React.useEffect(() => {
    // if (isMounted.current) {
    //   const params = {
    //     categoryId: categoryId > 0 ? categoryId : null,
    //     sortProperty: sort.sortProperty,
    //   };

    //   const queryString = qs.stringify(params, { skipNulls: true });

    //   navigate(`/?${queryString}`);
    // }

    // if (!window.location.search) {
    //   console.log(111);
    //   fetchBooks();
    // }
  // }, [categoryId, sort.sortProperty, searchValue]);

  React.useEffect(() => {
    getBooks();
  }, [categoryId, sort.sortProperty, searchValue]);

  //указываем что все будет происходить при первом рендере
  //если тут есть что-то, то мы будем это парсить из параметров которые есть, и превращать их в объект
  //далее с помощью qs мы парсим window.location.search
  //substring -- пишем для того, чтобы в ссылке не было вопросительного знака, который может все поломать

  //если запроса серч нету, то мы делаем фетч запрос.

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     const sort = sortList.find((obj:any) => obj.sortProperty === params.sortProperty);
  //     if (sort) {
  //       params.sort = sort;
  //     }
  //     dispatch(setFilters(params));
  //   }
  //   isMounted.current = true;
  // }, []);


  return (
    <div className="main_block">
      <div className="headdd">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value = {sort} />
      </div>

      <h1 className="main_title">books shop</h1>
      <div className="container">
        <div className="blogList-wrap">
          {items.map((obj:any) => (
            <Books key={obj.id} {...obj} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
