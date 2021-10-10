import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  isWorkPage,
  deleteItem,
  toggleIsDone,
  editTitle,
}) => {
  return (
    <View style={styles.list}>
      <ScrollView>
        {Object.keys(todos).length !== 0 ? (
          Object.keys(todos).map((key) => {
            const { isDone, isWork, title } = todos[key];
            if (isWork === isWorkPage) {
              return (
                <TodoItem
                  key={key}
                  id={key}
                  title={title}
                  isDone={isDone}
                  title={title}
                  deleteItem={deleteItem}
                  toggleIsDone={toggleIsDone}
                  editTitle={editTitle}
                />
              );
            }
          })
        ) : (
          <Text style={styles.empty}>No tasks!</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 15,
  },
  empty: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: 200,
  },
});

export default TodoList;
