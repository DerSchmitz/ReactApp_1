import { StackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({

  drawerStack: { screen: DrawerStack  }

}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DrawerStack',
  defaultNavStack: { screen: LoginStack },
})






  // login stack
  const DrawerStack = StackNavigator({
    homeScreen: { screen: HomeScreen },
    linksScreen: { screen: LinksScreen },
    settingsScreen: { screen: SettingsScreen}
    {
    headerMode: 'float',
    navigationOptions: {
      headerStyle: {backgroundColor: '#E73536'},
      headerTintColor: 'black'
    }
  })



  const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
  }, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'Welcome!',
      headerTintColor: 'white',
    })
  })


  // drawer stack
  const DrawerStack = DrawerNavigator({
    screen1: { screen: Screen1 },
    screen2: { screen: Screen2 },
    screen3: { screen: Screen3 },
  })








// make primaryNavigation globally available
export default PrimaryNav
