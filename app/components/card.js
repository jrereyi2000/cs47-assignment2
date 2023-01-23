import { Platform, StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { Themes, Icons, Profiles } from '../../assets/Themes';

const ProfileImg = () => {
    return (
        <ImageBackground 
          style={styles.profilePic} 
          imageStyle={{borderRadius: 6}}
          resizeMode='cover' 
          resizeMethod="resize" 
          source={Profiles.mtl.image}
        >
          <Text style={{...styles.imgText, fontSize: 32, marginTop: '4%'}}>{Profiles.mtl.name}</Text>
          <Text style={{...styles.imgText, marginBottom: '4%'}}>{Profiles.mtl.caption}</Text>
        </ImageBackground>
    )
}

const ProfileDetails = () => {
    return (
        <View style={styles.profileDetails}>
            <Text style={styles.profileText}>My hottest take</Text>
            <View style={styles.audioFeature}>
                <Image style={styles.playerButton} resizeMode='cover' resizeMethod="resize" source={Icons.player.light} />
                <Image style={styles.audio} resizeMode='stretch' resizeMethod="resize" source={Icons.audioWave.light} />
            </View>
        </View>
    )
}
const Card = () => {
    return (
      <View style={styles.card}>
        <ProfileImg />
        <ProfileDetails />
      </View>
    )
};

const styles = StyleSheet.create({
    imgText: {
        color: 'white',
        marginLeft: '4%',
        fontFamily: 'Sydney',
    },
    card: {
        alignItems: 'center',
    },
    profilePic: {
        width: '100%',
        height: Dimensions.get('window').width * 0.88,
        marginBottom: '6%',
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        justifyContent: 'space-between'
    },
    profileText: {
        fontSize: 24,
        fontFamily: 'Sydney',
        marginBottom: 10,
    },
    profileDetails: {
        padding: '6%',
        paddingLeft: '4%',
        width: '100%',
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
    },
    playerButton: {
        height: Platform.OS === 'ios' ? 41 : 54,
        width: Platform.OS === 'ios' ? 41 : 54,
        marginRight: 10,
    },
    audioFeature: {
        paddingTop: 10,
        flexDirection: 'row',
    },
    audio: {
        height: Platform.OS === 'ios' ? 41 : 54,
        width: '84%',
    }
});

export default Card;