import React, {
    Component
} from 'react';
//import { Link } from 'react-router-dom';

import NewsletterHero from "./NewsletterHero";
import OnTheAir from "./OnTheAir";
import ParlerBanner from "./ParlerBanner";
import LatestFeatured from "./LatestFeatured";
import LatestPodcasts from "./LatestPodcasts";

export default class Navbar extends Component {
    render() {
        return ( 
            <div>
            <NewsletterHero />
            <OnTheAir />
        </div>
        )
    }
}