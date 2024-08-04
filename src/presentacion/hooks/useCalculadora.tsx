import { useEffect, useRef, useState } from "react"

enum Operador {
  sumar = '+',
  restar = '-',
  multiplicar ='x',
  dividir = '÷'
}

const useCalculadora = () => {

  // crear una formula para cambiar las apariencias de la calvculadoras 
  // 

  const [numero, setNumero] = useState('0')
  const [numeroPrevio, setnumeroPrevio] = useState('0')
  const lasOperaciones = useRef<Operador>()
  
  // formula elabora los arreglos necesarios para que aparezca en pantalla los simbolos + - X
  const [formula, setformula] = useState('')

  // espera el cambio en la formula se pregunta si hay algo operaciones   
  useEffect(() => {

    // entonces con un estring vacio en su primera posicion concatena lo marcado con los simbolos y resultado
    if (lasOperaciones.current) {
      const segundaFormula = formula.split( ' ')[0]
      setformula( `${segundaFormula} ${lasOperaciones.current} ${ numero}`)
    }
    // caso contrari si no tiene nada se coloca el valor anterior 
    else {

      setformula(numero)
    }
  
  
  }, [numero])

  // que aparezca en la linea de abajo de la calculadora el resultado sin darle =
  // lo que se busca es disminuir lo menos posiblo los efectos usaremos 
  useEffect(() => {
    const subResultado = subCalculo()
    setnumeroPrevio(`${subResultado}`)
  }, [formula])


  // funcion para borrar la calculadora y poner a cero
  const borrar = () => {
    setNumero('0')
    setnumeroPrevio('0')
    lasOperaciones.current = undefined
    setformula('')
  }

  // funbcion para borrar numeros de pantalla con el 'del'
  const borrarOperacion = () => {
    let asignado = ''
    let numeroTemporal = numero

    if (numero.includes('-')) {
      asignado = '-'
      numeroTemporal = numero.substring(1)

    }
    // borra el numero de derecha a izquierda 
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


  //verificar operaciones .0 que no pueda hacer operaciones CALCULATERESULT
  const verificarcion = () => {
    resultadoCalculadora()
       // en la condicion tiene elcalculo calculadora 

    if (numero.endsWith('.')) {
      setnumeroPrevio(numero.slice(0, -1))
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



  // calculos de la calculadora + - x / 
  const resultadoCalculadora = () => {
    const resultado = subCalculo()
    setformula( `${resultado}`)
    lasOperaciones.current = undefined
    
    setnumeroPrevio('0')
  }

  const subCalculo = ():Number => {

    const [ primerValor, operacion, segundoValor] = formula.split( ' ' )
     const num1 = Number(primerValor)
    const num2 = Number(segundoValor)
    // const num1 = Number(numero)
    // const num2 = Number(numeroPrevio)

    // el isNan es un metodo. si el resultado mo es num2 uno devuelve e; num1
    if (isNaN(num2) ) return num1

          //se puede cambiar aqui el lasOperaciones por operacion de arriba
  switch (lasOperaciones.current) {
  
    case  Operador.sumar:
    // setNumero(`${ num1 + num2}`)
    return num1 + num2
    
    // break;
    case  Operador.restar:
    // setNumero(`${ num2 - num1}`)
    return num1 - num2
    
    // break;
    case  Operador.dividir:
    // setNumero(`${ num2 / num1}`)
    return num1 / num2
    
    // break;
    case  Operador.multiplicar:
    // setNumero(`${ num1 * num2}`)
    return num1 * num2
    
    // break;
  
  default:
    throw new Error("No Valido !!");
  }
  }

  return {
    // properties 
    numero,
    numeroPrevio,
    formula,


    //Methods estos son metodos 
    pulsarNumero,
    borrar,
    borrarOperacion,
    toggleSign,
    operacionDividir,
    operacionMultiplicar,
    operacionRestar,
    operacionSumar,
    resultadoCalculadora


  }


}

export default useCalculadora
