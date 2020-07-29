/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  let vCantidad;
  let vPrecio = 35;
  let vMarca;
  let vImporteFinal;
  let vIIBB;
  let vPrecioDescuento;

  vCantidad = parseInt(document.getElementById("txtIdCantidad").value);
  vMarca = document.getElementById("Marca").value;

  switch (vCantidad) {
    case 1:
    case 2:
      vPrecioDescuento = vPrecio * 0;
      break;
    case 3:
      if (vMarca == "ArgentinaLuz") {
        vPrecioDescuento = vPrecio * 0.85;
      }
      else if (vMarca == "FelipeLamparas") {
        vPrecioDescuento = vPrecio * 0.90;
      }
      else {
        vPrecioDescuento = vPrecio * 0.95;
      }
      break;
    case 4:
      if (vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas") {
        vPrecioDescuento = vPrecio * 0.75;
      }
      else {
        vPrecioDescuento = vPrecio * 0.80;
      }
      break;
    case 5:
      if (vMarca == "ArgentinaLuz") {
        vPrecioDescuento = vPrecio * 0.60;
      }
      else {
        vPrecioDescuento = vPrecio * 0.70;
      }
      break;

    default:
      vPrecioDescuento = vPrecio * 0.50;
      break;
  }
  document.getElementById("txtIdprecioDescuento").value = vPrecioDescuento;
  vImporteFinal = vPrecioDescuento * vCantidad;

  if (vImporteFinal > 120) {
    vIIBB = vImporteFinal * 1.1
    alert("Usted pago $ " + vIIBB.toFixed(2) + " de IIBB");
  }
  else {
    alert("Usted pago $ " + vImporteFinal);
  }
} 
