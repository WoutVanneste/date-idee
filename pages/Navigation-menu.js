import React from 'react';
import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import NavigationMenuStyles from '../styles/NavigationMenu';
import Hamburger from 'react-native-animated-hamburger';

const NavigationMenu = ({ isMenuOpen, setMenuOpen }) => {

    return <View style={NavigationMenuStyles.wrapper}>
    <View><Text>name of active component</Text></View>
    <View>
        <Hamburger type="spinCross" active={isMenuOpen} onPress={() => {
              setMenuOpen(!isMenuOpen)
          }} underlayColor="transparent" />
    </View>
    <View>
      <TouchableOpacity>
        <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/home.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/food.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/concert.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/movie.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/outside.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <ImageBackground resizeMode="contain" style={NavigationMenuStyles.menuIcon} source={require('../assets/travel.png')} />
      </TouchableOpacity>
    </View>
  </View>;
}

export default NavigationMenu;