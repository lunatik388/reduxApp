"use strict"
import { createStore } from 'redux';
//STEP 3 define reducers
const reducer = function (state = { books: [] },
    action) {
    switch (action.type) {
        case "POST_BOOK":
            // let books =  state.books.concat(action.payload);
            // return {books};
            return {
                books: [...state.books, ...action.payload]
            }
            break;
        case "DELETE_BOOK":
            // Create a copy of the current array of books
            const currentBookToDelete = [...state.books]
            // Determine at which index in books  array is the book to be deleted
            const indexToDelete =
                currentBookToDelete.findIndex(
                    function (book) {
                        return book.id === action.payload.id;
                    }
                )
            //use slice to remove the book at the  specified index
            return {
                books: [...currentBookToDelete.slice(0,indexToDelete),
                     ...currentBookToDelete.slice(indexToDelete +  1)]
            }
            break;
    }
    return state
}

// STEP 1 create the storec
const store = createStore(reducer);

store.subscribe(function () {
    console.log('current state is: ', store.getState());
    //console.log('current price: ', store.getState()[1].price);
})
// STEP 2 create and dispatch actions
store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 33.33
    },
    {
        id: 2,
        title: 'this is the second book title',
        description: 'this is the second book description',
        price: 50
    }]
})
// DELETE a book
store.dispatch({
    type: "DELETE_BOOK",
    payload: { id: 1 }
})