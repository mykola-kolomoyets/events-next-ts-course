import axios, { AxiosResponse } from 'axios';


export const DB_URL = 'https://next-ts-course-project-default-rtdb.firebaseio.com/events.json';

import { Event } from '.';


export default class EventsService {
    public static getFeaturedEvents() {
        return axios.get<Event[]>(DB_URL);
    }
}