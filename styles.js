import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7ee',
    //backgroundColor: '#f8fbfd',
  },
  imageContainer: {
    marginTop: 20,
    //marginBottom: 20,
    alignItems: 'center',
  },
  postProfilePicture: {
    backgroundColor: '#3e9feb',
    borderRadius: 50,
    overflow: 'hidden',
    //height: 285,
    //height: '7%',
    borderColor: '#3e9feb',
    //borderWidth: 10,
    elevation: 20,
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
    padding: '2%',
    marginLeft: '25%',
    marginRight: '25%',
    //marginTop: '2%',
  },
  button: {
    backgroundColor: '#79bcf1',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 30,
  },
  buttonText: {
    color: '#f9f7ee',
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
    backgroundColor: '#3e9feb',
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
    backgroundColor: '#3e9feb',
    borderRadius: 360,
    elevation: 15,
  },
  categoryPicture: {
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
    //marginVertical: 10,
    //margin: 6,
    //backgroundColor: 'rgba(255, 255, 255, 0.2)',
    elevation: 15,
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // image: {
  //   backgroundColor: 'rgba(255, 255, 255, 0.5)',
  // },
  CategoryName: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add a background to improve text readability
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: '5%',
    borderRadius: 10,
  },
  CatimageContainer: {
    width: '95%',
    //padding: 10,
    marginTop: 20,
    //marginLeft:
  }
});

export default styles;