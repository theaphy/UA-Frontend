import { createSelector } from 'reselect';

/**
 * Direct selector to the updateResources state domain
 */
const selectUpdateResourcesDomain = (state) => state.get('updateResources');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UpdateResources
 */

const makeSelectUpdateResources = () => createSelector(
  selectUpdateResourcesDomain,
  (substate) => substate.toJS()
);

const makeSelectListedPlaces = () => createSelector(
	selectUpdateResourcesDomain,
	(substate) => substate.get('listedPlaces')

);



export default makeSelectUpdateResources;

export { 
  selectUpdateResourcesDomain,
  makeSelectUpdateResources,
  makeSelectListedPlaces
};
