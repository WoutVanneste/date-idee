import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Home from './Home';
import Concerts from './Concerts';
import Food from './Food';
import Movies from './Movies';
import Travel from './Travel';
import Outside from './Outside';
import All from './All';

const Navigation = ({ activePage, setActivePage }) => {
    const renderPage = () => {
        switch (activePage) {
            case 'food':
                return <Food />
            case 'home':
                return <Home />
            case 'concert':
                return <Concerts />
            case 'movie':
                return <Movies />
            case 'travel':
                return <Travel />
            case 'outside':
                return <Outside />
            default:
                return <All />
        }
    }

    return <View>
        <View>
            <TouchableOpacity onPress={() => setActivePage('')}>
                <Text>close button</Text>
            </TouchableOpacity>
        </View>
        {renderPage()}
    </View>;
}

export default Navigation;