import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {styles} from './styles';
import SearchIcon from '../../assets/search-icon.svg';

export const SearchInput: FC = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.hintText, {color: colors.text}]}>
        Type a company name or stock symbol:
      </Text>
      <View style={styles.field}>
        <TouchableOpacity>
          <SearchIcon stroke="#ffffff" />
        </TouchableOpacity>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};
