$(document).ready(function () {
  const dic = {};

  $("li :checkbox").change(function () {
    let id = $(this).attr("data-id");
    let name = $(this).attr("data-name");

    if (this.checked) {
      dic[id] = name;
    } else {
      delete dic[id];
    }

    $("div.amenities h4").empty();

    let newText = $.map(dic, function (i) {
      return i;
    }).join(", ");

    $("div.amenities h4").text(newText);
  });
});
