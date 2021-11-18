// 
const initialValue = {
    wrongLetters: [],
    matcheds: [],
    createdAt: null,
    totalAttemps: 0,
    attempsMade: 0,
    gameFinished: false,
    success: false,
    totalWords: 0,
    userId: null
};

// actionTypes

const START_GAME = 'START_GAME';
const TRY_TEXT = 'TRY_TEXT';

// reducer
export const AhorcadoReducer = ( state = initialValue, { type, payload } ) => {
    // if( type === START_GAME ){
    //     return payload;
    // } else if ( type === TRY_TEXT ){
    //     return payload;
    // } else {
    //     return state;
    // }
    switch(type){
        case START_GAME: return payload;
        case TRY_TEXT: return payload;
        default: return state
    }
}
// dispatch(StartGameAction())

export const StartGameAction = () => async dispatch => {

    const response = await fetch('https://back-sandbox.herokuapp.com/api/hanged-game/start',{
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTU4M2QzMTU1ZGFhMDAwNDk4M2RlMCIsImlhdCI6MTYzNzE4ODU2OH0.ZO4NdtG2Inb13x-I2LEJLnY-3fsdZ-kFPEa6MQFljm4'
        }
    });

    const json = await response.json();
    console.log(json);
    //pedido al back
    dispatch({
        type: START_GAME,
        payload: json.data
    })

}

export const TryAction = (text) => async dispatch => {

    const response = await fetch('https://back-sandbox.herokuapp.com/api/hanged-game/try',{
        method: 'POST',    
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTU4M2QzMTU1ZGFhMDAwNDk4M2RlMCIsImlhdCI6MTYzNzE4ODU2OH0.ZO4NdtG2Inb13x-I2LEJLnY-3fsdZ-kFPEa6MQFljm4'
        },
        body: JSON.stringify({
            text
        })
    });

    const json = await response.json();

    dispatch({
        type: TRY_TEXT,
        payload: json.data
    })

}


