import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const Board = ({
  todos,
  isWorkPage,
  deleteItem,
  toggleIsDone,
  editTitle,
  addItem,
}) => (
  <View style={styles.board}>
    <View style={styles.todoInputWrapper}>
      <TodoInput addItem={addItem} />
    </View>
    <View style={styles.todoListWrapper}>
      <TodoList
        todos={todos}
        isWorkPage={isWorkPage}
        deleteItem={deleteItem}
        toggleIsDone={toggleIsDone}
        editTitle={editTitle}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  board: {
    flex: 1,
  },
  todoInputWrapper: {
    height: 40,
  },
  todoListWrapper: {
    flex: 1,
  },
});

export default Board;
