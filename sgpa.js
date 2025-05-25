var ct=document.getElementById("ct")
    const noc=parseInt(localStorage.getItem("nocc")) || 0;
    for(let  i=1;i<=noc;i++){
         const row = document.createElement("tr");

        const serial = document.createElement("td");
        serial.innerHTML = `<h3>${i}.</h3>`;
        
        const courseName = document.createElement("td");
        courseName.innerHTML = `<input type="text" placeholder="Enter Course Name" class="course">`;
        
        const credits = document.createElement("td");
        credits.innerHTML = `<input type="number" placeholder="Enter No.of.Credits" class="credits">`;
        
        const grade = document.createElement("td");
        grade.innerHTML = `<input type="text" placeholder="Enter the Grade" class="grade">`;

        row.appendChild(serial);
        row.appendChild(courseName);
        row.appendChild(credits);
        row.appendChild(grade);
        ct.appendChild(row);
    }

    function exec(){
      const courses = Array.from(document.getElementsByClassName("course")).map(e => e.value);
      const credits = Array.from(document.getElementsByClassName("credits")).map(e => parseFloat(e.value));
      const grades = Array.from(document.getElementsByClassName("grade")).map(e => e.value.toUpperCase());

      localStorage.setItem("courses", JSON.stringify(courses));
      localStorage.setItem("credits", JSON.stringify(credits));
      localStorage.setItem("grades", JSON.stringify(grades));

      window.location.href = "sgpafinal.html";
    }