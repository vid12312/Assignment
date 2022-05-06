import { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from '../../components/table/table';


interface Props {
    users: {name: string, age: number, gender: string, email: string, contact: string, userImagePath: string, userProfilePath: string}[];
}

class UserDetailsPage extends Component<Props> {
    
    render ( ) {

        let users: any = this.props.users;
        let usersJSX: any;

        if (users) {
            usersJSX = users.map(
                ( item: any, index: number) => {
                    return (
                        <Table
                            name = { item.name }
                            age = { item.age }
                            gender = { item.gender }
                            email = { item.email }
                            contact = { item.contact }
                            image = { item.image }
                            profile = { item.profile }
                            key = { item.name }/>
                    )
                }
            );
        }

        return (
            <div className="ui grid">
                <div className="row">
                    <div className="three wide column">
                        
                    </div>
                    <div className="center aligned ten wide column">
                        <h3>User Details</h3>
                        { usersJSX }
                    </div>
                    <div className="three wide column">
                        
                    </div>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = ( state: any ) => {

    return {
        users: state.userDetailsPage.users
    }
}

export default connect( mapStoreToProps )( UserDetailsPage );