import { StyleSheet } from 'react-native';
import Nav from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer style={styles.nav}>
      <Nav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'scroll',
    padding: 10,
  },
  nav: {
    position: 'relative',
  }
});
