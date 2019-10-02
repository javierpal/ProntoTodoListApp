import { ADD_LIST_ITEM, ERASE_ITEM, SET_DONE, ON_NEW_CHANGE, ON_GET_LIST } from '../actions/todo';

import { TodoItem } from '../../models/list';

const initialState = {
    list: [
        {
            title: "hacer que hacer",
            isDone: false
        },
        {
            title: "hacer otra cosa",
            isDone: false
        },
        {
            title: "barrer",
            isDone: false
        }
    ],
    newValue: ""
};

const loginReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_LIST_ITEM:
            return {...state, list: [...state.list, 
                {
                    title: state.newValue,
                    isDone: false
                }
            ]};
        case ERASE_ITEM:
            let newList = state.list.splice(action.id, 0);
            return {...state, list: [...newList]};
        case SET_DONE:
            let check = state.list[action.index].isDone;
            let bol;
            if(check){
                bol = false;
            }else{
                bol = true;
            }
            let list2 = state.list;
            list2[action.index].isDone = bol;
            return {...state, list: list2};
        case ON_NEW_CHANGE:
            return {...state, newValue: action.text}
        case ON_GET_LIST:
            return {...state, list: action.list}
        default:
            return state;
    }
}

export default loginReducer;