import React, {FC, useMemo} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {styles} from './styles';
import SearchIcon from '../../assets/search-icon.svg';

export const SearchInput: FC = () => {
  const scheme = useColorScheme();
  const {colors} = useTheme();

  const fieldBackgroundStyles = useMemo(() => {
    return {backgroundColor: scheme === 'dark' ? '#1E1E1F' : '#F8F8F8'};
  }, [scheme]);

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.hintText, {color: colors.text}]}>
        Type a company name or stock symbol:
      </Text>
      <View style={[styles.field, fieldBackgroundStyles]}>
        <TouchableOpacity>
          <SearchIcon stroke={colors.text} />
        </TouchableOpacity>
        <TextInput style={[styles.input, {color: colors.text}]} />
      </View>
    </View>
  );
};
