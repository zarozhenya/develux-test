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
    gap: 8,
    height: 48,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#1E1E1F',
  },
  input: {
    flexGrow: 1,
    height: '100%',
    fontSize: 13,
    lineHeight: 16,
    color: '#ffffff',
  },
});
