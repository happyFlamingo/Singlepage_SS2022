
function registerMenu(){
// tabelle, kopf und rest der tabelle deklarieren
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    // Hierarchie wird aufgebaut
    table.appendChild(thead);
    table.appendChild(tbody);

    // Tabelle wird dem Body Tag hinzugefügt
    document.getElementById('body').appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Katzen";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Hunde";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Vögel";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);


// Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "Hundewelpen";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = "Katzen Babys";
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = "frisch geschlüpfte Vögel";

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);


// Creating and adding data to third row of the table
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "ausgewachsene Hunde";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = "ausgewachsene Katzen";
    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = "ausgewachsene Vögel";

    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    tbody.appendChild(row_3);
}