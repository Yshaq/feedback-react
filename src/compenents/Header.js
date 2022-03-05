import React from 'react';
import PropTypes from 'prop-types'

function Header({text}) {

    const headerStyle = {
        backgroundColor: "black"
    }

    return <header style={headerStyle}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>;
}

Header.defaultProps = {
    text: "HELLO DeFAULT"
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header;
