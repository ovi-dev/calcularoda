import React from 'react'
import { View, Pressable, Text } from 'react-native'
import { colores, styles } from '../theme/app-theme'


interface Prop{
    label: string;
    color?: string;
    dobleBoton?: boolean;
    textoNegro?: boolean;
    onPress: ()=> void;
    
    
}

const Boton = ({
    label,
    color = colores.darkGray,
    dobleBoton = false,
    textoNegro= false,
    onPress

   }:Prop) => {

    return (

   <Pressable 
   onPress={ () => onPress()}
   style={({pressed}) => {
    return{
        ...styles.boton,
        backgroundColor: color,
        width: (dobleBoton) ? 180 : 80,
        
        // si esta en boolean(pressed) entonces ? y sino :
        opacity:  (pressed) ? 0.8 : 1 ,
        
    }}}>


<Text style={{
    ...styles.botonTex,
    color: (textoNegro) ? 'black' : 'white',
    
}}>{label}</Text>

</Pressable>
  )
}

export default Boton
