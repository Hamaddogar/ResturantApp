/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHalls = (state) => {
  return state.get('club');
}
// const makeSelectHalls = (state) => state.get('halls');
// const makeSelectTables = (state) => state.get('home');

const makeSelectHalls = () => createSelector(
  selectHalls,
  (clubState) => {
    // debugger;
    return clubState.get('halls');
  }
);

// const makeSelectTables = () => createSelector(
//   selectHome,
//   (clubState) =>{ 
//     debugger;
//     return  clubState.get('tables');
//   }
// );

export {
  selectHome,
  makeSelectHalls,
};
