import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    //backgroundColor: '#af9f85',
  },
  imageContainer: {
    marginTop: 20,
    //marginBottom: 20,
    alignItems: 'center',
  },
  postProfilePicture: {
    backgroundColor: '#494949',
    borderRadius: 50,
    overflow: 'hidden',
    height: 285,
    borderColor: '#494949',
    borderWidth: 1,
  },
  photo: {
    width: '100%',
    //height: '30%',
    aspectRatio: 1.5,
    borderRadius: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //padding: 10,
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '2%',
  },
  button: {
    backgroundColor: '#93856e',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 25,
    borderRadius: 50,
  },
  paginationButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#246bfd',
    borderRadius: 8,
    marginHorizontal: 5,
    borderRadius: 50,
  },
  paginationButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loaderScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%',
    marginBottom: '100%',
  },
  loader: {
    padding: 50,
    backgroundColor: '#323740',
    borderRadius: 360,
  },
  categoryPicture: {
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
    //marginVertical: 10,
    //margin: 6,
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // image: {
  //   width: '100%',
  //   height: '100%',
  // },
  CategoryName: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add a background to improve text readability
    color: 'white', // Adjust text color
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: '5%',
    // marginBottom: '5%',
    //margin: '12%',
    //padding: 10, // Add padding for better styling
    borderRadius: 10, // Add border radius for the background
  },
  CatimageContainer: {
    width: '95%',
    //padding: 10,
    marginTop: 20,
    //marginLeft:
  }
});

export default styles;