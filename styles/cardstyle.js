import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    paddingBottom: 10,
  },
  card: {
    marginTop: 50,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    paddingTop: 40,
    paddingHorizontal: 20, 
    width: '90%',
    height: 600,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    flexWrap: 'wrap',
    width: '100%',
    textAlign: 'left',
    lineHeight: 30,           
  },
  cardContent: {
    fontSize: 16,
    color: '#333',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default styles;