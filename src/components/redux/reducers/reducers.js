import { combineReducers } from 'redux'
import {ADD_CRYPTO, MODIFY_CRYPTO} from "../actions/actions";

function cryptos(state = [], action) {
    switch (action.type) {
        case ADD_CRYPTO:
            return [
                ...state,
                {
                    currency: action.currency,
                    amount: action.amount
                }
            ]
        // case SELL_CRYPTO:
        //     return [
        //         ... state,
        //     ]
        case MODIFY_CRYPTO:
            return state.map((action, index) => {
                if (index === action.index) {
                    return Object.assign({}, action, {
                        completed: !action.completed
                    })
                }
                return crypto
            })
        default:
            return crypto
    }
}

const cryptoApp = combineReducers({
    cryptos
})

export default cryptoApp
