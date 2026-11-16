
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ name, image, price, description }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 95,
    height: 130,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  description: {
    fontSize: 13,
    color: '#666666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e53935',
  },
});
