
  var csv = '';
  $('tr').each(function() {
    $(this).children('th').each(function() {
      csv += '"' + $(this)[0].innerText.replaceAll('"', '""') + '",';
    });
    $(this).children('td').each(function() {
      csv += '"' + $(this)[0].innerText.replaceAll('"', '""') + '",';
    });
    csv += "\n";
  });
  console.log (csv);
  var hiddenElement = document.createElement("a");
  hiddenElement.href = 'data:text/tsv;charset=utf-8,' + encodeURIComponent(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'catalog.csv';
  hiddenElement.click();
