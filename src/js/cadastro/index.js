const addRow = () => {
  var name = $("#name").val();
  var age = $("#age").val();
  var weight = $("#weight").val();
  var height = $("#height").val();
  var IMC = parseFloat(weight / (height * height)).toFixed(2);
  var status = "nada";
  if (IMC < 18.5 && age < 60) {
    status = "Baixo";
  } else if (IMC >= 18.5 && IMC < 25 && age < 60) {
    status = "Adequado";
  } else if (IMC >= 25 && IMC <= 29.9 && age < 60) {
    status = "Sobrepeso";
  } else if (IMC >= 30 && age < 60) {
    status = "Obesidade";
  } else if (IMC < 21.9 && age > 60) {
    status = "Baixo";
  } else if (IMC > 27 && age > 60) {
    status = "Sobrepeso";
  } else{
    status= "Adequado";
  }



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
    "</td><td>" +
    status +
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
