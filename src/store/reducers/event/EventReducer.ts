import { IEventState, EventAction, EventActionEnum } from "./types";

const initialState: IEventState = {
    guests: [],
    events: []
};

export const EventReducer = (state = initialState, action: EventAction): IEventState => {
    switch (action.type) {
        case EventActionEnum.SET_GUESTS:
            return {
                ...state,
                guests: action.payload
            }
        case EventActionEnum.SET_EVENTS:
                return {
                    ...state,
                    events: action.payload
                }

        default: 
            return state
    }
}