import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../hd-digital-art-wallpaper-background_783884-210380.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 228,
    width: 228,
  }
});
