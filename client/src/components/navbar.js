import React from 'react';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="/">Home</a></li>
                        <li className="uk-active"><a href="/">Test1</a></li>
                        <li className="uk-active"><a href="/">Test2</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;