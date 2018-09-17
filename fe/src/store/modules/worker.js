import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// action types
const CROP_INFO = 'worker/CROP_INFO';
const CROP_TYPE = 'worker/CROP_TYPE';
const CROP_ID = 'worker/CROP_ID';

// action creator
export const cropInfo = createAction(CROP_INFO);
export const cropType = createAction(CROP_TYPE);
export const cropId = createAction(CROP_ID);

// initial state
const initialState = Map({
    crop: Map({
        info: Map({}),
        type: 'male',
        id: null
    })
});

// reducer
export default handleActions({
    [CROP_INFO]: (state, action) => {
        return state.setIn(['crop', 'info'], action.payload);
    },
    [CROP_TYPE]: (state, action) => {
        return state.setIn(['crop', 'type'], action.payload);
    },
    [CROP_ID]: (state, action) => {
        return state.setIn(['crop', 'id'], action.payload);
    }
}, initialState);