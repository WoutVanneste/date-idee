import { StyleSheet } from 'react-native'; 

const NavigationMenuStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        padding: 20
    },
    hamburgerWrapper: {

    },
    activeMenuText: {
        fontWeight: 'bold',
    },
    hiddenText: {
        color: '#f9fafe'
    },
    visibleText:{
        color: '#8051cf'
    },
    menuText: {
        paddingBottom: 10,
        paddingTop: 10,
    },
    menuItemWrapper: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 170,
        //borderColor: 'black',
        //borderWidth: 1,
        left: -122,
        marginLeft: 0
    },
    menuItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 15
    },
    menuIconWrapper: {
        backgroundColor: '#92b2fd',
        padding: 10,
        borderRadius: 100,
        marginLeft: 15
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