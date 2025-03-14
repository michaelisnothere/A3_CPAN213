import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking } from '../redux/actions';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import GlobalStyles from '../shared/styles';

const RoomListScreen = ({ route, navigation }) => {
    const bookings = useSelector((state) => state.tasks.bookings);
    const dispatch = useDispatch();
    const { username } = route.params;

    useEffect(() => {
        console.log('Bookings:', bookings);
    }, [bookings]);

    const handleDeleteBooking = (bookingId) => {
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete this booking?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => {
                        dispatch(deleteBooking(bookingId));
                        Alert.alert("Success", "Booking has been deleted successfully!");
                    },
                }
            ]
        );
    };

    const renderBookingItem = ({ item }) => {
        console.log('Rendering item:', item);
        return (
            <View style={GlobalStyles.roomBox}>
                <Text style={GlobalStyles.bookedRoomTitle}>Room {item.roomNumber}</Text>
                <Text style={GlobalStyles.bookedRoomSubtext}>Booked by: {item.name} ({item.studentID})</Text>
                <Text style={GlobalStyles.bookedRoomSubtext}>Number of Students: {item.numOfStudent}</Text>
                <Text style={GlobalStyles.bookedRoomSubtext}>Booking Date: {new Date(item.bookingDate).toLocaleDateString()}</Text>
                <TouchableOpacity 
                    style={GlobalStyles} 
                    onPress={() => handleDeleteBooking(item.id)}
                >
                    <Text style={GlobalStyles.bookedRoomDelete}>Delete</Text>
                </TouchableOpacity>
            </View>

        );
    };

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.savedBookings}>
                <Text style={GlobalStyles.bookingHeader}>My Booked Rooms</Text>
                {bookings.length === 0 ? (
                    <View style={GlobalStyles.noRooms}>
                        <Text style={GlobalStyles.noRoomsText}>No rooms booked yet</Text>
                    </View>
                ) : (
                    <FlatList
                        style={GlobalStyles}
                        data={bookings}
                        keyExtractor={(item) => item.id}
                        renderItem={renderBookingItem}
                    />
                    
                )}
                <TouchableOpacity 
                    style={[GlobalStyles.returnDash, {margin: "3%"}]}
                    onPress={() => {
                        console.log('Navigating back to Dashboard');
                        navigation.navigate('Dashboard', { username });
                    }}>
                <Text style={GlobalStyles.modalButtonText}>Back to Dashboard</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RoomListScreen;