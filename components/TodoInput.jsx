import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const TodoInput = ({ addItem }) => {
  const [value, setValue] = useState('');

  const submit = () => {
    if (value === '') {
      return;
    }
    addItem(value);
    setValue('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your todos"
        autoCorrect={false}
        returnKeyType="done"
        value={value}
        onChangeText={(event) => setValue(event)}
        onSubmitEditing={submit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 20,
    fontSize: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TodoInput;
