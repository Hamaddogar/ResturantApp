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
    halls: [
        {
            name: 'Hall 1',
            tables: [
                { name: 'T1' },
                { name: 'T2' },
                { name: 'T3' },
                { name: 'T4' },
                { name: 'T5' },
                { name: 'T6' },
                { name: 'T7' },
                { name: 'T8' },
                { name: 'T9' },
                { name: 'T10' },
                { name: 'T11' },
                { name: 'T12' },
                { name: 'T13' },
                { name: 'T14' },
                { name: 'T15' },
                { name: 'T16' },
                { name: 'T17' },
                { name: 'T18' },
                { name: 'T19' },
                { name: 'T20' },
            ]
        },
        {
            name: 'G1',
            tables: [
                { name: 'T21' },
                { name: 'T22' },
                { name: 'T23' },
                { name: 'T24' },
                { name: 'T25' },
                { name: 'T26' },
                { name: 'T27' },
                { name: 'T28' },
                { name: 'T29' },
                { name: 'T30' },
                { name: 'T31' },
                { name: 'T32' },
                { name: 'T33' },
                { name: 'T34' }
            ]
        },
        {
            name: 'G2',
            tables: [
                { name: 'T35' },
                { name: 'T36' },
                { name: 'T37' },
                { name: 'T38' },
                { name: 'T39' },
                { name: 'T40' }
            ]
        },
        {
            name: 'EXT',
            tables: [
                { name: 'T41' },
                { name: 'T42' },
                { name: 'T43' },
                { name: 'T44' },
                { name: 'T45' },
                { name: 'T46' },
                { name: 'T47' },
                { name: 'T48' },
                { name: 'T49' },
                { name: 'T50' }
            ]
        },
        {
            name: 'HALL2',
            tables: [
                { name: 'T51' },
                { name: 'T52' },
                { name: 'T53' },
                { name: 'T54' },
                { name: 'T55' },
                { name: 'T56' },
                { name: 'T57' },
                { name: 'T58' },
                { name: 'T59' },
                { name: 'T60' },
                { name: 'T61' },
                { name: 'T62' },
                { name: 'T63' },
                { name: 'T64' },
                { name: 'T65' },
                { name: 'T66' },
                { name: 'T67' },
                { name: 'T68' },
                { name: 'T69' },
                { name: 'T70' }
            ]
        },
        {
            name: 'Hall 3',
            tables: [
                { name: 'T71' },
                { name: 'T72' },
                { name: 'T73' },
                { name: 'T74' },
                { name: 'T75' },
                { name: 'T76' },
                { name: 'T77' },
                { name: 'T78' },
                { name: 'T79' },
                { name: 'T80' }
            ]
        },
    ]

    //tables: false,  
    //   error: false,
    //   currentUser: false,
    //   userData: {
    //     repositories: false,
    //   },
});

function clubReducer(state = initialState, action) {

    switch (action.type) {

    }
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

export default clubReducer;
