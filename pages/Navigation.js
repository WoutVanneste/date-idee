import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Home from './Home';
import Concerts from './Concerts';
import Food from './Food';
import Movies from './Movies';
import Travel from './Travel';
import Outside from './Outside';
import All from './All';

const Navigation = ({ activePage, setActivePage, dates, setDates }) => {
    const renderPage = () => {
        switch (activePage) {
            case 'food':
                return <Food dates={dates} setDates={setDates} />
            case 'home':
                return <Home dates={dates} setDates={setDates} />
            case 'concert':
                return <Concerts dates={dates} setDates={setDates} />
            case 'movie':
                return <Movies dates={dates} setDates={setDates} />
            case 'travel':
                return <Travel dates={dates} setDates={setDates} />
            case 'outside':
                return <Outside dates={dates} setDates={setDates} />
            default:
                return <All dates={dates} setDates={setDates} />
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