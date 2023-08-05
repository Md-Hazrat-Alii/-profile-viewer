const fetchProfilesData = async () => {
  try {
    const url = `https://2023.projektbigfoot.de/api/v1/projects`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API.");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array if there's an error, so displayProfiles will handle it gracefully
  }
};


const displayProfiles = (profiles) => {
  const tableContainer = document.getElementById("table-container");

  // Check if tableContainer exists before proceeding
  if (!tableContainer) {
    return;
  }
  tableContainer.innerHTML = ""; // Clear the table container before displaying new data

  profiles.map((profile) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <table class="table1">
        <tbody>
          <tr>
            <td>
               ${profile?.rank ? profile.rank : "Rang nicht gefunden"}.
               <span>${profile?.voteCount ? profile.voteCount : "0"}</span>
            </td>
            <td onclick="getProfileData('${profile?._id}')">
              <h4>${profile?.contestantName
        ? profile.contestantName
        : "Projektname Nicht gefunden"
      }</h4>
              <p>${profile?.projectTitle
        ? profile.projectTitle
        : "Projekttitel Nicht gefunden"
      }</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table2">
        <tbody>
          <tr>
            <td>${profile?.rank ? profile.rank : "Rang nicht gefunden"}.</td>
            <td>${profile?.voteCount ? profile.voteCount : "0"}</td>
            <td onclick="getProfileData('${profile?._id}')">
              <h4>${profile?.contestantName
        ? profile.contestantName
        : "Projektname Nicht gefunden"
      }</h4>
              <p>${profile?.projectTitle
        ? profile.projectTitle
        : "Projekttitel Nicht gefunden"
      }</p>
            </td>
          </tr>
        </tbody>
      </table>
    `;
    tableContainer.appendChild(div);
  });
};

// Call the fetchProfilesData function to get all profiles data and display them when the page is loaded or reloaded
fetchProfilesData().then((data) => displayProfiles(data));