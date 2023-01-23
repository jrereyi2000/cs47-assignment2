import { StyleSheet, Text, View, Image } from 'react-native';
import { Icons } from '../../assets/Themes';

const NavBar = () => {
    return (
      <View style={styles.navbar}>
        <Image style={styles.navIcon} source={Icons.menu.light} />
        <Text style={styles.navText}>ensom</Text>
        <Image style={styles.navIcon} source={Icons.sun} />
      </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '6%',
    },
    navIcon: {
      height: Platform.OS === 'ios' ? 41 : 54,
      width: Platform.OS === 'ios' ? 41 : 54,
    },
    navText: {
      fontSize: 32,
      fontFamily: 'SydneyBold',
    },
});

export default NavBar;