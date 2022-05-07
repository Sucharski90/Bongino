import React, {
    Component
} from 'react';
//import { Link } from 'react-router-dom';


import OnTheAir from "./OnTheAir";
import ParlerBanner from "./ParlerBanner";
import LatestFeatured from "./LatestFeatured";

export default class Navbar extends Component {
    render() {
        return ( 
            <div>
            <OnTheAir />
            <ParlerBanner />
        </div>
        )
    }
}