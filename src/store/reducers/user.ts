// STATE (initial)
const initialState = {
    users: []
}

// REDUCER
const usersReducer = ( state: any = initialState , action: any ) => {

    switch( action.type ) {
        case 'ADD_USER':
            const newUser = {
                name: action.user.name,
                age: action.user.age,
                gender: action.user.gender,
                email: action.user.email,
                contact: action.user.contact,
                image: action.user.image,
                profile: action.user.profile,
            }
            return {...state, ...{users: state.users.concat( newUser )} };
        default:
            return state;
    }
}

export default usersReducer;