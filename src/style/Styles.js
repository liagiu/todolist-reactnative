import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tarefasContainer: {
    paddingTop: 88,
    paddingHorizontal: 20,
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tarefas: {
    backgroundColor: '#e8eaed',
    marginTop: 30,
  },
  tarefa: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tarefaCaixa: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tarefaBox: {
    backgroundColor: '#55bcf6',
    width: 24,
    height: 24,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  tarefaDesc: {
    maxWidth: '80%',
  },
  tickBox: {
    width: 12,
    height: 12,
    borderColor: '#55bcf6',
    borderWidth: 2,
    borderRadius: 5,
  },
});
