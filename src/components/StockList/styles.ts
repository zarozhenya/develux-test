import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 16,
  },
  itemText: {
    fontSize: 17,
    lineHeight: 22,
    flex: 1,
  },
  itemSeparator: {
    height: 1,
  },
  emptyList: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
