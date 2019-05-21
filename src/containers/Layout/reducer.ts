import { AppActionType, IAppAction } from './action';

export interface IAppState {
    drawerOpen:boolean;
}

export const initalState:IAppState = {
    drawerOpen: false
}

export const AppStateReducer = ( state = initalState, action: IAppAction ) => {
    switch(action.type) {
        case AppActionType.OPEN_DRAWER:
            return { ...state, drawerOpen:true}
        case AppActionType.CLOSE_DRAWER:
            return { ...state, drawerOpen:false}
        default:
            return state;
    }
}