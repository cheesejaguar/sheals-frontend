const contentElement = document.getElementById('content');

const fetchData = async () => {
    try {
        const response = await fetch('https://api.shealsgames.com/top3', {method: 'get'});
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
    // Assuming the JSON object contains an array of words like { "words": ["word1", "word2", "word3"] }
    const top3Words = data.slice(0, 3);
    const existingWords = Array.from(wordListElement.children).map(li => li.textContent);

    wordListElement.innerHTML = '';

    top3Words.forEach((word, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = word;

        if (!existingWords.includes(word)) {
            span.classList.add('animation');
        }

        li.appendChild(span);
        wordListElement.appendChild(li);
    });
};

const refreshInterval = 1000; // Time in milliseconds (e.g., 5000ms = 5 seconds)

const pollData = () => {
    fetchData();
    setTimeout(pollData, refreshInterval);
};

pollData();
