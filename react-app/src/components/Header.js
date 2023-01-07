import Button from './Button'
import React from "react";

const Header = ({ title, onAdd, showAddValue }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAddValue === true ? 'green' : 'black'} text={showAddValue === true ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    );
}

export default Header