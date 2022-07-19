const BUILD = "Production";
const VERSION = "1.0.1";

function doGet(req) {
  return HtmlService.createHtmlOutputFromFile('html/index');
}
