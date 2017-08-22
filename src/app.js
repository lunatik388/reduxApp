"use strict"
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';


// STEP 1 create the store
// const middleware = applyMiddleware(logger);
const store = createStore(reducers);


import BooksList from './components/pages/booksList';

render(
    <Provider store={store}>
         <BooksList />
    </Provider>
   , document.getElementById('app')
)

// store.dispatch(postBooks(
//     [{
//         id: 1,
//         title: 'this is the book title',
//         description: 'this is the book description',
//         price: 33.33
//     },
//     {
//         id: 2,
//         title: 'this is the second book title',
//         description: 'this is the second book  description',
//         price: 50
//     }]
// ))