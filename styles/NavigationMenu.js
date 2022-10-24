import { StyleSheet } from 'react-native'; 

const NavigationMenuStyles = StyleSheet.create({
    wrapper: {
        height: 150,
        width: '100%',
        position: 'relative',
        display: "flex"
    },
    menuText: {
        color: '#8051cf',
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 10,
    },
    menuItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 15
    },
    menuIconWrapper: {
        backgroundColor: '#8051cf',
        padding: 10,
        borderRadius: 100,
        marginLeft: 15
    },
    menuIcon: {
        height: 35,
        width: 35
    }
});

export default NavigationMenuStyles