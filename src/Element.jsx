import React from "react";
import axios from "axios";

const Element = ({id, username, email, password, date, deleteId}) => {

    const deleteData = () => {
        axios({
            method: 'delete',
            url: `https://v1.nocodeapi.com/tuxa3/google_sheets/bERXdJyFTjGsXOJm?tabId=Sheet1&row_id=${deleteId}`, 
            params: {},
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <tr style={{
            position: 'relative'
        }}>
            <td style={{color: 'purple'}}>{id}</td>
            <td style={{color: 'black'}}>{username}</td>
            <td style={{color: 'blue'}}>{email}</td>
            <td style={{color: 'darkblue'}}>{password}</td>
            <td style={{color: 'green'}}>{date}</td>
            <div style={{
                position: 'absolute',
                top: '7%',
                right: '5px',
                cursor: 'pointer'
            }} className="ui icon button">
                <i onClick={deleteData} className="trash icon"></i>
            </div>
        </tr>
    )
}

export default Element;