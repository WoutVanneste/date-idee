import React from 'react';
import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import NavigationMenuStyles from '../styles/NavigationMenu';
import Hamburger from 'react-native-animated-hamburger';

const NavigationMenu = ({ isMenuOpen, setMenuOpen }) => {

    return <View style={NavigationMenuStyles.wrapper}>
    <View><Text>name of active component</Text></View>
    <View>
      <View>
          <Hamburger type="cross" active={isMenuOpen} onPress={() => {
                setMenuOpen(!isMenuOpen)
            }} underlayColor="transparent" />
      </View>
      <TouchableOpacity style={NavigationMenuStyles.menuItem}>
        <Text style={NavigationMenuStyles.menuText}>lekker thuis</Text>
        <View style={NavigationMenuStyles.menuIconWrapper}>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/home.png')} />
        </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={NavigationMenuStyles.menuItem}>
        <Text style={NavigationMenuStyles.menuText}>hapje &amp; drankje</Text>
        <View style={NavigationMenuStyles.menuIconWrapper}>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/food.png')} />
        </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={NavigationMenuStyles.menuItem}>
        <Text style={NavigationMenuStyles.menuText}>concertjes</Text>
        <View style={NavigationMenuStyles.menuIconWrapper}>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/concert.png')} />
        </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={NavigationMenuStyles.menuItem}>
        <Text style={NavigationMenuStyles.menuText}>films &amp; series</Text>
        <View style={NavigationMenuStyles.menuIconWrapper}>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/movie.png')} />
        </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={NavigationMenuStyles.menuItem}>
        <Text style={NavigationMenuStyles.menuText}>date idee</Text>
        <View style={NavigationMenuStyles.menuIconWrapper}>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/outside.png')} />
        </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={NavigationMenuStyles.menuItem}>
        <Text style={NavigationMenuStyles.menuText}>reizen</Text>
        <View style={NavigationMenuStyles.menuIconWrapper}>
          <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/travel.png')} />
        </View>
      </TouchableOpacity>
    </View>
  </View>;
}

export default NavigationMenu;