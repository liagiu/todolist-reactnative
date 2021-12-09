/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Tarefa from './components/Tarefa';
import styles from './src/style/Styles';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tarefasContainer}>
        <Text style={styles.tituloSecao}>Tarefas Para Hoje:</Text>
        <View style={styles.tarefas}>
          <Tarefa text={'Tarefa #1'} />
        </View>
      </View>
    </View>
  );
};

export default App;
