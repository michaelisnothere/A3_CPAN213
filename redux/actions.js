import { ADD_BOOKING, DELETE_BOOKING, SET_ROOMS } from "./actionTypes";

export const setRooms = (rooms) => ({
    type: SET_ROOMS,
    payload: rooms
});

export const addBooking = (booking) => ({
    type: ADD_BOOKING,
    payload: booking
});

export const deleteBooking = (bookingId) => ({
    type: DELETE_BOOKING,
    payload: bookingId
});
