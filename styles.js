import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7ee',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  postProfilePicture: {
    backgroundColor: '#3e9feb',
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: '#3e9feb',
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
    elevation: 15,
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CategoryName: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: '5%',
    borderRadius: 10,
  },
  CatimageContainer: {
    width: '95%',
    marginTop: 20,
  }
});

export default styles;