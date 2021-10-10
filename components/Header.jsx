import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ isWorkPage, setIsWorkPage }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => setIsWorkPage(true)}>
      <Text
        style={{ ...styles.sectionName, color: isWorkPage ? 'white' : 'gray' }}
      >
        Work
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setIsWorkPage(false)}>
      <Text
        style={{ ...styles.sectionName, color: isWorkPage ? 'gray' : 'white' }}
      >
        Travel
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 40,
    height: 80,
  },
  sectionName: {
    fontSize: 40,
    fontWeight: '500',
  },
});

export default Header;
