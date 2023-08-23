import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageContainer: {
    marginTop: 20,
    //marginBottom: 20,
    alignItems: 'center',
  },
  postProfilePicture: {
    backgroundColor: 'gray',
    borderRadius: 50,
    overflow: 'hidden',
    height: 285,
    borderColor: 'gray',
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
    backgroundColor: '#246bfd',
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
});


export default styles;
