import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import RenderCards from './RenderCards';

const Content = ({ activePage, setActivePage, dates, setDates }) => {
    // might be used for some other check
    const renderPageTitle = () => {
        switch (activePage) {
            case 'food':
                return <Text>Food</Text>
            case 'home':
                return <Text>Home</Text>
            case 'concert':
                return <Text>Concerts</Text>
            case 'movie':
                return <Text>Movies</Text>
            case 'travel':
                return <Text>Travel</Text>
            case 'outside':
                return <Text>Outside</Text>
            default:
                return <Text>All</Text>
        }
    }

    return <View style={{height: '100%', overflow: 'scroll'}} >
        {renderPageTitle()}
        <RenderCards dates={dates} />
    </View>;
}

export default Content;