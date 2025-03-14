import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Modal, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import GlobalStyles from "../shared/styles";

const Dashboard = ({ route, navigation }) => {
    const { username } = route.params;
    const [showModal, setShowModal] = useState(false);

    const [studentID, setStudentID] = useState('');
    const [name, setName] = useState('');
    const [numOfStudent, setNumOfStudent] = useState('');
    const [room, setRoom] = useState();

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.dashboard}>
                <Text style={GlobalStyles.dashHeader}>Student Dashboard Welcome: {username}</Text>
                <TouchableOpacity
                    style={GlobalStyles.dashButtons}
                    onPress={() => {
                        setShowModal(!showModal);
                    }}>
                    <Text style={GlobalStyles.modalButtonText}>Book Study Room</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={GlobalStyles.dashButtons}
                    onPress={() => {
                        navigation.navigate('RoomList', { username });
                    }}>
                    <Text style={GlobalStyles.modalButtonText}>View Booked Rooms</Text>
                </TouchableOpacity>

                <Modal
                    visible={showModal}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => {
                        console.log('Modal is being closed');
                        setShowModal(!showModal);
                    }}>
                    <View style={GlobalStyles.modal}>
                        <View style={GlobalStyles.Login}>
                            <Text style={GlobalStyles.modalHeader}>Enter in Student Info Below</Text>
                            <TextInput
                                style={GlobalStyles.textIn}
                                placeholder="Student ID"
                                value={studentID}
                                onChangeText={setStudentID}
                            />
                            <TextInput
                                style={GlobalStyles.textIn}
                                placeholder="Name"
                                value={name}
                                onChangeText={setName}
                            />
                            <TextInput
                                style={GlobalStyles.textIn}
                                placeholder="Number of Students"
                                keyboardType="numeric"
                                value={numOfStudent}
                                onChangeText={setNumOfStudent}
                            />

                            <Picker
                                style={GlobalStyles.picker}
                                selectedValue={room}
                                onValueChange={(roomNum) => setRoom(roomNum)}
                            >
                                <Picker.Item label="Select Room" />
                                <Picker.Item label="A101" value='A101' />
                                <Picker.Item label="A102" value='A102' />
                                <Picker.Item label="A103" value='A103' />
                                <Picker.Item label="A104" value='A104' />
                                <Picker.Item label="A105" value='A105' />
                            </Picker>

                            <View style={GlobalStyles.buttonContainer}>
                                <TouchableOpacity
                                    style={GlobalStyles.modalButton}
                                    onPress={() => {
                                        const numStudents = parseInt(numOfStudent);
                                        if (studentID === "" || name === "" || numOfStudent === "" || !room) {
                                            Alert.alert("Please Fill in All info");
                                        } else if (isNaN(numStudents) || numStudents <= 0) {
                                            Alert.alert("Please Enter 1 or more students");
                                        } else {
                                            navigation.navigate('Booking', { studentID, name, numOfStudent, room });
                                        }
                                    }}
                                >
                                    <Text style={GlobalStyles.modalButtonText}>Check Availability</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={GlobalStyles.modalButton}
                                    onPress={() => {
                                        setShowModal(!showModal);
                                    }}
                                >
                                    <Text style={GlobalStyles.modalButtonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity
                    style={GlobalStyles.dashButtons}
                    onPress={() => {
                        navigation.navigate('SignIn');
                    }}>
                    <Text style={GlobalStyles.modalButtonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Dashboard;