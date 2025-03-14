import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRooms, addBooking } from '../redux/actions';
import { TouchableOpacity, Text, View } from "react-native";
import GlobalStyles from '../shared/styles';

const Booking = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.tasks.rooms || [])

    const { studentID, name, numOfStudent, room, username } = route.params;

    useEffect(() => {
        const roomData = [
            { roomNumber: 'A101', capacity: 5, available: true },
            { roomNumber: 'A102', capacity: 10, available: false },
            { roomNumber: 'A103', capacity: 8, available: false },
            { roomNumber: 'A104', capacity: 10, available: true },
            { roomNumber: 'A105', capacity: 7, available: true }
        ];
        dispatch(setRooms(roomData));
    }, [dispatch]);

    const handleBookRoom = () => {
        const booking = {
            id: new Date().getTime().toString(),
            studentID,
            name,
            numOfStudent,
            roomNumber: room,
            bookingDate: new Date().toISOString()
        };
        dispatch(addBooking(booking));
        navigation.navigate('RoomList', { username });
    };

    const handleReturnToDashboard = () => {
        console.log('Returning to dashboard');
        navigation.navigate('Dashboard', { username });
    };

    let warning = false;
    if (room === 'A101' && numOfStudent > 5) warning = true;
    else if (room === 'A102' && numOfStudent > 10) warning = true;
    else if (room === 'A103' && numOfStudent > 8) warning = true;
    else if (room === 'A104' && numOfStudent > 10) warning = true;
    else if (room === 'A105' && numOfStudent > 7) warning = true;

    let availability = false;
    if (room === 'A101') availability = true;
    else if (room === 'A102') availability = false;
    else if (room === 'A103') availability = false;
    else if (room === 'A104') availability = true;
    else if (room === 'A105') availability = true;

    return (
        <View style={GlobalStyles.bookingPage}>
            <Text style={GlobalStyles.bookingHeader}>This is the Booking Info for {name} for {numOfStudent} students</Text>
            <View style={GlobalStyles.roomInfo}>
                <Text style={GlobalStyles.selectedRoomInfoText}>Selected Room: {room}</Text>
                {warning && <Text style={GlobalStyles.roomWarning}>Warning: Too many students for this room!</Text>}
                {availability ? ( <Text>Room is Available</Text>) : ( <Text style={GlobalStyles.roomWarning}>Room is not Available</Text>)}
                <Text>Available Rooms</Text>
                {rooms.map((room, index) => (
                    <View style={GlobalStyles.roomBox} key={index}>
                        <Text style={GlobalStyles.roomInfoText}>Room Number: {room.roomNumber}</Text>
                        <Text style={GlobalStyles.roomSubText}>Capacity: {room.capacity}</Text>
                        <Text style={GlobalStyles.roomSubText}>Available: {room.available ? 'Yes' : 'No'}</Text>
                    </View>
                ))}
            </View>
            {warning || !availability ? (
                <TouchableOpacity style={GlobalStyles.returnDash} onPress={handleReturnToDashboard}>
                    <Text style={GlobalStyles.buttonText}>Return to Dashboard</Text>
                </TouchableOpacity>
            ) : (
                <View style={GlobalStyles.bookingButtons}> 
                <TouchableOpacity style={GlobalStyles.bookRoom} onPress={handleBookRoom}>
                    <Text style={GlobalStyles.buttonText}>Book Room?</Text>
                </TouchableOpacity>
                        <TouchableOpacity style={GlobalStyles.returnDash} onPress={handleReturnToDashboard}>
                        <Text style={GlobalStyles.buttonText}>Return to Dashboard</Text>
                </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default Booking;