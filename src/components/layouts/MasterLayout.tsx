/*
 * Master Layout
 */

import { Fragment } from 'react';

import { MainMenu, SideMenu } from '../menu/menu';
// import { Footer } from '../footer/footer';


export const MasterLayout = ( props: any ) => {
   
    return (
        <Fragment>
            <SideMenu>
            { props.children }
            </SideMenu>
            {/* <Footer/> */}
        </Fragment>
    );
}

export const MasterLayout1 = ( props: any ) => {
   
    return (
        <Fragment>
            <MainMenu/>
            <main>
                { props.children }
            </main>
            {/* <Footer/> */}
        </Fragment>
    );
}