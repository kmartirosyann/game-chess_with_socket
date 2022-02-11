import * as actionTypes from '../action/actionsTypes'

const initialState ={
    piece:['r', 'n', 'b','k', 'q','b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'R', 'N', 'B','K', 'Q', 'B', 'N', 'R'],
    isHelp:false,
    whitePiece:true,
    blackPiece:false,
    token:null,
    userId:'',
    firstName:'?',
    lastName:'?'
}

const reduser =(state=initialState,action)=>{
 
const actionReducer  = {
    [actionTypes.GET_FIGYRS]:()=>({
        ...state,
    }),
    [actionTypes.CHANGE_EVENT_FISH]:()=>({
        ...state,
        piece: action.payload,
        whitePiece: action.nextPiece && !state.whitePiece,
        blackPiece: action.nextPiece && !state.blackPiece
    }),
    [actionTypes.HELP_MOVE_PIECE_ON_OR_OFF]:()=>({
        ...state,
        isHelp: !state.isHelp
    }),
    [actionTypes.USER_AUTH_LOGAUT]:()=>({
        ...state,
        token:action.payload,
    }),
    [actionTypes.USER_AUTH_LOGIN]:()=>({
        ...state,
        firstName:action.firstName,
        lastName:action.lastName,
        userId: action.userId
    }),
    [actionTypes.ADD_OR_DELETE_TOKEN]:()=>({
        ...state,
        token:action.token
    })
}
if (action.type === actionTypes[action.type]) {
    return actionReducer[action.type]()
} else {
    return state
}
}

export default reduser