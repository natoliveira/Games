import React from 'react';
import { ButtonToggle } from 'reactstrap';


const Games = props => {
    return(
        <div>
        <ButtonToggle id="btn2" color="danger">FIFA20</ButtonToggle>{' '}
        <ButtonToggle id="btn3" color="danger">PE20</ButtonToggle>{' '}
        <ButtonToggle id="btn4" color="danger">NBA20</ButtonToggle>{' '}
        <ButtonToggle id="btn5" color="danger">NFL20</ButtonToggle>{' '}
        <ButtonToggle id="btn6" color="danger">Street Figther</ButtonToggle>{' '}
        <br></br>
        <br></br>
        <ButtonToggle id="btn7" color="danger">CS GO</ButtonToggle>{' '}
        <ButtonToggle id="btn8" color="danger">CS 1.6</ButtonToggle>{' '}
        <ButtonToggle id="btn9" color="danger">FREE FIRE</ButtonToggle>{' '}
        <ButtonToggle id="btn10" color="danger">LOL</ButtonToggle>{' '}
        <ButtonToggle id="btn11" color="danger">FORTNITE</ButtonToggle>{' '}
        </div>
    )
}

export default Games;