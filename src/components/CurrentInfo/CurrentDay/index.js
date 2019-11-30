import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR';
import { Container } from './styles';

export default function CurrentDay() {
	const [currentDate, setCurrentDate] = useState(
		new Date().toLocaleDateString()
	);

	useEffect(() => {
		function setDate() {
			const date = format(new Date(), 'E dd/MM/yyyy', {
                locale: pt
            });
			setCurrentDate(date);
		}
		setDate();
	}, [currentDate]);

	return (
		<Container>
			<span>{currentDate}</span>
		</Container>
	);
}
