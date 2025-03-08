import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  myTripsButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  myTripsButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
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
    //backgroundColor: '#FFF',
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
    marginTop: 40,
    marginBottom: 15,
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
    width: 150,
    height: 200,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginRight: 4,
    marginLeft: 4,
    marginTop: 4,
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
  placeOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    alignItems: 'center',
  },
  placeOverlay2: {
    position: 'absolute',
    top: 5,
    left: 10,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    borderRadius: 12,
  },
  placeUnderlay: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 15,
    marginTop: 0, 
    marginBottom: 15, // 15 for small phone.
    marginLeft: 5, 
    marginRight: 0,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  placeName2: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFF',
    left: 5,
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
  cityName: {
    fontSize: 32,
    fontWeight: '600',
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
  },
  hotelDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: 80,
    height: 45,
    justifyContent: 'center',
  },
  button2: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    borderRadius: 25,
    marginLeft: 40,
    bottom: 8,
    width: 90,
    height: 15,
    justifyContent: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Abhaya Libre Medium',
  },
  footMneu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    padding: 20,
    width: "100%", 
    alignItems: "center",
    borderRadius: 15,

    shadowColor: '#0077BE',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10
  },
  input: { 
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5 
  },
  reviewCard: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  starFilled: {
    color: '#FFD700',
    fontSize: 27,
    marginRight: 4,
  },
  starEmpty: {
    color: '#D3D3D3',
    fontSize: 27,
    marginRight: 4,
  },
  comment: {
    fontSize: 14,
    color: '#666',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  backButton: { 
    position: "absolute", 
    top: 5, 
    left: 5, 
    zIndex: 10, 
    height: 40, 
    width: 40,
    borderRadius: 10
  },


});




const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 2,
    // borderWidth: 0.1,
    borderColor: '#A8CCF0',
    borderRadius: 880,
    borderCurve: 'circular',
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#A8CCF0',
    marginTop: -60,
    marginEnd: -10,
    width: 150,
    alignSelf: 'flex-end',

  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 2,
    // borderWidth: 0.1,
    borderColor: '#A8CCF0',
    borderRadius: 880,
    borderCurve: 'circular',
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#A8CCF0',
    marginTop: -60,
    marginEnd: -10,
    width: 150,
    alignSelf: 'flex-end',
  },
});

export { styles, pickerSelectStyles };



