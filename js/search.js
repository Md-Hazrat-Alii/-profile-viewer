// Function to handle the search input
const handleSearch = () => {
    const searchInput = document.getElementById("search-input");
    const searchText = searchInput.value.trim().toLowerCase();

    const isNumeric = (value) => {
        return !isNaN(value) && isFinite(value);
    };

    if (searchText === "") {
        fetchProfilesData().then((data) => displayProfiles(data));
    } else {
        fetchProfilesData().then((data) => {
            const filteredProfiles = data.filter((profile) => {
                if (isNumeric(searchText)) {
                    return (
                        profile.voteCount.toString().includes(searchText) ||
                        profile.rank.toString().includes(searchText)
                    );
                } else {

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
searchInput.addEventListener("input", handleSearch);
