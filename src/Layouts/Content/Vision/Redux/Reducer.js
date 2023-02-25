// import { TOGGLE_PLAN_STATUS } from "./Action";


export function togglePlanReducer(state = [], action) {
    switch (action.type) {
        case "vision/togglePlanStatus":

            return [...state, action.payload]
        default:
            return state;
    }

}