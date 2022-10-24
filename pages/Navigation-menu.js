import React, { useState} from "react";
import { View, TouchableOpacity, StyleSheet, Animated, ImageBackground, Text, Easing } from "react-native";
import NavigationMenuStyles from '../styles/NavigationMenu';

const FloatingButton = () => {

  const [icon_1] = useState(new Animated.Value(0));
  const [icon_2] = useState(new Animated.Value(0));
  const [icon_3] = useState(new Animated.Value(0));
  const [icon_4] = useState(new Animated.Value(0));
  const [icon_5] = useState(new Animated.Value(0));
  const [icon_6] = useState(new Animated.Value(0));
  const [icon_7] = useState(new Animated.Value(0));
  const [icon_8] = useState(new Animated.Value(0));

  const [pop, setPop] = useState(false);

  const firstChange = 75;
  const difference = 75;

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: firstChange,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_2, {
      toValue: firstChange + (difference * 1),
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_3, {
      toValue: firstChange + (difference * 2),
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_4, {
      toValue: firstChange + (difference * 3),
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_5, {
      toValue: firstChange + (difference * 4),
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_6, {
      toValue: firstChange + (difference * 5),
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_7, {
      toValue: firstChange + (difference * 6),
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_8, {
      toValue: 85,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
  }

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_2, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_3, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_4, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_5, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_6, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_7, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
    Animated.timing(icon_8, {
      toValue: 10,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
  }

  return(
    <View style={{
      flex: 1
    }}>
      <Animated.View style={[styles.circle, { bottom: icon_1}]}>
        <TouchableOpacity>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/home.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_2}]}>
        <TouchableOpacity>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/outside.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_3}]}>
        <TouchableOpacity>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/food.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_4}]}>
        <TouchableOpacity>
         <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/movie.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_5}]}>
        <TouchableOpacity>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/concert.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_6}]}>
        <TouchableOpacity>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/food.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_7}]}>
        <TouchableOpacity>
         <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/travel.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { right: icon_8}]}>
        <TouchableOpacity>
          <ImageBackground resizeMode="contain" style={[NavigationMenuStyles.menuIconSmall]} source={require('../assets/add.png')} />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}
      >
         <ImageBackground resizeMode="contain" style={[NavigationMenuStyles.menuIconSmaller]} source={require('../assets/menu.png')} />
      </TouchableOpacity>
    </View>
  )

}

export default FloatingButton;

const styles = StyleSheet.create({
  circle: {
     backgroundColor: '#8051cf',
     width: 60,
     height: 60,
     position: 'absolute',
     bottom: 0,
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: -30,
     right: 10
  }
})