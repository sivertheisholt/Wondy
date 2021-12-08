import React from 'react';

class Navbar extends React.Component {
    render() {
        return(
            <header className="uk-width-1-1">
                <div className="uk-container">
                    <nav className="uk-navbar-container uk-margin uk-navbar-transparent uk-divide-small uk-light" uk-navbar="mode: click">
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active"><a href="/">Home</a></li>
                                <li className="uk-active"><a href="/">Dawn</a></li>
                                <li className="uk-active"><a href="/">WondyFrame</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar;