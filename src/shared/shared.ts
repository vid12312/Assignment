export const fileUploadURL = `http://localhost:4000`;

export const checkValidity = ( value: any, rules: any ) => {

    let isValid = true;

    if ( !rules.required ) {
        return true;
    }

    if( rules.isEmail ) {
        const pattern = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        isValid = pattern.test(value) && isValid;
    }

    if ( rules.isFilePDF ) {
        isValid = value.type === 'application/pdf' && isValid;
    }

    if ( rules.isFileJPEG ) {
        isValid = value.type === 'image/jpeg' && isValid;
    }

    if ( rules.required ) {
        isValid = value !== '' && isValid;
        // isValid = value.trim() !== '' && isValid;
    }

    return isValid;
}