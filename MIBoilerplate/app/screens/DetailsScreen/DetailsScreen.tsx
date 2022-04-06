import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {AppText} from 'app-components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import type {RootStackParams} from 'app-navigation';
import styles from './styles';

export type DetailsScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'DetailsScreen'
>;

export type DetailsScreenRouteProps = RouteProp<
  RootStackParams,
  'DetailsScreen'
>;

interface Props {}

const DetailsScreen: React.FC<Props> = () => {
  const navigation = useNavigation<DetailsScreenNavigationProps>();

  const onPressGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.detailContainer}>
      <AppText preset="header">DetailsScreen</AppText>
      <TouchableOpacity onPress={onPressGoBack} style={styles.button}>
        <AppText preset="bold">Go back</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
