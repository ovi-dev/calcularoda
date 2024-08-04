import { View, Text, StatusBar } from "react-native"
import CalculadoraInit from "./presentacion/screens/CalculadoraInit"
import { styles } from "./presentacion/theme/app-theme"



function App() {
  return (
    <View style={styles.background}>
     <StatusBar/>
     
      <CalculadoraInit/>
    </View>
  )
}

export default App
