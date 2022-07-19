const VERSION = "1.0.1";

function doGet(req) {
  return ContentService.createTextOutput(`Hello from Vue Apps Script Dev ${fctVersion()}`);
}


function fctVersion() : string{
  return VERSION;
}
