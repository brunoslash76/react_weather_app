import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Clock({ color }) {


    const [time, setTime] = useState(handleClock());

    useEffect(() => {
        tickClock();
    }, [])
    
    function handleClock() {
        const dateNow = new Date();
        let hour = dateNow.getHours();
        let min = dateNow.getMinutes();
        const sec = dateNow.getSeconds();
        
        hour = hour < 10 ? `0${hour}` : hour;
        min = min < 10 ? `0${min}` : min;

        return  `${hour}${sec % 2 === 0 ? ':' : ' ' }${min}`
    }

    function tickClock() {
        setInterval(() => {
            setTime(handleClock());
        }, 1000);
    }

	return (
		<Container color={color}>
			{time}
		</Container>
	);
}

Clock.propTypes = {
    color: PropTypes.string,
};

Clock.defaultProps = {
    color: '#000',
};
