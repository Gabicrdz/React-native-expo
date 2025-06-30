import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const products = [
  { id:'1', name:'Producto A', price:'$10' },
  { id:'2', name:'Producto B', price:'$20' },
  { id:'3', name:'Producto C', price:'$15' },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  item: { padding:12, borderBottomWidth:1 }
});
