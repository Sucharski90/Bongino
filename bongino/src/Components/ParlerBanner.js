import React, {
    Component
} from 'react';
//import { Link } from 'react-router-dom';


export default class ParlerBanner extends Component {
    render() {
        return ( 
            <div>
            <div className="parler-banner-con">
    <div className="container">
        <div className="parler-banner">
            <div className="parler-banner-wrap">
                <div className="parler-banner__title">
                    <p>Fight tech tyranny. Watch Dan’s Videos on Rumble.</p>
                </div>
                <div className="parler-banner__button ">
                    <a href="https://rumble.com/bongino" className="btn btn-light">
                        <img src={"https://ww3.bongino.com/wp-content/uploads/2022/02/rumbleLogo.png"}></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        )
    }
}