import { ADD_BOOKING, DELETE_BOOKING, SET_ROOMS } from "../actionTypes";

const initialState = {
    bookings: [],
    rooms: []
}

export default function taskReducer(state = initialState, action) {
    switch(action.type){
        case ADD_BOOKING:{
            console.log('Adding booking:', action.payload);
            return{
                ...state,
                bookings: [...state.bookings, action.payload]
            }
        }
        case DELETE_BOOKING:{
            console.log('Deleting booking:', action.payload);
            return{
                ...state,
                bookings: state.bookings.filter(booking => booking.id !== action.payload)
            }
        }
        case SET_ROOMS:{
            console.log('Setting rooms:', action.payload);
            return{
                ...state,
                rooms: action.payload
            }
        }
        default:
            return state
    }
}