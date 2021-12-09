import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../src/style/Styles';

export default function Tarefa(props) {
  return (
    <View style={styles.tarefa}>
      <View style={styles.tarefaCaixa}>
        <View style={styles.tarefaBox}></View>
        <Text style={styles.tarefaDesc}>{props.text}</Text>
      </View>
      <View style={styles.tickBox}></View>
    </View>
  );
}
