import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    {/*Full Page*/}
      <View style={styles.top_border}>
        {/*Top border: Top row*/}
        <View style={styles.top_row}>
          <View style={styles.search_box}>
            <Image
              style={styles.steam_png}
              source={require('./assets/steam.png')}>
            </Image>
          </View>
          <Image 
            style={styles.top_button} 
            source={require('./assets/dots.png')}>
          </Image>
          <Image
            style={styles.profile_picture}
            source={require('./assets/pfp.png')}>
            {/*Feel free to change the image*/}
          </Image>
        </View>
        {/*Top border: Bottom row*/}
        <View style={styles.bottom_row}>
          {/*Hard coded spacing, possibly fix later*/}
          <Text style={styles.top_text}>MENU ᐯ        WISHLIST        WALLET <Text style={{ color: '#447fb8' }}>(CDN$ 0.00)
          </Text></Text>
        </View>
      </View>
      <View style={styles.bottom_border}>
        {/*Bottom Border*/}
        <Image 
          style={styles.bottom_buttons}
          source={require('./assets/store_icon.png')}>
        </Image>
        <Image 
          style={styles.bottom_buttons}
          source={require('./assets/news_icon.png')}>
        </Image>
        <Image 
          style={styles.bottom_buttons}
          source={require('./assets/guard_icon.png')}>
        </Image>
        <TouchableOpacity onPress={()=>{alert ("Alert Button Pressed!")}}>
          <Image 
            style={styles.bottom_buttons}
            source={require('./assets/notification_icon.png')}>
          </Image>
        </TouchableOpacity>
        <Image 
          style={styles.bottom_buttons}
          source={require('./assets/menu_icon.png')}>
        </Image>
      </View>
      <View style={styles.upper_store_text_box}>
        <Text style={styles.upper_store_text}>
          FEATURED & RECOMMENDED                          
        </Text>
      </View>
      <View style={styles.special_offers}>
        <View style={styles.special_offers_text_box}>
          <Text style={styles.special_offers_text}>
            SPECIAL OFFERS
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Top border container
  top_border: {
    top: 0,
    width: '100%',
    height: 110,
    backgroundColor: '#202126',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  // Top border top row
  top_row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  // Top border bottom row
  bottom_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10
  },
  // Bottom border container
  bottom_border: {
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#202126',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  // Bottom border buttons
  bottom_buttons: {
    height: 52,
    width: 40,
    marginHorizontal: 15
  },
  // Search box
  search_box: {
    height: 40,
    width: '65%',
    backgroundColor: '#292c35',
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  // Steam logo within search box
  steam_png: {
    height: 25,
    width: 70,
    marginLeft: 10,
    opacity: 0.4
  },
  // Three-dots button
  top_button: {
    height: 20,
    width: 10,
    marginHorizontal: 15
  },
  // Profile picture
  profile_picture: {
    height: 40,
    width: 40,
    borderRadius: 4,
  },
  // Top text
  top_text: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '300',
    textAlign: 'center',
    marginHorizontal: 1,
  },
  //Main background
  container: {
    flex: 1,
    backgroundColor: '#1e405e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Store Display
  upper_store_text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  //Box for the store display text to be positioned correctly
  upper_store_text_box: {
    flexDirection: 'column',
    height: 20,
    borderWidth: 1,
    borderColor: '#1e405e',
    textAlign: 'left',
    top: -265,
    left: -75,
  },

  //Special offers box
  special_offers: {
    flex: 1,
    backgroundColor: '#1a2e47',
    bottom: 60,
    width: '100%',
    height: 325,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  //Special offers text
  special_offers_text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  //Box for the special offers text to be positioned correctly
  special_offers_text_box: {
    flexDirection: 'column',
    height: 20,
    borderWidth: 1,
    borderColor: '#1e405e',
    textAlign: 'left',
    top: -125,
    left: -120,
  },
});
