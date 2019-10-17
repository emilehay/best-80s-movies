import React from 'react';
import { connect } from 'react-redux';
import './order-select.scss';
import PropTypes from 'prop-types'
import { setSortOrder } from '../../actions/appActions';

const OrderSelect = ({ setSortOrder, options }) => {

    return (
        <div className='order-select'>
            {
                options.map((option, index) => {
                    return (
                        <button key={index} className='order-btn' onClick={setSortOrder.bind(this, option.valueToOrderBy)} type='button'>{option.label}</button>
                    );
                })
            }
        </div>
    )
}

OrderSelect.propTypes = {
    setSortOrder: PropTypes.func.isRequired,
}

export default connect(null, { setSortOrder })(OrderSelect);