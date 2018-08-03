import React from 'react';

const Header = (props) => {
    let headerMessage = 'Feedback!';
    if (props.admin) headerMessage = 'Feedback Results';
    return(
        <header className="App-header">
        <h1 className="App-title">{headerMessage}</h1>
      </header>
    )
}

export default Header;