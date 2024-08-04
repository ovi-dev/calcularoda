import { StyleSheet } from "react-native";

export const colores = {
    darkGray:  '#383737',
    linghGray: '#a39f9e',
    orange:    '#ff9427',

    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000',
    
    

}



export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colores.background
    },

    row:{
        flexDirection:"row",
        justifyContent:"center",
        marginBottom: 19,
        paddingHorizontal:10
    },

    contenedorCalcu: {
            flex: 1,
            padding: 20,
            justifyContent: "flex-end"
    },

    resultado: {
        color: colores.textPrimary,
        fontSize: 70,
        textAlign: "right",
        marginBottom: 10,
        fontWeight: "400"

    },

    subResultado: {

        color: colores.textSecondary,
        fontSize: 40,
        textAlign: "right",
        fontWeight: "300"
    },
    boton: {
        height:80,
        width:80,
        backgroundColor: colores.darkGray,
        borderRadius: 100,
        justifyContent:"center",
        marginHorizontal: 10

    },
    botonTex: {
        textAlign:"center",
        padding:10,
        fontSize: 30,color: 'white',
        fontWeight: "300"
        
    },
    talla: {
        fontSize: 30,
      },

}) 