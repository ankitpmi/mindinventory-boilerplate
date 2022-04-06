import React from 'react';
import {View, Image} from 'react-native';
import {miLogoImg} from 'app-assets';
import {AppText, AppButton} from 'app-components';
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
      <AppButton onPress={onPressButton} style={styles.button}>
        <AppText preset="bold" style={styles.btnTxt}>
          Go to DetailScreen
        </AppText>
      </AppButton>
      <AppText>
        Created by <AppText preset="bold">Mindinventory</AppText>
      </AppText>
    </View>
  );
};

export default HomeScreen;
