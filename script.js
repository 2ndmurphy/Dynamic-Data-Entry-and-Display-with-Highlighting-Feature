function tambahData() {
    var namaBarangInput = document.getElementById("namaBarang");
    var beratInput = document.getElementById("berat");
    var barangBody = document.getElementById("barangBody");

    var namaBarang = namaBarangInput.value;
    var berat = parseFloat(beratInput.value);

    // var backgroundColorClass = berat > 5 ? "highlight" : "";
    if (berat > 5) {
        var backgroundColorClass = "highlight";
    } 

    var newRow = barangBody.insertRow();
    var cellNo = newRow.insertCell(0);
    var cellNamaBarang = newRow.insertCell(1);
    var cellBerat = newRow.insertCell(2);
    var cellAksi = newRow.insertCell(3);

    cellNo.textContent = barangBody.rows.length;
    cellNamaBarang.textContent = namaBarang;
    cellBerat.textContent = berat + " kg";
    cellBerat.classList.add(backgroundColorClass);

    var btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.onclick = function() {
        hapusBaris(newRow);
    };
    cellAksi.appendChild(btnHapus);

    namaBarangInput.value = "";
    beratInput.value = "";
}

function hapusBaris(row) {
    var barangBody = document.getElementById("barangBody");
    barangBody.removeChild(row);

    for (var i = 0; i < barangBody.rows.length; i++) {
        barangBody.rows[i].cells[0].textContent = i + 1;
    }
}
