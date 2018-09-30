import { UPLOADING, UPLOAD_COMPLETE, UPLOAD_ERROR } from '../constants';

let initialState = {
    uploadStatus: ''
}

function newListingReducer(state = initialState, action)
{
    switch(action.type)
    {
        case UPLOADING:
            return {...state, uploadStatus: UPLOADING};
        
        case UPLOAD_COMPLETE:
            return {...state, uploadStatus: UPLOAD_COMPLETE};
        
        case UPLOAD_ERROR:
            return {...state, uploadStatus: UPLOAD_ERROR};
        
        default:
            return state;
    }
}

export default newListingReducer;