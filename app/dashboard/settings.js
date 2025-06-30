import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [dark, setDark] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Modo oscuro</Text>
      <Switch value={dark} onValueChange={setDark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, flexDirection:'row', alignItems:'center', padding:20 },
  label: { fontSize:18, marginRight:12 }
});
