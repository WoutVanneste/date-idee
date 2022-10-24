import React, { useState } from 'react';
import { View } from 'react-native';
import Navigation from './pages/Navigation';
import NavigationMenu from './pages/Navigation-menu';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStyles from './styles/App';

const App = () => {
  const [activePage, setActivePage] = useState('home')
  return (
    <SafeAreaProvider>
       <SafeAreaView style={AppStyles.wrapper}>
        <NavigationMenu activePage={activePage} setActivePage={setActivePage} />
        <View style={AppStyles.contentWrapper}>
          <Navigation activePage={activePage} setActivePage={setActivePage} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;