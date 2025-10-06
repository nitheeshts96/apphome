import { StyleSheet, Text, View, } from 'react-native';

// You can import supported modules from npm
import { useRef, useEffect } from 'react-native';

// or any files within the Snack
import AssetExample from './AssetExample';
import Animated from './Animated';

export default function App() {
  return (
    <View style={styles.container}>
      
      
        <AssetExample />
      <Animated/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 8,
  },
 
});
