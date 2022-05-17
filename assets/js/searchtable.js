function searchTable(input,table,columnSearchId) {
  var trValues = document.getElementById("tableData").getElementsByTagName("tbody")[0].rows; // TODO
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById(input);
  filter = input.value.toUpperCase();
  table = document.getElementById(table);
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[columnSearchId];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
