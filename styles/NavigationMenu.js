import { StyleSheet } from 'react-native'; 

const NavigationMenuStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        padding: 20
    },
    menuItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 15
    },
    menuIcon: {
        height: 35,
        width: 35
    },
    menuIconSmall: {
        height: 25,
        width: 25,
        padding: 10
    },
    menuIconSmaller: {
        height: 30,
        width: 30,
        padding: 5
    }
});

export default NavigationMenuStyles