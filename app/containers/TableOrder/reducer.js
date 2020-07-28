/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
    //   LOAD_REPOS_SUCCESS,
    //   LOAD_REPOS,
    //   LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    menu: [
        {
            category: 'Category 1',
            dishes: [
                { name: 'dish 1', price: 100 },
                { name: 'dish 2', price: 120 },
                { name: 'dish 3', price: 110 },
                { name: 'dish 4', price: 130 },
            ]
        },
        {
            category: 'Category 2',
            dishes: [
                { name: 'dish 5', price: 90 },
                { name: 'dish 6', price: 170 },
                { name: 'dish 7', price: 330 },
                { name: 'dish 8', price: 130 },
            ]
        }
    ]

    //tables: false,  
    //   error: false,
    //   currentUser: false,
    //   userData: {
    //     repositories: false,
    //   },
});

function orderReducer(state = initialState, action) {


    switch (action.type) {

    }
    return state;
    console.log(state);
    // debugger;

    //   switch (action.type) {
    //     case LOAD_REPOS:
    //       return state
    //         .set('loading', true)
    //         .set('error', false)
    //         .setIn(['userData', 'repositories'], false);
    //     case LOAD_REPOS_SUCCESS:
    //       return state
    //         .setIn(['userData', 'repositories'], action.repos)
    //         .set('loading', false)
    //         .set('currentUser', action.username);
    //     case LOAD_REPOS_ERROR:
    //       return state
    //         .set('error', action.error)
    //         .set('loading', false);
    //     default:
    //       return state;
    //   }

    return state;

}

export default orderReducer;
