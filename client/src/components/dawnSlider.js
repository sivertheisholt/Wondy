import React from 'react';

class DawnSlider extends React.Component {
    render() {
        return(
            <div className="uk-visible-toggle uk-dark" uk-slider='finite: false' tabIndex='-1' >
                <div className="uk-position-relative">
                    <div className="uk-slider-container">
                        <ul className="uk-slider-items uk-grid uk-grid-match uk-child-width-1-3@s ">
                            <li>
                                <img src="" title="source: imgur.com" alt=""/>
                            </li>
                            <li>
                                <img src="" title="source: imgur.com" alt=""/>
                            </li>
                            <li>
                                <img src="" title="source: imgur.com" alt=""/>
                            </li>
                            <li>
                                <img src="" title="source: imgur.com" alt=""/>
                            </li>
                            <li>
                                <img src="" title="source: imgur.com" alt=""/>
                            </li>
                            <li>
                                <img src="" title="source: imgur.com" alt=""/>
                            </li>
                        </ul>
                    </div>
                    <a className="uk-position-center-left-out" href="#" data-uk-slidenav-previous='' data-uk-slider-item="previous"></a>
                    <a className="uk-position-center-right-out" href="#" data-uk-slidenav-next='' data-uk-slider-item="next"></a>
                </div>
            </div>
        )
    }
}

export default DawnSlider;