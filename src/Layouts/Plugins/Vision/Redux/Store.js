import collect from 'collect.js';
import { legacy_createStore } from 'redux';
// import { togglePlanReducer } from './Reducer';

export function togglePlanReducer(state = [], action) {
    switch (action.type) {
        case "vision/togglePlanStatus":
            let oldVisions = collect(state).filter(vision => {
                return vision.id !== action.payload.id
            })
            // if (state.length !== 0 && oldIds.includes(action.payload.id)) {
            //     state = state.filter((item) => {
            //         return item.plan.id !== action.payload.plan.id
            //     })
            // }
            // console.log([...state, action.payload]);
            return [...oldVisions, action.payload]
        default:
            return state;
    }

}
export const visionPlanStore = legacy_createStore(togglePlanReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());