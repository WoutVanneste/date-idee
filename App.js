import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import Content from './pages/Content';
import NavigationMenu from './pages/Navigation-menu';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStyles from './styles/App';

const dateIdeetjes = [
  {
    id: 11,
    title: "knus in de zetel",
    type: 1, // home
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 12,
    title: "maskertje doen",
    type: 1, // home
    isCompleted: true,
    createdOn: new Date().getTime()
  },
  {
    id: 21,
    title: "poke bowl",
    type: 2, // food
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 31,
    title: "Suzan en Freek",
    type: 3, // concert
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 41,
    title: "Cars 3",
    type: 4, // movie
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 51,
    title: "Weekendje met de fam",
    type: 5, // travel
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 61,
    title: "Ikea date",
    type: 6, // outside
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 11,
    title: "knus in de zetel",
    type: 1, // home
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 12,
    title: "maskertje doen",
    type: 1, // home
    isCompleted: true,
    createdOn: new Date().getTime()
  },
  {
    id: 21,
    title: "poke bowl",
    type: 2, // food
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 31,
    title: "Suzan en Freek",
    type: 3, // concert
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 41,
    title: "Cars 3",
    type: 4, // movie
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 51,
    title: "Weekendje met de fam",
    type: 5, // travel
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 61,
    title: "Ikea date",
    type: 6, // outside
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 11,
    title: "knus in de zetel",
    type: 1, // home
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 12,
    title: "maskertje doen",
    type: 1, // home
    isCompleted: true,
    createdOn: new Date().getTime()
  },
  {
    id: 21,
    title: "poke bowl",
    type: 2, // food
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 31,
    title: "Suzan en Freek",
    type: 3, // concert
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 41,
    title: "Cars 3",
    type: 4, // movie
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 51,
    title: "Weekendje met de fam",
    type: 5, // travel
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 61,
    title: "Ikea date",
    type: 6, // outside
    isCompleted: false,
    createdOn: new Date().getTime()
  }
]

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [dates, setDates] = useState(dateIdeetjes);
  return (
    <SafeAreaProvider>
       <SafeAreaView style={AppStyles.wrapper}>
        <NavigationMenu activePage={activePage} setActivePage={setActivePage} />
        <View style={[AppStyles.contentWrapper, { height: Dimensions.get('window').height }]}>
          <Content
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