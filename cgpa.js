  function cgpa() {
    // Get values inside the function
    var pc = Number(document.getElementById("pc").value);
    var pcr = Number(document.getElementById("pcr").value);
    var cs = Number(document.getElementById("cs").value);
    var csr = Number(document.getElementById("csr").value);
    var cgp = document.getElementById("cgpa");

    // Calculate CGPA
    var cgs = ((pc * pcr) + (cs * csr)) / (pcr + csr);

    // Display result
    cgp.textContent = "CGPA: " + cgs.toFixed(2);
  }
