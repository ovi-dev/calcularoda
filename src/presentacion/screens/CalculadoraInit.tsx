import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colores, styles } from '../theme/app-theme'
import Boton from '../components/Boton'
import useCalculadora from '../hooks/useCalculadora'






const CalculadoraInit = () => {

  const { 
    numero,
    numeroPrevio,
    formula,
    
    pulsarNumero,
    borrar,
    borrarOperacion,
    toggleSign,
    operacionDividir,
    operacionMultiplicar,
    operacionRestar,
    operacionSumar, 
    resultadoCalculadora, 
    } = useCalculadora()

  return (
    <View style={styles.contenedorCalcu}>

      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>

        <Text
          // se adapta al espacio que tiene 
          adjustsFontSizeToFit

          //el texto se adapta a una sola linea volviendose mas pequena 
          numberOfLines={1}
          style={styles.resultado}> {formula}</Text>
          {
            ( formula === numeroPrevio)
            ? <Text style={ styles.subResultado}></Text> : (
              <Text adjustsFontSizeToFit
              numberOfLines={ 1}
              style={ styles.subResultado}>{numeroPrevio}</Text>
            )
          }


        {/* <Text 
        adjustsFontSizeToFit
        numberOfLines={1}   
                                  // para mantener en blanco la linea de abajo (numeroPrevio === '0' ? ' ' : numeroPrevio)        
        style={styles.resultado}> {(numeroPrevio === '0' ? ' ' : numeroPrevio)} </Text> */}

      </View>

      <View style={styles.row}>
        <Boton onPress={ borrar} label='C' textoNegro color={colores.linghGray} />
        <Boton onPress={ toggleSign} label='+/-' textoNegro color={colores.linghGray} />
        <Boton onPress={ borrarOperacion} label='del' textoNegro color={colores.linghGray} />
        <Boton onPress={operacionDividir} label='÷' color={colores.orange} />
      </View>

      <View style={styles.row}>
        <Boton onPress={() => pulsarNumero('7')} label='7' color={colores.darkGray} />
        <Boton onPress={() => pulsarNumero('8')} label='8' color={colores.darkGray} />
        <Boton onPress={() => pulsarNumero('9')} label='9' color={colores.darkGray} />
        <Boton onPress={() => operacionMultiplicar()} label='X' color={colores.orange} />
      </View>

      <View style={styles.row}>
        <Boton onPress={() => pulsarNumero('4')} label='4' color={colores.darkGray} />
        <Boton onPress={() => pulsarNumero('5')} label='5' color={colores.darkGray} />
        <Boton onPress={() => pulsarNumero('6')} label='6' color={colores.darkGray} />
        <Boton onPress={() => operacionRestar()} label='-' color={colores.orange} />
      </View>

      <View style={styles.row}>
        <Boton onPress={() => pulsarNumero('1')} label='1' color={colores.darkGray} />
        <Boton onPress={() => pulsarNumero('2')} label='2' color={colores.darkGray} />
        <Boton onPress={() => pulsarNumero('3')} label='3' color={colores.darkGray} />
        <Boton onPress={() => operacionSumar()} label='+' color={colores.orange} />
      </View>

      <View style={styles.row}>
        <Boton onPress={() => pulsarNumero('0')} label='0' color={colores.darkGray} dobleBoton />
        <Boton onPress={() => pulsarNumero('.')} label='.' color={colores.darkGray} />
        <Boton onPress={resultadoCalculadora} label='=' color={colores.orange} />
      </View>



    </View>
  )
}


export default CalculadoraInit
