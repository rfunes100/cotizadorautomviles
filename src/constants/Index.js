export const Marcas = [
    {id: 1, nombre: 'EUROPEO'},
    {id: 2, nombre: 'AMERICANO'},
    {id: 3, nombre: 'ASIATICO'}

]

  const yearmax = new Date().getFullYear()
  export const Years = Array.from(new Array(20),
 (valor , index ) =>
  yearmax - index )


  export const Planes = [
    {id: 1, nombre: 'BASICO'},
    {id: 2, nombre: 'COMPLETO'}

]

