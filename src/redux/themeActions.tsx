export enum ActionType {
    APPLY_THEME = "APPLY_THEME"
}

export const applyTheme =(theme:string)=>{
    return{
        type:ActionType.APPLY_THEME,
        payload:theme
    }
}