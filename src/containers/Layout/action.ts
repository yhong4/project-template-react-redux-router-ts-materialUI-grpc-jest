import { Action } from 'redux';

export enum AppActionType {
    OPEN_DRAWER,
    CLOSE_DRAWER
}

export interface IAppAction extends Action<AppActionType>{
    type:AppActionType;
}

export interface IAppActionProps {
    openDrawer:()=> IAppAction;
    closeDrawer:()=>IAppAction;
}

export const openDrawer = ():IAppAction => {
    console.log("open")
    return {
        type: AppActionType.OPEN_DRAWER
    };
};

export const closeDrawer = ():IAppAction => {
    console.log("close")
    return {
        type: AppActionType.CLOSE_DRAWER
    }
}