import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function CalculatorScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const sumar = () => setResult(Number(a) + Number(b));

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Número A" 
        style={styles.input}
        keyboardType="numeric"
        value={a} onChangeText={setA}
      />
      <TextInput
        placeholder="Número B"
        style={styles.input}
        keyboardType="numeric"
        value={b} onChangeText={setB}
      />
      <Button title="Sumar" onPress={sumar} />
      {result !== null && (
        <Text style={styles.result}>Resultado: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, justifyContent:'center' },
  input: { borderWidth:1, borderRadius:4, marginBottom:12, padding:8 },
  result: { marginTop:20, fontSize:18, textAlign:'center' }
});
