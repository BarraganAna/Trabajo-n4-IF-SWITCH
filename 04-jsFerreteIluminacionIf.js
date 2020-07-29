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
  let vDescuento;
  let vImporteFinal;
  let vIIBB;

  vCantidad = parseInt(document.getElementById("txtIdCantidad").value);
  vMarca = document.getElementById("Marca").value;

  if (vCantidad >= 6) {
    vDescuento = 0.5 * vPrecio;
  }
  else if (vCantidad == 5 && vMarca == "ArgentinaLuz") {
    vDescuento = vPrecio * 0.6;
  }
  else if (vCantidad == 5 && vMarca != "ArgentinaLuz") {
    vDescuento = vPrecio * 0.7;
  }
  else if (vCantidad == 4 && vMarca == "ArgentinaLuz" || vMarca == "FelipeLamparas") {
    vDescuento = vPrecio * 0.75;
  }
  else if (vCantidad == 4 && vMarca != "ArgentinaLuz") {
    vDescuento = vPrecio * 0.8;
  }
  else if (vCantidad == 3 && vMarca == "ArgentinaLuz") {
    vDescuento = vPrecio * 0.85;
  }
  else if (vCantidad == 3 && vMarca == "FelipeLamparas") {
    vDescuento = vPrecio * 0.9;
  }
  else {
    vDescuento = vPrecio * 0.95;
  }
  document.getElementById("txtIdprecioDescuento").value = vDescuento;
  vImporteFinal = vDescuento * vCantidad;
  if (vImporteFinal > 120) {
    vIIBB = vImporteFinal * 1.1
    alert("Usted pago  " + vIIBB.toFixed(2) + "de IIBB");
  }
  else {
    alert(vImporteFinal);
  }
}
