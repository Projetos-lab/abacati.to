const addRow = () => {
  var name = $("#name").val();
  var age = $("#age").val();
  var weight = $("#weight").val();
  var height = $("#height").val();
  var IMC = parseFloat(weight / (height * height)).toFixed(2);
  var markup =
    "<tr><td><input type='checkbox' name='record'></td><td>" +
    name +
    "</td><td>" +
    age +
    "</td><td>" +
    weight +
    "</td><td>" +
    height +
    "</td><td>" +
    IMC +
    "</td></tr>";

  $("table tbody").append(markup);
};

// Find and remove selected table rows
const deleteRow = () => {
  $("table tbody")
    .find('input[name="record"]')
    .each(function () {
      if ($(this).is(":checked")) {
        $(this).parents("tr").remove();
      }
    });
};

function trocaCor() {
  changeColorHeader("#F3DE2C");
}
