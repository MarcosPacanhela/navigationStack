import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GalleryScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const {Navigator, Screen} = createBottomTabNavigator()

export function BottomTabsRoutes(){
    return(
        <Navigator>
            <Screen 
                name='home'
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({size}) => (
                        <MaterialCommunityIcons 
                            name='home'
                            size={size}
                        />
                    )
                }}
            />
            <Screen 
                name='gallery'
                component={GalleryScreen}
                options={{
                    title: 'Gallery',
                    tabBarIcon: ({size}) => (
                        <MaterialCommunityIcons 
                            name='view-gallery'
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}

