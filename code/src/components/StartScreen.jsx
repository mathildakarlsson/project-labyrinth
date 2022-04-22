import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import game from '../reducers/game';
import { startGame } from '../reducers/game';

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onUsernameInput = () => {
        dispatch(game.actions.setUsername(inputValue));
        dispatch(startGame());
    }
    
    return (
        <StartContainer>
            <Title>Welcome to Labyrinth Game!</Title>
            <form className='nes-field is-inline'>
                <input
                    className='nes-input is-success'
                    id="inline_field"
                    type='text'
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    placeholder='type your gamertag..'
                    />
            </form>
            <StartButton onClick={onUsernameInput} className='nes-btn is-success'>START</StartButton>
        </StartContainer>
    );
};

const Title = styled.h1 `
    font-weight: 300;
`
const StartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

const StartButton = styled.button`
    margin: 1rem;
`

export default StartScreen;
