import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {styles} from './styles';

export const SearchInput: FC = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.hintText, {color: colors.text}]}>
        Type a company name or stock symbol:
      </Text>
      <TextInput style={styles.input} />
    </View>
  );
};
