import React, { useRef, useEffect } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';

const AnimatedTextExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Animate to opacity: 1
      duration: 2000, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for performance
    }).start(); // Start the animation
  }, [fadeAnim]);

  return (
    <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
      Editor.art
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color:'white'
  },
});

export default AnimatedTextExample;