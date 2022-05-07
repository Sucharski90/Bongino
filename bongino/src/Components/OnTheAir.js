import React, {
    Component
} from 'react';
//import { Link } from 'react-router-dom';


export default class OnTheAir extends Component {
    render() {
        return ( 
            <div>
            <div className="bg-grey">
    <div className="container padding-sm-30t padding-sm-30b padding-md-40t padding-md-40b section-air d-flex justify-content-center">
        <div className="d-flex btn-container">
            <button className="btn btn-light">
                <i className="icon-iconfinder_play"></i>Listen: Podcast</button>
            <button className="btn btn-light">
                <i className="icon-iconfinder_radio"></i>Listen: Radio</button>
            <button className="btn btn-light">
                <i className="icon-iconfinder_tv"></i>Watch: TV</button>
            <h2 className="section-title title-big">On The Air</h2>
        </div>
    </div>
</div>
        </div>
        )
    }
}