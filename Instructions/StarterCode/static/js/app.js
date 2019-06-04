// from data.js
//var tableData = data;

let tableData = data;

let tbody = d3.select("tbody");

// Call a function to create the table that will hold the data
function table(data) {
  tbody.html("");

  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((v) => {
      let ufoInfo = row.append("td");
        ufoInfo.text(v);
      }
    );
  });
}

// Call a function to create a button for an on click event
function buttonClick() {

 d3.event.preventDefault();
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  table(filteredData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);