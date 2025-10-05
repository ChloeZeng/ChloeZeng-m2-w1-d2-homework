$(document).ready(function() {
  $("#btn").click(function() {
    
    $("#table-container").empty();

    
    $.getJSON("data.json", function(data) {
      
      var table = $("<table border='1' cellspacing='0' cellpadding='10'></table>");
      
      // Caption
      var caption = $("<caption style='font-weight:bold; color:#6b2e23; text-transform:uppercase;'></caption>").text(data.title);
      table.append(caption);

      // Title
      var thead = $("<thead></thead>");
      var headRow = $("<tr></tr>");
      headRow.append("<th>" + data.heading + "</th>");
      headRow.append("<th>" + data.head1 + "</th>");
      headRow.append("<th>" + data.head2 + "</th>");
      headRow.append("<th>" + data.head3 + "</th>");
      headRow.append("<th>" + data.head4 + "</th>");
      thead.append(headRow);
      table.append(thead);

      // Calories
      var rowCal = $("<tr></tr>");
      rowCal.append("<td>" + data.subheadcal + "</td>");
      rowCal.append("<td>" + data.cal1 + "</td>");
      rowCal.append("<td>" + data.cal2 + "</td>");
      rowCal.append("<td>" + data.cal3 + "</td>");
      rowCal.append("<td>" + data.cal4 + "</td>");
      table.append(rowCal);

      // Fat
      var rowFat = $("<tr></tr>");
      rowFat.append("<td>" + data.subheadfat + "</td>");
      rowFat.append("<td>" + data.fat1 + "</td>");
      rowFat.append("<td>" + data.fat2 + "</td>");
      rowFat.append("<td>" + data.fat3 + "</td>");
      rowFat.append("<td>" + data.fat4 + "</td>");
      table.append(rowFat);

      // Vendor
      var rowVen = $("<tr></tr>");
      rowVen.append("<td>" + data.subheadven + "</td>");
      rowVen.append("<td>" + data.ven1 + "</td>");
      rowVen.append("<td>" + data.ven2 + "</td>");
      rowVen.append("<td>" + data.ven3 + "</td>");
      rowVen.append("<td>" + data.ven4 + "</td>");
      table.append(rowVen);

      // insert table
      $(table).insertBefore("#btn");

      // btn 
      $("#btn")
        .prop("disabled", true)
        .val("Data Loaded")
        .css({
          "background-color": "#ddd",
          "color": "#777",
          "font-weight": "bold"
        });
    });
  });
});
