import React from "react";

const Element = ({id, username, email, password, date}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{date}</td>
        </tr>
    )
}

export default Element;