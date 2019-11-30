import React, { useState, useEffect } from 'react';
import { MdSearch, MdClose, MdArrowForward } from 'react-icons/md';

import { Container, Input, InputContainer, CloseButton } from './styles';
import { GoButton } from './styles';

export default function CurrentLocation() {
	const [shouldShowInput, setShouldShowInput] = useState(false);
	const [cityName, setCityName] = useState('');
	const [isInputEmpty, setIsInputEmpty] = useState(true);

	useEffect(() => {
		const checkInput = () => {
			if (cityName === '') {
				setIsInputEmpty(true);
			} else {
				setIsInputEmpty(false);
			}
			console.log('is input empty', isInputEmpty);
		};

		checkInput();
	}, [cityName]);

	const handleCityInput = event => {
		setCityName(event.target.value);
	};

	const handleKeyPress = event => (event.key === 'Enter' && handleCityInput());

	const handleSubmitCity = () => {
		// a gente vai fazer uma camada para a API
		console.log(cityName);
	};

	return (
		<Container>
			<div>
				<span>São Paulo, Brasil</span>
			</div>
			<InputContainer>
				<Input
					type='text'
					placeholder='Digite a cidade'
					showInput={shouldShowInput}
					onChange={handleCityInput}
					value={cityName}
					onKeyUp={handleSubmitCity}
				/>

				{shouldShowInput && (
					<>
                        <CloseButton 
                            isInputEmpty={isInputEmpty}
                            onClick={() => setShouldShowInput(false)}
                        >
							<MdClose size={14} />
						</CloseButton>
						<GoButton
							isInputEmpty={isInputEmpty}
							onClick={handleSubmitCity}
						>
							<MdArrowForward size={14} />
						</GoButton>
					</>
				)}
			</InputContainer>
			<div>
				<button onClick={() => setShouldShowInput(true)}>
					<MdSearch size={25} />
				</button>
			</div>
		</Container>
	);
}
