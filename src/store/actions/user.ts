import axios from 'axios';
import { fileUploadURL } from '../../shared/shared';


export const newUser = ( user: any ) => {
    return {
        type: `ADD_USER`,
        user: user
    };
}

export const filePostFailed = ( errorData: any ) => {
    return {
        type: `POST_FILE_FAILED`,
        error: errorData   
    }
}

export const addUserAction = ( user: any ) => {

    return ( dispatch: any ) => {
    
        const api: any = `${fileUploadURL + `/upload`}`;

        const formData = new FormData();
        formData.append( 
            "myImage", 
            user.image, 
            user.image.name
        );
        formData.append( 
            "myProfile", 
            user.profile, 
            user.profile.name
        ); 

        // POST to API endpoint
        axios.post( api, formData )
            .then( response => {

                dispatch( newUser({...user, image: user.image.name, profile: user.profile.name}) );
            })
            .catch( (error: any) => {

                const errorData = {...error.response.data};
                const err = {
                    message: errorData.message,
                    code: errorData.code
                }
                dispatch( filePostFailed( err ) );
            });
    }
}