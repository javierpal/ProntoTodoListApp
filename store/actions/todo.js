export const ADD_LIST_ITEM = "ADD_LIST_ITEM";
export const SET_DONE = "SET_DONE";
export const ERASE_ITEM = "ERASE_ITEM";
export const ON_NEW_CHANGE = "ON_NEW_CHANGE";
export const ON_GET_LIST = "ON_GET_LIST";


export function onAddItem(){
    return { type: ADD_LIST_ITEM, text: "" };
}

export function onSetDone(index){
    return { type: SET_DONE, index: index }
}

export function onEraseItem(index){
    return { type: ERASE_ITEM, index: index };
}

export function onNewChange(text){
    return { type: ON_NEW_CHANGE, text: text };
}

export function onGetList(list){
    return { type: ON_GET_LIST, list: list };
}