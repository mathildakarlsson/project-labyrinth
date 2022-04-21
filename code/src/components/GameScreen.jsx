import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { continueGame } from 'reducers/game';
import Loader from 'components/Loader';

const GameScreen = () => {
    const dispatch = useDispatch();

    const actions = useSelector(store => store.game.position.actions);
    const setDescription = useSelector(store => store.game.position.description)
    const isLoading = useSelector(store => store.game.isLoading);
    
    console.log(setDescription)
    console.log(actions)
    
    const onContinueGame = (type, direction) => {
        dispatch(continueGame(type, direction))
    }

    return (
        isLoading === false && (
            <GameContainer>
                {setDescription && <StyleMainDescription>{setDescription}</StyleMainDescription>}
                {actions && actions.map((action) => (
                    <>
                        <StyleDescription>{action.description}</StyleDescription>
                        <button 
                            key={action.description}
                            onClick={() => onContinueGame(action.type, action.direction)}
                        >
                            {action.direction}
                        </button>
                    </>
                ))}
            </GameContainer>
        )
    );
};

export default GameScreen;

const GameContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyleMainDescription = styled.h2 `
    font-weight: 200;
`;

const StyleDescription = styled.h4 `
    font-weight: 100;
`;


