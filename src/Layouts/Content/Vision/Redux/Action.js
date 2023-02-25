export const TOGGLE_PLAN_STATUS = "vision/togglePlanStatus";


export function togglePlanAction(vision_id,plan_id) {
    return ({
        "type": TOGGLE_PLAN_STATUS,
        "payload": {
            vision_id,
            plan_id
        }
    })
}