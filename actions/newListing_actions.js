import { UPLOADING, UPLOAD_COMPLETE, UPLOAD_ERROR } from '../constants';

let apiHelper;

export function newListingUpload(data) {
    return function (dispatch) {
        dispatch(newListingUploading())

        return apiHelper.newListingUpload(data)
        .then(results => 
            dispatch(newListingUploaded()), 
            err => 
            dispatch(newListingUploadError())
        );
    }
}

export function newListingUploading() {
    return {
        type: UPLOADING,
    }
}

export function newListingUploaded(){
    return {
        type: UPLOAD_COMPLETE,
    }
}

export function newListingUploadError(){
    return {
        type: UPLOAD_ERROR
    }
}