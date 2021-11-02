'use strict'

//Importar los programas /js/gestionPresupuesto y js/gestionPresupuestoWeb. 
import * as gestionPresupuestoWeb from './gestionPresupuestoWeb.js';
import * as gestionPresupuesto from './gestionPresupuesto.js';

//Actualizar el presupuesto a 1500€
gestionPresupuesto.actualizarPresupuesto(1500);  

//Mostrar el presupuesto en el div#presupuesto
gestionPresupuestoWeb.mostrarDatoEnId('presupuesto', gestionPresupuesto.mostrarPresupuesto());

//Crear los siguientes gastos
let gasto1 = gestionPresupuesto.CrearGasto('Compra carne', 23.44, '2021-10-06', 'comida');
let gasto2 = gestionPresupuesto.CrearGasto('Compra fruta y verdura', 14.25, '2021-09-06', 'supermercado', 'comida');
let gasto3 = gestionPresupuesto.CrearGasto('Bonobús', 18.60, '2020-05-26', 'transporte');
let gasto4 = gestionPresupuesto.CrearGasto('Gasolina', 60.42, '2021-10-08', 'transporte', 'gasolina');
let gasto5 = gestionPresupuesto.CrearGasto('Seguro hogar', 206.45, '2021-09-26', 'casa', 'seguros');
let gasto6 = gestionPresupuesto.CrearGasto('Seguro coche', 195.78, '2021-10-06', 'transporte', 'seguros');

//Añadir los gastos creados
gestionPresupuesto.anyadirGasto(gasto1);
gestionPresupuesto.anyadirGasto(gasto2);
gestionPresupuesto.anyadirGasto(gasto3);
gestionPresupuesto.anyadirGasto(gasto4);
gestionPresupuesto.anyadirGasto(gasto5);
gestionPresupuesto.anyadirGasto(gasto6);

//Mostrar los gastos totales en div#gastos-totales
gestionPresupuestoWeb.mostrarDatoEnId('gastos-totales', gestionPresupuesto.calcularTotalGastos());

//Mostrar el balance total en div#balance-total
gestionPresupuestoWeb.mostrarDatoEnId('balance-total', gestionPresupuesto.calcularBalance());

//Mostrar el listado completo de gastos en div#listado-gastos-completo
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-completo', gestionPresupuesto.listarGastos());

//Mostrar el listado de gastos realizados en septiembre de 2021 en div#listado-gastos-filtrado-1
let septiembre2021 = 
{
    fechaDesde: '2021-09-01', 
    fechaHasta: '2021-09-30'
}
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-1', gestionPresupuesto.filtrarGastos(septiembre2021));

//Mostrar el listado de gastos de más de 50€ en div#listado-gastos-filtrado-2
let mas50 =
{
    valorMinimo: 50
}
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-2', gestionPresupuesto.filtrarGastos(mas50));

//Mostrar el listado de gastos de más de 200€ con etiqueta seguros en div#listado-gastos-filtrado-3
mas200conseguros =
{
    valorMinimo: 200,
    etiquetaTiene: ['seguros']
}
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-3', gestionPresupuesto.filtrarGastos(mas200conseguros));

//Mostrar el listado de gastos que tengan las etiquetas comida o transporte de menos de 50€ en div#listado-gastos-filtrado-4
menos50conetiquetas =
{
    valorMaximo: 50,
    etiquetaTiene: ['comida', 'transporte']
}
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-4', gestionPresupuesto.filtrarGastos(menos50conetiquetas));

//Mostrar el total de gastos agrupados por día en div#agrupacion-dia


//Mostrar el total de gastos agrupados por mes en div#agrupacion-mes


//Mostrar el total de gastos agrupados por año en div#agrupacion-anyo




