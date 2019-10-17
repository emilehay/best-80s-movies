import React, { Component } from 'react';
import './order-select.scss';

class OrderSelect extends Component {

    state = {
        options: this.props.items,
    };

    render(){
        return (
            <div className='order-select'>
                {
                    this.state.options.map(option => {
                        return (
                            <button className='order-btn' onClick={this.props.changeOrder.bind(this, option.valueToOrderBy)} type='button'>{option.label}</button>
                        );
                    })
                }
            </div>
        )
    };
}

export default OrderSelect;