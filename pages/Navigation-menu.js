import React, { useState} from "react";
import { View, TouchableOpacity, StyleSheet, Animated, ImageBackground, Text, Easing } from "react-native";
import NavigationMenuStyles from '../styles/NavigationMenu';

const NavigationMenu = ({activePage, setActivePage}) => {

  const [icon_1] = useState(new Animated.Value(0));
  const [icon_2] = useState(new Animated.Value(0));
  const [icon_3] = useState(new Animated.Value(0));
  const [icon_4] = useState(new Animated.Value(0));
  const [icon_5] = useState(new Animated.Value(0));
  const [icon_6] = useState(new Animated.Value(0));
  const [icon_7] = useState(new Animated.Value(10));
  const [menuTextVisible, setMenuTextVisible] = useState(true)

  const [pop, setPop] = useState(false);

  const firstChange = 65;
  const difference = 65;

  const popIn = () => {
    setPop(true);
    setMenuTextVisible(!menuTextVisible);
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
      toValue: 75,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
  }

  const popOut = () => {
    setPop(false);
    setMenuTextVisible(!menuTextVisible);
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
      toValue: 10,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
  }

  const goToPage = pageName => {
    if (pop) {
      popOut();
      setActivePage(pageName);
    }
  }

  return(
    <View style={NavigationMenuStyles.wrapper}>
      <Animated.View style={[styles.circle, { bottom: icon_1}]}>
        <TouchableOpacity style={NavigationMenuStyles.menuItemWrapper} onPress={() => goToPage("home")}>
          <Text 
            style={[NavigationMenuStyles.menuText, menuTextVisible ? NavigationMenuStyles.hiddenText : NavigationMenuStyles.visibleText]}>
              thuis blijven
          </Text>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/home.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_2}]}>
        <TouchableOpacity style={NavigationMenuStyles.menuItemWrapper} onPress={() => goToPage("outside")}>
          <Text
            style={[NavigationMenuStyles.menuText, menuTextVisible ? NavigationMenuStyles.hiddenText : NavigationMenuStyles.visibleText]}>
            dagje uit
          </Text>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/outside.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_3}]}>
        <TouchableOpacity style={NavigationMenuStyles.menuItemWrapper} onPress={() => goToPage("food")}>
          <Text
            style={[NavigationMenuStyles.menuText, menuTextVisible ? NavigationMenuStyles.hiddenText : NavigationMenuStyles.visibleText]}>
            drankje &amp; hapje
          </Text>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/food.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_4}]}>
        <TouchableOpacity style={NavigationMenuStyles.menuItemWrapper} onPress={() => goToPage("movie")}>
          <Text
            style={[NavigationMenuStyles.menuText, menuTextVisible ? NavigationMenuStyles.hiddenText : NavigationMenuStyles.visibleText]}>
            film avond
          </Text>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/movie.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_5}]}>
        <TouchableOpacity style={NavigationMenuStyles.menuItemWrapper} onPress={() => goToPage("concert")}>
          <Text
            style={[NavigationMenuStyles.menuText, menuTextVisible ? NavigationMenuStyles.hiddenText : NavigationMenuStyles.visibleText]}>
            concertje
          </Text>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/concert.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_6}]}>
        <TouchableOpacity style={NavigationMenuStyles.menuItemWrapper} onPress={() => goToPage("travel")}>
          <Text
            style={[NavigationMenuStyles.menuText, menuTextVisible ? NavigationMenuStyles.hiddenText : NavigationMenuStyles.visibleText]}>
            reis &amp; dagje weg
          </Text>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/travel.png')} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { right: icon_7}]}>
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

export default NavigationMenu;

const styles = StyleSheet.create({
  circle: {
     backgroundColor: '#7051cf',
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