import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  hintText: {
    fontSize: 10,
    lineHeight: 16,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    width: '100%',
    paddingLeft: 48,
    paddingRight: 16,
  },
  searchIconContainer: {
    position: 'absolute',
    left: 16,
  },
  input: {
    flexGrow: 1,
    height: '100%',
    fontSize: 13,
    lineHeight: 16,
  },
});
