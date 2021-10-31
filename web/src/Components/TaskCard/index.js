import React from 'react';
import * as Styled from './styles';

function TaskCard(){
    return(
        <Styled.Container>
            <Styled.TopCard>
                <img src="" alt="tarefa"></img>
                <h3>Tarefa</h3>
            </Styled.TopCard>
            <Styled.BottomCard>
                <strong>15/11/21-</strong>
                <span>10:00</span>
            </Styled.BottomCard>
        </Styled.Container>
        
    )
}

export default TaskCard;