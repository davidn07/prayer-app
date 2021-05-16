import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    padding: 10,
  },
  input: {
    backgroundColor: '#fefefe',
    minHeight: 50,
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#6290C8',
  },
  twoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 20,
    borderColor: '#6290C8',
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    width: '50%',
    alignSelf: 'center',
  },
  sendButton: {
    color: '#FF5A5F',
    textAlign: 'center',
  },
});

export default styles;
