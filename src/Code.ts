function doGet(req) {
  return ContentService.createTextOutput(`Hello from Vue Apps Script Production ${fctVersion()}`);
}


function fctVersion() : String{
  return "1.0"
}
