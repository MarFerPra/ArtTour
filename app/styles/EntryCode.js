import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    marginTop: 100,
    flex: 3,
    maxWidth: '80%',
    maxHeight: '30%',
  },
  continueBtnWrapper: {
    width: 200,
    marginTop: 150,
    flex: 1
  },
  inputWrapper: {
    marginTop: 50,
  }
});
