import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri:'https://i.pravatar.cc/150' }} 
        style={styles.avatar} 
      />
      <Text style={styles.name}>Juan Pérez</Text>
      <Text style={styles.email}>juan.perez@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  avatar: { width:100, height:100, borderRadius:50, marginBottom:16 },
  name: { fontSize:22, fontWeight:'bold' },
  email: { fontSize:16, color:'#555' }
});
