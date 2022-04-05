import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {miLogoImg} from 'app-assets';
import {RootStackParams, RouteNames} from 'app-navigation';
import styles from './styles';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'HomeScreen'
>;

export type HomeScreenRouteProps = RouteProp<RootStackParams, 'HomeScreen'>;

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const onPressButton = () => {
    navigation.navigate(RouteNames.DetailsScreen);
  };

  return (
    <View style={styles.appContainer}>
      <Image source={miLogoImg} resizeMode="contain" style={styles.logo} />
      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <Text>Go to DetailScreen</Text>
      </TouchableOpacity>
      <Text style={styles.secondText}>
        Created by <Text style={styles.boldText}>Mindinventory</Text>
      </Text>
    </View>
  );
};

export default HomeScreen;
