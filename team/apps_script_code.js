// Code used in google sheets (apps script) to get the file name from google drive shared file
function getNames() {
    var activeRange = SpreadsheetApp.getActiveSheet().getDataRange();
    var height = activeRange.getHeight();
    var links = SpreadsheetApp.getActiveSheet()
      .getRange("E2:E" + height)
      .getValues();
  
    var nameValues = [];
    var nameValuesWithoutExtension = [];
  
    links.forEach((row) => {
      try {
        var link = row[0];
        var fileID = getIdFromLink(link);
        var name = DriveApp.getFileById(fileID).getName();
        nameValues.push([name]);
        var name2 = name.substring(0, name.lastIndexOf('.'));
        nameValuesWithoutExtension.push([name2]);
      } catch (e) {
        nameValues.push(["NO NAME FOUND"]);
        nameValuesWithoutExtension.push(["NO NAME FOUND"]);
      }
    });
  
    var nameRange = SpreadsheetApp.getActiveSheet().getRange("F2:F" + height);
    nameRange.setValues(nameValues);
  
    var nameRange2 = SpreadsheetApp.getActiveSheet().getRange("G2:G" + height);
    nameRange2.setValues(nameValuesWithoutExtension);
  
  }
  
  function getIdFromLink(link) {
    // https://www.regextester.com/98103
    // Try testing regex in the above page
    // var regex = new RegExp(
    //   /(?<=https:\/\/drive\.google\.com\/open\?id\=)(.*)/
    // );
    var regex = new RegExp(
      /(?<=https:\/\/drive\.google\.com\/file\/d\/)(.*)(?=\/)/
    );
  
    return regex.exec(link)[0];
  }