// Proyecto 6: recibe los datos de la estacion y los guarda en la hoja "Datos".
// Extensiones > Apps Script, pegue este codigo e implemente como "Aplicacion web".
function doGet(e) {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Datos");
  hoja.appendRow([
    new Date(),
    e.parameter.lugar,
    Number(e.parameter.luz),
    Number(e.parameter.temp),
    Number(e.parameter.ruido)
  ]);
  return ContentService.createTextOutput("ok");
}
