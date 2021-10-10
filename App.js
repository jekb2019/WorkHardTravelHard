import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Board from './pages/Board';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TODO_STORAGE_KEY = '@todos';
const IS_WORK_STORAGE_KEY = '@iswork';

// console.log(process.env.HIHI);

export default function App() {
  const [isWorkPage, setIsWorkPage] = useState(true);
  const [todos, setTodos] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeLoadedData();
  }, []);

  const setToWorkPage = (isWorkPageSet) => {
    setIsWorkPage(isWorkPageSet);
    storeIsWorkPage(isWorkPageSet);
  };

  const initializeLoadedData = async () => {
    await loadTodos();
    await loadIsWorkPage();
    setIsLoading(false);
  };

  const loadTodos = async () => {
    const jsonTodos = await AsyncStorage.getItem(TODO_STORAGE_KEY);
    if (!jsonTodos) {
      return;
    }
    setTodos(JSON.parse(jsonTodos));
  };

  const storeItems = async (todos) => {
    try {
      await AsyncStorage.setItem(TODO_STORAGE_KEY, todos);
    } catch (err) {
      console.error(err);
    }
  };

  const loadIsWorkPage = async () => {
    const iw = await AsyncStorage.getItem(IS_WORK_STORAGE_KEY);
    if (iw === 'false') {
      setIsWorkPage(false);
    } else {
      setIsWorkPage(true);
    }
  };

  const storeIsWorkPage = async (isWorkPageSet) => {
    try {
      await AsyncStorage.setItem(IS_WORK_STORAGE_KEY, isWorkPageSet.toString());
    } catch (err) {
      console.error(err);
    }
  };

  const deleteItem = (key) => {
    const tempTodos = Object.assign({}, todos);
    delete tempTodos[key];
    setTodos(tempTodos);
    storeItems(JSON.stringify(tempTodos));
  };

  const toggleIsDone = (key) => {
    const tempTodos = Object.assign({}, todos);
    tempTodos[key].isDone = !tempTodos[key].isDone;
    setTodos(tempTodos);
    storeItems(JSON.stringify(tempTodos));
  };

  const editTitle = (key, title) => {
    const tempTodos = Object.assign({}, todos);
    tempTodos[key].title = title;
    setTodos(tempTodos);
    storeItems(JSON.stringify(tempTodos));
  };

  const addItem = (title) => {
    // const tempTodos = Object.assign({}, todos, {
    //   [Date.now()]: {
    //     isWork: isWorkPage,
    //     title,
    //     isDone: false,
    //   },
    // });

    const tempTodos = {
      [Date.now()]: {
        isWork: isWorkPage,
        title,
        isDone: false,
      },
      ...todos,
    };

    setTodos(tempTodos);
    storeItems(JSON.stringify(tempTodos));
  };

  return (
    <View style={styles.container}>
      <Header isWorkPage={isWorkPage} setIsWorkPage={setToWorkPage} />
      <View style={styles.boardContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" style={styles.loadingSpinner} />
        ) : (
          <Board
            todos={todos}
            isWorkPage={isWorkPage}
            deleteItem={deleteItem}
            toggleIsDone={toggleIsDone}
            editTitle={editTitle}
            addItem={addItem}
          />
        )}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  boardContainer: {
    flex: 1,
  },
  loadingSpinner: {
    marginTop: 200,
  },
});
