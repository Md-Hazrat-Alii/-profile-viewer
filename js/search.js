// Function to handle the search input
const handleSearch = () => {
    const searchInput = document.getElementById("search-input");
    const searchText = searchInput.value.trim().toLowerCase(); // Get the search text and convert to lowercase

    // Function to check if the search input can be parsed as a number
    const isNumeric = (value) => {
        return !isNaN(value) && isFinite(value);
    };

    // If search text is empty, fetch all profiles data and display
    if (searchText === "") {
        fetchProfilesData().then((data) => displayProfiles(data));
    } else {
        // If search text is not empty, fetch profiles data and filter based on search text or numeric value
        fetchProfilesData().then((data) => {
            const filteredProfiles = data.filter((profile) => {
                // Check if the search input can be parsed as a number
                if (isNumeric(searchText)) {
                    // Filter by voteCount or rank (convert to string for comparison)
                    return (
                        profile.voteCount.toString().includes(searchText) ||
                        profile.rank.toString().includes(searchText)
                    );
                } else {
                    // Filter by contestantName or projectTitle (convert to lowercase for case-insensitive search)
                    return (
                        profile.contestantName.toLowerCase().includes(searchText) ||
                        profile.projectTitle.toLowerCase().includes(searchText)
                    );
                }
            });
            displayProfiles(filteredProfiles);
        });
    }
};


const searchInput = document.getElementById("search-input");
// Add event listener to search input field
searchInput.addEventListener("input", handleSearch);
