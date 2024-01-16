import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemText: {
    fontSize: 17,
    lineHeight: 22,
  },
  itemPriceContainer: {
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#5DD25A',
  },
  itemPriceText: {
    fontSize: 13,
    lineHeight: 22,
    color: '#ffffff',
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#000000',
    opacity: 0.16,
  },
});
