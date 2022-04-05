import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#aaa',
  },
  boldText: {
    fontWeight: 'bold',
  },
  logo: {
    height: 100,
    width: 300,
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default styles;