import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { AhorcadoReducer } from './ahorcadoReducer';


const reducer = combineReducers({
    // user: UserReducer
    ahorcado: AhorcadoReducer
});
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){

    const store = createStore( reducer, composeEnchancers( applyMiddleware( thunk )));
    return store;
}