import React, {FC} from 'react';
import {Calendar} from 'antd';
import { IEvent } from '../models/IEvent';

interface EventCalendarPropsInterface  {
    events: IEvent[]
}

export const EventCalendar: FC<EventCalendarPropsInterface> = () => {
    return (
        <Calendar/>
    )
}