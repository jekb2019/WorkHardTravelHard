import React from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';

const TodoItem = ({
  id,
  isDone,
  title,
  deleteItem,
  toggleIsDone,
  editTitle,
}) => {
  const updateTitle = () => {
    if (Platform.OS === 'ios') {
      Alert.prompt('Edit title', 'Enter new title', (updated) => {
        editTitle(id, updated);
      });
    } else {
      Alert.alert(
        'Changing title only available for IOS devices',
        'Please delete this task and create a new one.'
      );
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.describers}>
        <TouchableOpacity onPress={() => toggleIsDone(id)}>
          <View style={styles.checkbox}>
            {isDone && <View style={styles.checked}></View>}
          </View>
        </TouchableOpacity>
        <Text
          style={{
            ...styles.desc,
            textDecorationLine: isDone ? 'line-through' : 'none',
          }}
        >
          {title}
        </Text>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={updateTitle}>
          <Entypo style={styles.icons} name="edit" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteItem(id);
          }}
        >
          <Ionicons style={styles.icons} name="trash-sharp" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#3A3D40',
    marginTop: 7,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  describers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    height: 10,
    width: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  desc: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  btns: {
    flexDirection: 'row',
  },
  icons: {
    fontSize: 24,
    color: 'white',
    marginLeft: 10,
  },
});

export default TodoItem;
