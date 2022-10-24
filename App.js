import React, { useState } from 'react';
import { View } from 'react-native';
import Navigation from './pages/Navigation';
import NavigationMenu from './pages/Navigation-menu';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStyles from './styles/App';

const dateIdeetjes = [
  {
    title: "knus in de zetel",
    type: 1 // home
  },
  {
    title: "poke bowl",
    type: 2 // food
  },
  {
    title: "Suzan en Freek",
    type: 3 // concert
  },
  {
    title: "Cars 3",
    type: 4 // movie
  },
  {
    title: "Weekendje met de fam",
    type: 5 // travel
  },
  {
    title: "Ikea date",
    type: 6 // outside
  }
]

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [dates, setDates] = useState(dateIdeetjes);
  return (
    <SafeAreaProvider>
       <SafeAreaView style={AppStyles.wrapper}>
        <NavigationMenu activePage={activePage} setActivePage={setActivePage} />
        <View style={AppStyles.contentWrapper}>
          <Navigation
            activePage={activePage}
            setActivePage={setActivePage}
            dates={dates}
            setDates={setDates} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;