function searchBinaryOperatorTable(input,table,columnSearchId) {
  var input, filter, table, tr, td, i, txtValue;
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
    console.log(input.value);
      if ((txtValue*1 > input.value*1) || ( input.value == "" ) ) { // Opérateur >
        console.log('A');
        tr[i].style.display = ""; // ON AFFICHE LA LIGNE
      } else {
          console.log('C');
          tr[i].style.display = "none";  // ON AFFICHE PAS LA LIGNE
      }
    }
  }
}
