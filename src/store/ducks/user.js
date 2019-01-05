
import { createActions, createReducer } from 'reduxsauce';


export const { Types, Creators } = createActions({
    userRequest: null,
    userRequestSuccess: ['user'],
    userRequestFailure: ['error']
});


const INITIAL_STATE = {
    data: {
        userName: 'Anderson Costa',
        userAvatar: 'https://avatars0.githubusercontent.com/u/25548201'
    },
    loading: false,
    error: null,
}


const userRequest = (state = INITIAL_STATE, action) => { 
    return({ ...state, loading: true, error: null }) 
};

const userRequestSuccess = (state = INITIAL_STATE, action) => { 
    return({ data: action.user, loading: false, error: null }) 
};

const userRequestFailure = (state = INITIAL_STATE, action) => { 
    return({ ...state, loading: false, error: action.error }) 
};


export default createReducer(INITIAL_STATE, {
    [Types.USER_REQUEST]: userRequest,
    [Types.USER_REQUEST_SUCCESS]: userRequestSuccess,
    [Types.USER_REQUEST_FAILURE]: userRequestFailure,
})