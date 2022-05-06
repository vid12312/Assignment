/*
 * Main Menu
 */

import { Link } from 'react-router-dom';


export const MainMenu = ( props: any ) => {

    return (
        <div className="ui blue three item inverted menu">
        {/* <div className = "ui stackable inverted menu"> */}
            <div className = "ui container">
                <Link to = { '/' } className = "section item">Home</Link>
                <Link to = { '/user' } className = "section item">User Details</Link>
            </div>
        </div>
    );
}

export const SideMenu = ( props: any ) => {
    return (
        <div className="ui grid">
            <div className="four wide column">
                <div className="ui vertical fluid tabular menu">
                    <Link to = { '/' } className = "active item">Home</Link>
                    <Link to = { '/user' } className = "item">User Details</Link>
                </div>
            </div>
            <div className="twelve wide stretched column">
                <div className="ui">
                    { props.children }
                </div>
            </div>
        </div>
    );
}