import { StyleSheet } from "react-native"

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    Login: {
        alignSelf: "center",
        alignContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'darkgray',
        margin: 60,
        height: "50%",
        width: '70%',
        backgroundColor: 'white',
    },
    Header: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        width: '100%',
        backgroundColor: '#007bff',
        color: 'white',
        height: '15%',
        marginBottom: "20%",
        padding: 5,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderColor: 'darkgray',
    },
    textIn: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'lightgray',
        width: '80%',
        alignSelf: 'center',
        margin: 8,
        padding: 10,
    },
    loginButton: {
        width: '70%',
        height: '8%',
        alignSelf: 'center',
        margin: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#007bff',
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    dashboard: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
    },
    dashHeader: {
        width: '100%',
        height: '12%',
        backgroundColor: '#007bff',
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '10%',
    },
    modal: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalHeader: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        width: '100%',
        backgroundColor: '#007bff',
        color: 'white',
        height: '10%',
        padding: 10,
        borderColor: 'darkgray',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomEndRadius: 5,
        marginBottom: 20,
    },
    picker: {
        width: '80%',
        alignSelf: 'center',
        margin: 8,
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 15,
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
    },
    modalButton: {
        flex: 1,
        margin: 5,
        padding: 5,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#007bff',
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashButtons: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 15,
      borderWidth: 2,
      margin: 10,
      width: '95%',
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    bookingPage: {
      alignSelf: "center",
      alignContent: 'center',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'darkgray',
      margin: 50,
      height: "90%",
      width: '85%',
      backgroundColor: 'white',
  },
  bookingHeader: {
      textAlign: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 24,
      width: '100%',
      backgroundColor: '#007bff',
      color: 'white',
      height: '10%',
      padding: 5,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderColor: 'darkgray',
  },
  roomInfo:{
    width: '100%',
    height: '80%',
    textAlign: 'center',
  },
  selectedRoomInfoText:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  roomInfoText:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    color: 'white',
  },
  roomWarning:{
    color: 'red',
    fontWeight: 'bold',
  },
  roomSubText:{
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  roomBox:{
    margin: 5,
    padding: 2,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#007bff',
},
bookingButtons:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  alignSelf: 'center',
},
  bookRoom:{
    borderRadius: 15,
    borderWidth: 2,
    alignSelf: 'center',
    backgroundColor: '#007bff',
    padding: 8,
  },
  returnDash:{
    width: '40%',
    borderRadius: 15,
    borderWidth: 2,
    alignSelf: 'center',
    backgroundColor: 'red',
    padding: 8,
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  savedBookings: {
    alignSelf: "center",
    alignContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'darkgray',
    margin: 50,
    height: "100%",
    width: '100%',
    backgroundColor: 'white',
},
noRooms:{
  margin: '5%',
  padding: 10,
  borderRadius: 10,
  borderWidth: 2,
  backgroundColor: '#007bff',
  height: '20%',
  width: '80%',
  alignSelf: 'center',
  justifyContent: 'center',
},
noRoomsText:{
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
  paddingBottom: 10,
},
bookedRoomTitle:{
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  textDecorationLine: 'underline',
},
bookedRoomSubtext:{
  color: 'white',
  fontSize: 16,
  padding: 2,
},
bookedRoomDelete:{
  backgroundColor: 'red',
  borderRadius: 10,
  color: 'white',
  fontSize: 16,
  padding: 2,
  margin: 2,
  width: '30%',
  textAlign: 'center',
  alignSelf: 'center',
}

})
export default GlobalStyles