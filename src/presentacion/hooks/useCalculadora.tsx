import { useRef, useState } from "react"

enum Operador {
  sumar,
  restar,
  multiplicar,
  dividir
}


const useCalculadora = () => {

  const [numero, setNumero] = useState('0')
  const [numeroPrevio, setnumeroPrevio] = useState('0')


  const lasOperaciones = useRef<Operador>()



  // funcion para borrar la calculadora y poner a cero
  const borrar = () => {
    setNumero('0')
    setnumeroPrevio('0')
  }

  // funbcion para borrar numeros de la pantalla con el 'del'
  const borrarOperacion = () => {
    let asignado = ''
    let numeroTemporal = numero

    if (numero.includes('-')) {
      asignado = '-'
      numeroTemporal = numero.substring(1)

    }
    // borra el nu,ero de derecha a izquierda 
    if (numeroTemporal.length > 1) { // recorre el numero temporal mayor a 1
      return setNumero(asignado + numeroTemporal.slice(0, -1)) //devuelve el set slice() extrae una sección de una cadena y devuelve una cadena nueva.
    }
    setNumero('0')
  }
    // el mas y menos 
  const toggleSign = () => {
    if (numero.includes('-')) {
      return setNumero( numero.replace('-',''))
      
    }

    // y si no se combina 
    setNumero( '-' + numero)
  }




  const pulsarNumero = (numberString: string) => {
    // si incluye el punto y el numberString es igual al punto entonces devuelve vacio 
    if (numero.includes('.') && numberString === '.') return

    // si el numero comienza en 0 o en -0 entonces 
    if (numero.startsWith('0') || numero.startsWith('-0')) {

      // solo se puede tener un punto decimal en la operacion
      if (numberString === '.') {
        return setNumero(numero + numberString)
      }


      // evalua si es otro 0 y no hay punto
      if (numberString === '0' && numero.includes('.')) {
        return setNumero(numero + numberString)
      }


      // evalua si es diferente de 0, no hay punto, y es el primer punto 
      if (numberString !== '0' && !numero.includes('.')) {
        return setNumero(numberString)
      }


      //evitar el 000000.00

      if (numberString === '0' && !numero.includes('.')) {
        return
      }
      // este return detiene toda la condicion es para salirse de esta condicion
      return setNumero(numero + numberString)

    }

    // si no comienza con esas condiciones antes mencionadas entonces comienza por aqui con esta 
    setNumero(numero + numberString)
  }


  //verificar operaciones .0 que no pueda hacer operaciones
  const verificarcion = () => {
    if (numero.endsWith('.')) {
      setnumeroPrevio(numero.slice(0, 1))
    }
    else {
      setnumeroPrevio(numero)
    }
    setNumero('0')

  }

  const operacionDividir = () => {
    verificarcion()
    lasOperaciones.current = Operador.dividir
  }

  const operacionMultiplicar = () => {
    verificarcion()
    lasOperaciones.current = Operador.multiplicar
  }

  const operacionRestar = () => {
    verificarcion()
    lasOperaciones.current = Operador.restar
  }

  const operacionSumar = () => {
    verificarcion()
    lasOperaciones.current = Operador.sumar
  }






  return {
    // properties 
    numero,
    numeroPrevio,


    //Methods estos son metodos 
    pulsarNumero,
    borrar,
    borrarOperacion,
    toggleSign,
    operacionDividir,
    operacionMultiplicar,
    operacionRestar,
    operacionSumar



  }


}

export default useCalculadora
