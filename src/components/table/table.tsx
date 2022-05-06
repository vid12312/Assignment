// import { Link } from 'react-router-dom';
import { fileUploadURL } from '../../shared/shared';


export const Table = ( props: any ) => {

   return (
        <div className="ui container">
            <table className="ui table">
                <thead>
                    <tr>
                        <th colSpan = { 2 }>{ props.name }</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name : </td>
                        <td><b>{ props.name }</b></td>
                    </tr>
                    <tr>
                        <td>Age : </td>
                        <td><b>{ props.age }</b></td>
                    </tr>
                    <tr>
                        <td>Gender: </td>
                        <td><b>{ props.gender }</b></td>
                    </tr>
                    <tr>
                        <td>Email :</td>
                        <td><b>{ props.email }</b></td>
                    </tr>
                    <tr>
                        <td>Contact :</td>
                        <td><b>{ props.contact }</b></td>
                    </tr>
                    <tr>
                        <td>Image :</td>
                        <td><img src={ fileUploadURL + `/assets/` + props.image } alt={props.image} style={{width:'100px',height:'100px'}}/></td>
                    </tr>
                    <tr>
                        <td>Profile :</td>
                        <td><a href={ fileUploadURL + `/assets/` + props.profile } target="_blank" rel="noopener noreferrer">{props.profile}</a></td>
                        {/* <td><Link to = { `/assets/` + props.profile } className = "section item">{props.profile}</Link></td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}