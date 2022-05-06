import React, { Component } from 'react';
import { connect } from 'react-redux';
import { produce } from 'immer';
import { Link } from 'react-router-dom';
import { Form, submitLoadingClass } from '../../components/form/form';
import { addUserAction } from '../../store/actions/user';
import { checkValidity } from '../../shared/shared';


interface Props {
    onUserAddition: any;
}

class HomePage extends Component<Props> {
   
    submitButtonRef: React.RefObject<HTMLButtonElement>;

    constructor( props: any ) {
        super( props );
        this.submitButtonRef = React.createRef<HTMLButtonElement>( );
    }

    submitted: boolean  = false;

    state = {
        userForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Name',
                    placeholder: 'Name',
                    warning: 'Enter name.',
                    help: ''
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            age: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    label: 'Age',
                    placeholder: '',
                    warning: 'Enter Age.',
                    help: ''
                },
                value:'' ,
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            gender: {
                elementType: 'select',
                elementConfig: {
                    type: 'select',
                    options: [{value: 'male', displayValue: 'Male'}, {value: 'female', displayValue: 'Female'}],
                    label: 'Gender',
                    placeholder: '',
                    warning: '',
                    help: ''
                },
                value: 'male',
                validation: {
                    required: false
                },
                valid: true,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    label: 'Email',
                    placeholder: '',
                    warning: 'Enter valid email.',
                    help: ''
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            contact: {
                elementType: 'textarea',
                elementConfig: {
                    type: '',
                    label: 'Contact',
                    placeholder: '',
                    warning: 'Enter contact details.',
                    help: ''
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            image: {
                elementType: 'input',
                elementConfig: {
                    type: 'file',
                    label: 'Upload Image',
                    placeholder: '',
                    warning: 'Upload your picture in jpeg.',
                    help: ''
                },
                value: '',
                validation: {
                    required: true,
                    isFileJPEG: true
                },
                valid: false,
                touched: false
            },
            profile: {
                elementType: 'input',
                elementConfig: {
                    type: 'file',
                    label: 'Upload Profile',
                    placeholder: '',
                    warning: 'Upload your profile in pdf.',
                    help: ''
                },
                value: '',
                validation: {
                    required: true,
                    isFilePDF: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    };

    inputChangeHandler = ( event: any, controlName: string ) => {

        let updatedForm: any = null;
       
        updatedForm = produce(this.state.userForm, (formControl: any) => {
            if (event.target.type === `file`) {
                formControl[ controlName ].value = event.target.files[0];
                formControl[ controlName ].valid = checkValidity( event.target.files[0], formControl[controlName].validation );
                formControl[ controlName ].touched = true;
            } else {
                formControl[ controlName ].value = event.target.value;
                formControl[ controlName ].valid = checkValidity( event.target.value, formControl[controlName].validation );
                formControl[ controlName ].touched = true;
            }
        });

        this.submitted = false;

        // check if all elmements are valid
        let formIsValid = true;
        
        for ( let formControl in updatedForm ) {
            formIsValid = updatedForm[formControl].valid && formIsValid;
        }
        this.setState( {userForm: updatedForm, formIsValid: formIsValid} );
    }

    onKeyPress = (event: any) => {
        
        // disable EnterKey in form
        if ( (event.which === 13 && (!this.state.formIsValid)) ) {
            event.preventDefault();
        }
    }

    submitHandler = ( event: any ) => {

        event.preventDefault( );

        // disable submit button
        event.target.className = submitLoadingClass;

        this.props.onUserAddition( 
            this.state.userForm.name.value,
            Number(this.state.userForm.age.value),
            this.state.userForm.gender.value,
            this.state.userForm.email.value,
            this.state.userForm.contact.value,
            this.state.userForm.image.value,
            this.state.userForm.profile.value
        );
        this.submitted = true;
    }

    render ( ) {
        return (
            <div className="ui grid">
                <div className="row">
                    <div className="two wide column"></div>
                    <div className="center aligned twelve wide column">
                        <h3>User Form</h3>
                        <Form 
                            formConfig={this.state.userForm }
                            submitRef = { this.submitButtonRef }
                            onSubmit={this.submitHandler}
                            onChange={this.inputChangeHandler}
                            formIsValid={this.state.formIsValid}
                            // errorMessage={(this.props.error)? this.props.error.pretty : null}
                            onKeyPress={this.onKeyPress}/>
                    </div>
                    <div className="two wide column"></div>
                </div>
                <div className="row">
                    <div className="two wide column"></div>
                    <div className="center aligned twelve wide column">
                        <Link to = {'/user'} className="item">View User Details</Link>
                    </div>
                    <div className="two wide column"></div>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = ( state: any ) => {
    return {
        
    };
};

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        onUserAddition:  ( name: string, age: number, gender: string, email: string, contact: string, image: any, profile: any ) => dispatch( addUserAction({name: name, age: age, gender: gender, email: email, contact: contact, image: image, profile: profile}) )
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(HomePage);