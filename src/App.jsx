import React, { useState, useEffect } from "react";
import Element from "./Element";
import axios from "axios";

const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://v1.nocodeapi.com/tuxa2/google_sheets/tLvryjTOYykKsQkY?tabId=Sheet1', 
            params: {},
        }).then(function (response) {
            console.log(response)
                console.log(response.data.data)
                setData(response.data.data)
        }).catch(function (error) {
                // handle error
                console.log(error);
        })
    }, [])


    const elements = data.map(e => {
        return <Element key={e.ID} deleteId={e.row_id} id={e.ID} username={e.Username} email={e.Email} password={e.Password} date={e.Date}/>
    })

    return (
        <table className="ui striped table">
            <thead>
                <tr>
                    <th style={{color: 'purple'}}>ID</th>
                    <th style={{color: 'black'}}h>Username</th>
                    <th style={{color: 'blue'}}>Email</th>
                    <th style={{color: 'darkblue'}}>Password</th>
                    <th style={{color: 'green'}}>Date</th>
                </tr>
            </thead>
            <tbody>
                { elements }
                <Element id={123123123} username={'username123'} email={'email12@gmail.com'} password={'password123'} date={'10/11/22'}/>
            </tbody>
        </table>
    )
}

export default App;