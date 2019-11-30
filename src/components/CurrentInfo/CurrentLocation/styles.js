import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        span {
            font-size: 18px;
        }
    }
`;

export const InputContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
`;

export const Input = styled.input`
    display: ${props => props.showInput ? 'block' : 'none'};
    height: 28px;
    width: 100%;
    padding: 0 10px;
    border-radius: 2px;
    border: none;
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    bottom: 5px;
    display: ${ props=> props.isInputEmpty ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`;

export const GoButton = styled.button`
    position: absolute;
    right: 10px;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    bottom: 5px;
    display: ${ props=> !props.isInputEmpty ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`;
