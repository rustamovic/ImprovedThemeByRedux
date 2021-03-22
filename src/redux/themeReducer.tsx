import {ActionType} from './themeActions';
import {dark} from '../themes';

// interface Color {
//     backgroundColor:string,
//     textColor:string,
//     primary:string
// }

const initialState = {
    theme:dark
}
interface Action{
    type: ActionType.APPLY_THEME,
    payload:string
}
export const themeReducer = (state:any = initialState, action: Action)=>{
    switch(action.type){
        case ActionType.APPLY_THEME:
            return Object.assign({}, {theme: action.payload});
        default:
            return state;
    }
}
export type RootState = ReturnType<typeof themeReducer>;