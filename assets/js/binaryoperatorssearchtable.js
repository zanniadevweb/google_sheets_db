function searchBinaryOperatorTable(input,table,columnSearchId) {
  var input, filter, table, tr, td, i, txtValue;

  var btnContainer = document.getElementById("binaryOperators");
  var btns = btnContainer.getElementsByClassName("button");

  var buttonId = 0;
  for (var i = 0; i < btns.length; i++) {
      var current = document.getElementsByClassName("active");
      if (current) {
        var buttonHtml = current[0];
        // buttonHtml.style.backgroundColor = 'green';
        var buttonId = buttonHtml.id.replace(/[^\d.-]/g, '');
        break;
      }
  }

  var binaryOperator = '';
  if (buttonId == 1) {
    binaryOperator = '<';
  } else if (buttonId == 2) {
      binaryOperator = '<=';
  } else if (buttonId == 3) {
      binaryOperator = '>';
  } else if (buttonId == 4) {
      binaryOperator = '>=';
  }

          console.log( binaryOperator);

  input = document.getElementById(input);
  // if (input.value != '') {
  //     console.log(input.value);
  // } else {
  //   console.log('vide');
  // }

  filter = input.value.toUpperCase();
  table = document.getElementById(table);
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[columnSearchId];
    if (td) {
      txtValue = td.textContent || td.innerText;
        if (binaryOperator == '<') {
            if ((txtValue*1 < input.value*1) || ( input.value == "" ) ) {
                tr[i].style.display = ""; // ON AFFICHE LA LIGNE
            } else {
                tr[i].style.display = "none";  // ON AFFICHE PAS LA LIGNE
            }
        } else if (binaryOperator == '<=') {
            if ((txtValue*1 <= input.value*1) || ( input.value == "" ) ) {
                tr[i].style.display = ""; // ON AFFICHE LA LIGNE
            } else {
                tr[i].style.display = "none";  // ON AFFICHE PAS LA LIGNE
            }
        } else if (binaryOperator == '>') {
            if ((txtValue*1 > input.value*1) || ( input.value == "" ) ) {
                tr[i].style.display = ""; // ON AFFICHE LA LIGNE
            } else {
                tr[i].style.display = "none";  // ON AFFICHE PAS LA LIGNE
            }
        } else if (binaryOperator == '>=') {
            if ((txtValue*1 >= input.value*1) || ( input.value == "" ) ) {
                tr[i].style.display = ""; // ON AFFICHE LA LIGNE
            } else {
                tr[i].style.display = "none";  // ON AFFICHE PAS LA LIGNE
            }
        }
    }
  }
}
