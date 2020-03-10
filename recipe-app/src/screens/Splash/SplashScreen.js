import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AsyncImageAnimated,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

const SplashScreen = (props) => {

  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={require('../../../assets/icons/cookie100.png')} />
    </View>
  );
}

export default SplashScreen
