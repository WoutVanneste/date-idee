import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Home from './Home';
import Concerts from './Concerts';
import Food from './Food';
import Movies from './Movies';
import Travel from './Travel';
import Outside from './Outside';

const Navigation = () => {
    const [activePage, setActivePage] = useState('home');

    const renderPage = () => {
        switch (activePage) {
            case 'food':
                return <Food />
            case 'home':
                return <Home />
            case 'concerts':
                return <Concerts />
            case 'movies':
                return <Movies />
            case 'travel':
                return <Travel />
            case 'outside':
                return <Outside />
            default:
                return <Text>No active page</Text>
        }
    }

    return <View>
        {renderPage()}
    </View>;
}

export default Navigation;