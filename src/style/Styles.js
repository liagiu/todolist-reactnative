import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  backgroundImg: {
    flex: 1,
  },
  tarefasContainer: {
    paddingTop: 88,
    paddingHorizontal: 20,
  },
  tituloSecao: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tarefas: {
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
    backgroundColor: '#FAAA6E',
    width: 24,
    height: 24,
    opacity: 0.4,
    borderRadius: 50,
    marginRight: 15,
  },
  tarefaDesc: {
    maxWidth: '80%',
  },
  tickBox: {
    width: 12,
    height: 12,
    borderColor: '#FAC989',
    borderWidth: 2,
    borderRadius: 5,
  },
  textInputContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
  },
  btn: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  btnText: {},
});
