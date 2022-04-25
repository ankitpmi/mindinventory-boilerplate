import React from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import {miLogoImg} from 'app-assets';
import {AppText} from 'app-components';
import {RootStackParams, RouteNames} from 'app-navigation';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useHomeScreen} from './useHomeScreen';
import {TodosRes} from 'app-services';
import {getRandomColor} from 'app-constants';

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
  const {todoData} = useHomeScreen();

  const renderTodoList = ({item}: {item: TodosRes}): JSX.Element => {
    return (
      <TouchableOpacity
        style={[styles.cardLayout, {backgroundColor: getRandomColor()}]}
        key={item.id}
        onPress={onPressButton}>
        <AppText preset="bold" style={styles.cardText}>
          {item.title}
        </AppText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.imgContainer}>
        <Image source={miLogoImg} resizeMode="contain" style={styles.logo} />
      </View>

      <FlatList
        data={todoData}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={(_item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderTodoList}
      />
    </View>
  );
};

export default HomeScreen;
