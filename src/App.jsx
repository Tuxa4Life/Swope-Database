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
                setData(response.data.data)
        }).catch(function (error) {
                // handle error
                console.log(error);
        })
    }, [])


    const elements = data.map(e => {
        return <Element key={e.ID} id={e.ID} username={e.Username} email={e.Email} password={e.Password} date={e.Date}/>
    })

    return (
        <table className="ui striped table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                { elements }
            </tbody>
        </table>
    )
}

export default App;