import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
      <Text style={styles.boldText}>DetailsScreen</Text>
      <TouchableOpacity onPress={onPressGoBack} style={styles.button}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
