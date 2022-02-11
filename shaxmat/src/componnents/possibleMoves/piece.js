import { possibleMovesWhitePawn,possibleMovesBlackPawn } from "./possibleMovesPawn";
import { possibleMovesPieceRook } from "./possibleMovesRook";
import { possibleMovesPieceKnigth } from "./possibleMovesPieceKnigth";
import { possibleMovesPieceBishop } from "./possibleMovesPieceBishop";
import { possibleMovesPieceKing } from "./possibleMovesPieceKing";

const white = ['q', 'k', 'b', 'n', 'r', 'p']
const black = [ 'Q', 'K', 'B', 'N', 'R','P']

export const moveHintChessPiece =(startPiece,start,state)=>{
    
    switch (startPiece){
        case "r":
          return  possibleMovesPieceRook(state,start,white,black)
        case 'n':
           return possibleMovesPieceKnigth(state,start,black)
        case "b":  
            return possibleMovesPieceBishop(state,start,black,white)
        case "q":
            return possibleMovesPieceBishop(state,start,black,white).concat(possibleMovesPieceRook(state,start,white,black))
        case 'k':
            return  possibleMovesPieceKing(state,start,white)    
        case "p":
            return possibleMovesWhitePawn(start,state)      
        case 'R':
            return  possibleMovesPieceRook(state,start,black,white)
        case "N":
            return possibleMovesPieceKnigth(state,start,white)
        case 'B':
            return possibleMovesPieceBishop(state,start,white,black)
        case "Q":
            return possibleMovesPieceBishop(state,start,white,black).concat(possibleMovesPieceRook(state,start,black,white))
        case 'K':
            return []
        case "P":
          return possibleMovesBlackPawn(start,state)
        default: 
          return  [] 
    }

}