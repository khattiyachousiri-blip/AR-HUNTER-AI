const SHEET_NAME = 'Scores';

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  const data = JSON.parse(e.postData.contents || '{}');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp','Name','Grade','Room','Level','Mode','Score','Correct','Wrong','Accuracy','Max Combo']);
  }
  sheet.appendRow([
    new Date(), data.name || '', data.grade || '', data.room || '', data.level || '', data.mode || '',
    Number(data.score || 0), Number(data.correct || 0), Number(data.wrong || 0), Number(data.accuracy || 0), Number(data.combo || 0)
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ok:true, service:'AR HUNTER AI'})).setMimeType(ContentService.MimeType.JSON);
}
