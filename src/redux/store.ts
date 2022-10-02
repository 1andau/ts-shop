import { configureStore } from '@reduxjs/toolkit'; //добаялвяет любое ПО редакса,
// предоставление упрощенных параметров, ипользование Redux DevTools 
import cart from './cart/slice'; 
import filter from './filters/slice';
import books from './books/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore ({
reducer:{
    cart,
    books,
    filter,
},
}); 

//создаем тип RootState, которому говорим 
//верни все, что есть в store в типизированном состоянии 
export type RootState = ReturnType<typeof store.getState>;

//новый тип, в котором собсна лежит весь store(но к которому подключен редакс диспатч)
type AppDispatch = typeof store.dispatch;
//тут говорим, верни обновленный редаксовский store
export const useAppDispatch = () => useDispatch<AppDispatch>();
