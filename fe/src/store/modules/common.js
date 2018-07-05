import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// action types
const USER_MENU_MODAL = 'common/USER_MENU_MODAL';

// action creator
export const userMenuModal = createAction(USER_MENU_MODAL);

// initial state
const initialState = Map({
    modal: Map({
        visible: null
    })
});

// reducer
export default handleActions({
    [USER_MENU_MODAL]: (state, action) => {
        const visible = state.getIn(['modal', 'visible']);
        if(visible) {
            return state.setIn(['modal', 'visible'], false);
        }
        return initialState.setIn(['modal', 'visible'], true)
    }
}, initialState);