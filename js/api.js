// const searchField = document.getElementById("search-input");

// searchField.addEventListener(
//   "input",
//   (handleSearch = () => {
//     const searchText = searchField.value.trim();

//     // If the search text is empty, display all data
//     if (searchText === "") {
//       profilesData();
//     } else {
//       //get the profiles data
//       const url = `https://2023.projektbigfoot.de/api/v1/projects?query=${encodeURIComponent(
//         searchText
//       )}`;
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           const filteredData = data.filter((item) =>
//             item.contestantName.toLowerCase().includes(searchText.toLowerCase())
//           );
//           displayProfiles(filteredData)
//         });
//     }
//   })
// );
// //clear the searchfield
// searchField.value = "";

const profilesData = () => {
  const url = `https://2023.projektbigfoot.de/api/v1/projects`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProfiles(data));
};

profilesData();


const displayProfiles = (profiles) => {
  const tableContainer = document.getElementById("table-container");

  profiles.map((profile) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <table>
      <tbody>
        <tr>
          <td>${profile?.rank + "."}</td>
            <td>${profile?.voteCount}</td>
            <td>
              <a href="./details.html">
                <h4>${profile?.contestantName}</h4>
                <p>${profile?.projectTitle}</p>
              </a>
            </td>      
        </tr>
       <tbody>     
    </table>     
    `;
    tableContainer.appendChild(div);
  });
};

const getProfileData = (id) => {
  console.log(id)
  const url = `https://2023.projektbigfoot.de/api/v1/projects/${id}`;
  console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((result) => console.log(result));
};