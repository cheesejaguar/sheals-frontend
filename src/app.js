const contentElement = document.getElementById('content');

const fetchData = async () => {
    try {
        const response = await fetch('https://api.shealsgames.com/top3/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayData = (data) => {
    contentElement.innerHTML = JSON.stringify(data, null, 2);
};

const refreshInterval = 1000; // Time in milliseconds (e.g., 5000ms = 5 seconds)

const pollData = () => {
    fetchData();
    setTimeout(pollData, refreshInterval);
};

pollData();