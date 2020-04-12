import React, {Component} from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        let idn = require('moment/locale/id');
        Moment.updateLocale('id', idn);
        return(
            <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
        )
    }
}

export default Date;