import React, { useState } from 'react';
import Navigation from './pages/Navigation';
import NavigationMenu from './pages/Navigation-menu';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStyles from './styles/App';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <SafeAreaProvider>
       <SafeAreaView style={AppStyles.Wrapper}>
        <NavigationMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;