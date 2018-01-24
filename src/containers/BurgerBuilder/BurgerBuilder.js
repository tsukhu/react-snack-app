import React, { Component } from 'react';
import Aux from '../../hoc/AuxComponent';
class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                    <div> Burger </div>
                    <div> Build Controls </div>
                </Aux>
        );
    }
}

export default BurgerBuilder;