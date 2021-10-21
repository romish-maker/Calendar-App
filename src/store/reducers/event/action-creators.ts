import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser';
import {EventActionEnum} from './types';
import {SetGuestAction, SetEventsAction} from './types';
import {AppDispatch} from '../../store';
import axios from 'axios';
import UserService from '../../../api/UserService';

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            dispatch(EventActionCreators.setGuests(response.data));
        }catch(error) {
            console.warn(error);
        }
    }
}