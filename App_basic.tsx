import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const [text, setText] = useState('');
  const handleChangeInput = (input: String) => {
    setText(input);
    // console.log(input);
  };
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.containerText}>App</Text>
        <Text style={styles.containerText}>App</Text>
        <Text style={styles.containerText}>App</Text>

        <Button
          title="test"
          onPress={() => {
            alert('test');
          }}
        />
        <TextInput style={styles.input} onChangeText={handleChangeInput} />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  containerText: {
    backgroundColor: 'pink',
    padding: 20,
    color: 'black',
  },
  input: {backgroundColor: 'white', width: 100},
});
