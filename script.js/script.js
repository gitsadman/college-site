// Sample faculty data
const facultyData = [
    {
      name: "John Doe",
      subject: "Mathematics",
      dob: "1980-05-15",
    },
    {
      name: "Jane Smith",
      subject: "Physics",
      dob: "1975-09-23",
    },
    // Add more faculty members here
  ];
  
  // Function to update faculty information on the webpage
  function updateFacultyInformation() {
    const facultyList = document.getElementById("faculty-list");
  
    // Loop through the faculty data and create elements for each faculty member
    facultyData.forEach((faculty, index) => {
      const facultyCard = document.createElement("div");
      facultyCard.classList.add("faculty-card");
  
      facultyCard.innerHTML = `
        <h2>${faculty.name}</h2>
        <p>Subject: ${faculty.subject}</p>
        <p>Date of Birth: ${faculty.dob}</p>
      `;
  
      facultyList.appendChild(facultyCard);
    });
  }
  
  // Call the function to update faculty information when the page loads
  window.onload = updateFacultyInformation;

  



  