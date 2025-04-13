import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingRight: 25,
  },
  headerContainer: {
    marginTop: 20,
    justifyContent: 'space-between',
    color: '#000000',
    fontFamily: 'montserrat',
  },
  cityTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  loadingContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  locationText: {
    fontSize: 14,
  },
  temperature: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 130,
    paddingEnd: 10,
    fontFamily: 'monospace',
    marginTop: 6,
  },
  searchContainer: {
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A8CCF0',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
    opacity: 0.4,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchLoader: {
    marginLeft: 10,
  },
  tabsContainer: {
    marginLeft: -15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 33,
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
  activeTab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: '#A8CCF0',
    opacity: 0.7,
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#176FF2',
    fontFamily: 'Abhaya Libre Medium',
  },
  inactiveTab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#FFF',
  },
  inactiveTabText: {
    fontSize: 16,
    color: '#B8B8B8',
    fontFamily: 'Abhaya Libre Medium',
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '600',
    marginTop: 35,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  placesScrollView: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  placeCard: {
    width: 150,
    height: 200,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginRight: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  placeCard2: {
    width: 170,
    height: 230,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginRight: 4,
    marginLeft: 4,
    marginTop: 5,
    marginBottom: 10,

    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  placeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  placeOverlay2: {
    position: 'absolute',
    top: 5,
    left: 3,
    backgroundColor: 'rgba(71, 68, 68, 0.5)',
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeUnderlay: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 7,
  },
  placeName2: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'Roboto',
  },
  navigationButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  navigationButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  searchBar: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Abhaya Libre Medium',
  },
  cityCard: {
    backgroundColor: "rgb(195, 223, 245)",
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 13,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cityImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cityInfo: {
    paddingHorizontal: 5,
  },
  cityName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    borderRadius: 10,
  },
  cityName3: {
    fontSize: 28,
    fontWeight: "semibold",
    color: "#333",
    marginBottom: 5,
    borderRadius: 10,
  },
  cityDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  searchResultButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  searchResultButton: {
    backgroundColor: '#176FF2',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  searchResultButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
  },
  headerTitle: {
    fontSize: 18,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'space-around',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  navIcon: {
    padding: 10,
  },
  card: {
    marginTop: 20,
    backgroundColor: '#D6D5D5',
    borderRadius: 20,
    marginBottom: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hotelPlaceName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#0077BE',
  },
  hotelDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  hotelDetails2: {
    fontSize: 16,
    color: '#666',
    marginTop: 9,
    marginBottom: 1,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  buttonsContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    width: '40%', 
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 15,
    borderRadius: 35,
    marginVertical: 6,
    width: 95,
    height: 35,
    justifyContent: 'center',
    marginRight: 15,
    marginLeft: -3, 
  },
  button_profile: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 35,
    marginVertical: 6,
    width: 80,
    height: 35,
    justifyContent: 'center',
    bottom: 10,
  },
  button2: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 25,
    bottom: 8,
    width: 110,
    marginLeft: 32,
    height: 30,
    justifyContent: 'center',
    marginTop: 13,
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Abhaya Libre Medium',
  },
  footMenu: {
    position: 'absolute',
    bottom: -8,
    left: 0,
    right: 0,
    padding: 0,
    width: "100%",
    height: 72, 
    alignItems: "center",
    borderTopRightRadius:32,
    borderTopLeftRadius:32,
    backgroundColor: '#ffffff', 
    elevation: 5, 
    boxShadow: "0px 0px 30px -10px #176FF2"
  },
  input: { 
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5 },

});




const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 1,
    paddingVertical: 2,
    // borderWidth: 0.1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderCurve: 'circular',
    color: 'black',
    paddingRight: 5, // to ensure the text is never behind the icon
    backgroundColor: '#FFFFFF',
    marginTop: -60,
    marginEnd: -10,
    width: 150,
    alignSelf: 'flex-end',
    

  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 1,
    paddingVertical: 2,
    // borderWidth: 0.1,
    borderColor: '#FFFFFF',
    borderRadius: 880,
    borderCurve: 'circular',
    color: 'black',
    paddingRight: 5, // to ensure the text is never behind the icon
    backgroundColor: '#FFFFFF',
    marginTop: -60,
    marginEnd: -10,
    width: 120,
    alignSelf: 'flex-end',
  },
});

export { styles, pickerSelectStyles };



