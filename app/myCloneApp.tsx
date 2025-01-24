import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Full Page */}
      <View style={styles.top_border}>
        {/* Top border: Top row */}
        <View style={styles.top_row}>
          <View style={styles.search_box}>
            <Image
              style={styles.steam_png}
              source={require('../assets/steam.png')}
            />
            <Image style={{height: 18, width: 18, left: 125, tintColor: '#9ea0a2', opacity: 0.7}} source={require('../assets/search_icon.png')}/>
          </View>
          <Image
            style={styles.top_button}
            source={require('../assets/dots.png')}
          />
          <Image
            style={styles.profile_picture}
            source={require('../assets/pfp.png')}
          />
        </View>

        {/* Top border: Bottom row */}
        <View style={styles.bottom_row}>
          <Text style={styles.top_text}>
            MENU ᐯ        WISHLIST       WALLET{' '}
            <Text style={{ color: '#447fb8' }}>(CDN$ 0.00)</Text>
          </Text>
        </View>
      </View>

      <View style={styles.bottom_border}>
        {/* Bottom Border */}
        <Image
          style={styles.bottom_buttons}
          source={require('../assets/store_icon.png')}
        />
        <Image
          style={styles.bottom_buttons}
          source={require('../assets/news_icon.png')}
        />
        <Image
          style={styles.bottom_buttons}
          source={require('../assets/guard_icon.png')}
        />
        <TouchableOpacity onPress={() => alert('Alert Button Pressed!')}>
          <Image
            style={styles.bottom_buttons}
            source={require('../assets/notification_icon.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.bottom_buttons}
          source={require('../assets/menu_icon.png')}
        />
      </View>

      {/* Featured & Recommended Section */}
      <View style={styles.featured_section}>
        <Text style={styles.upper_store_text}>
          FEATURED & RECOMMENDED
        </Text>
          <View style={styles.featured_game}>
            <Image style={
              styles.game1_image}
              source={require('../assets/game1.jpg')}/>

            <Text style={styles.game_text}>
              Tom Clancy's Rainbow Six® Siege
            </Text>
            <View style={styles.price_listing}>
                <Text style={{backgroundColor: '#4a6a1b', color: '#afdb42', width: 40, paddingLeft: 5}}>
                  -60%
                </Text>
                <View style={{backgroundColor: '#35484f', paddingLeft: 5, alignItems: 'center', 
                    justifyContent: 'center', flexDirection: 'row'}}>
                  <Text style={{color: '#73858f', fontSize: 11}}>
                    CDN$ 24.99
                  </Text>
                  <Text style={{ color: '#afdb42', paddingLeft: 5, fontSize: 11}}>
                    CDN$ 9.99
                  </Text>
                </View>
            </View>
          </View>
        </View>

        {/* Special Offers Section */}
      <View style={styles.special_offers}>
        <Text style={styles.special_offers_text}>
          SPECIAL OFFERS
          <View style={{position: 'absolute'}}>
            <Text style={{color: '#9ea0a2', left: 185, top: 5, fontSize: 13}}>
              More {'>'}
            </Text>
          </View>
        </Text>
        <Image style={
          styles.game2_image}
          source={require('../assets/game2.jpg')}/>
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
  // Main background
  container: {
    flex: 1,
    backgroundColor: '#1e405e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Store Display
  upper_store_text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 5
  },
  // Featured Area
  featured_section: {
    marginTop: -230,
    marginLeft: -50
  },
  featured_game: {
    backgroundColor: '#122132',
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 8,
  },
  game1_image: {
    height: 185,
    width: 290
  },
  price_listing: {
    flexDirection: 'row',
  },
  game_text:{
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },
  //Special offers box
  special_offers: {
    flex: 1,
    backgroundColor: '#1a2e47',
    bottom: 60,
    width: '100%',
    height: 240,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  game2_image: {
    width: '100%',
    height: 200,
    marginBottom: -40,
    marginLeft: 10
  },
  //Special offers text
  special_offers_text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
    position: 'absolute', 
    top: 13,             
    left: 10,  
  },
});
