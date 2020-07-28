/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectRoot = (state) => {
  return state.get('tableOrder');
}

const selectMenu = () => createSelector(
  selectRoot,
  (clubState) => {    
    return clubState;
  }
);


// const makeSelectHalls = () => createSelector(
//   selectDishes,
//   (orderState) => {
//     // debugger;
//     return orderState.get('halls');
//   }
// );

// const makeSelectTables = () => createSelector(
//   selectHome,
//   (clubState) =>{ 
//     debugger;
//     return  clubState.get('tables');
//   }
// );

export {
  selectMenu
};
