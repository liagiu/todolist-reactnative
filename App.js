/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Tarefa from './components/Tarefa';
import styles from './src/style/Styles';

const App = () => {
  const [tarefa, setTarefa] = useState();
  const [tarefas, setTarefas] = useState([]);

  const bgImg = {
    uri: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80',
  };

  const handleNovaTarefa = () => {
    Keyboard.dismiss();
    setTarefas([...tarefas, tarefa]);
    setTarefa(null);
  };

  const finalizarTarefa = i => {
    const tarefasRestantes = [...tarefas];
    tarefasRestantes.splice(i, 1);
    setTarefas(tarefasRestantes);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <View style={styles.tarefasContainer}>
          <Text style={styles.tituloSecao}>Tarefas Para Hoje:</Text>
          <View style={styles.tarefas}>
            {tarefas.map((item, i) => (
              <TouchableOpacity key={i} onPress={() => finalizarTarefa(i)}>
                <Tarefa text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'Adicionar nova tarefa'}
            value={tarefa}
            onChangeText={text => setTarefa(text)}
          />
          <TouchableOpacity onPress={() => handleNovaTarefa()}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default App;
