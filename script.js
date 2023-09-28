document.addEventListener('DOMContentLoaded', function () {
    const fetchDataButton = document.getElementById('fetchData');
    const dataContainer = document.getElementById('dataContainer');

    fetchDataButton.addEventListener('click', fetchData);

    function fetchData() {
        // Replace this URL with the API endpoint you want to test
        const apiUrl = 'https://main--heroic-trifle-47908d.netlify.app/.netlify/functions/api';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display the data in the dataContainer
                dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                dataContainer.innerHTML = 'An error occurred while fetching data.';
            });
    }
});
