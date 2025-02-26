// Sample data - Replace with your own images
const people = [];

let currentPair = [];
let totalVotes = 0;

// ELO rating function
function updateRatings(winner, loser) {
    const K = 32;
    const expectedScoreWinner = 1 / (1 + Math.pow(10, (loser.rating - winner.rating) / 400));
    const expectedScoreLoser = 1 / (1 + Math.pow(10, (winner.rating - loser.rating) / 400));
    
    winner.rating = Math.round(winner.rating + K * (1 - expectedScoreWinner));
    loser.rating = Math.round(loser.rating + K * (0 - expectedScoreLoser));
}

// Add these new functions for handling uploads
function handleImageUpload(event) {
    event.preventDefault();
    const files = document.getElementById('imageInput').files;
    const statusDiv = document.getElementById('uploadStatus');
    
    if (files.length === 0) {
        statusDiv.textContent = 'Please select some images first.';
        return;
    }

    statusDiv.textContent = 'Processing images...';
    
    Array.from(files).forEach(file => {
        // Create a FileReader to read the image
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Create new person object with the image data
            const person = {
                id: people.length + 1,
                img: e.target.result,
                rating: 1500,
                hits: 0,
                skips: 0
            };
            
            people.push(person);
            statusDiv.textContent = `Uploaded ${people.length} images successfully.`;
            
            // If this is the first upload, initialize the game
            if (people.length >= 2 && currentPair.length === 0) {
                displayNewPair();
            }
        };
        
        reader.readAsDataURL(file);
    });
    
    // Reset the file input
    document.getElementById('uploadForm').reset();
}

// Add event listener for the upload form
document.getElementById('uploadForm').addEventListener('submit', handleImageUpload);

// Modify the getRandomPair function to check for minimum images
function getRandomPair() {
    if (people.length < 2) {
        alert('Please upload at least 2 images to start the game.');
        return [null, null];
    }
    
    const available = [...people];
    const person1 = available.splice(Math.floor(Math.random() * available.length), 1)[0];
    const person2 = available[Math.floor(Math.random() * available.length)];
    return [person1, person2];
}

// Modify displayNewPair to check for valid pair
function displayNewPair() {
    currentPair = getRandomPair();
    if (currentPair[0] && currentPair[1]) {
        document.getElementById('person1').src = currentPair[0].img;
        document.getElementById('person2').src = currentPair[1].img;
        document.getElementById('rating1').textContent = currentPair[0].rating;
        document.getElementById('rating2').textContent = currentPair[1].rating;
        updateLeaderboard();
    }
}

// Modify the vote function to handle smash/pass
function vote(choice, action) {
    const selectedPerson = currentPair[choice];
    const otherPerson = currentPair[choice === 0 ? 1 : 0];
    
    // Update hit/skip counts
    if (action === 'pick') {
        selectedPerson.hits++;
        otherPerson.skips++;
        updateRatings(selectedPerson, otherPerson);
    } else if (action === 'skip') {
        selectedPerson.skips++;
        otherPerson.picks++;
        updateRatings(otherPerson, selectedPerson);
    }
    
    totalVotes++;
    document.getElementById('totalVotes').textContent = totalVotes;
    
    updateLeaderboard();
    displayNewPair();
}

// Add function to update leaderboard
function updateLeaderboard() {
    const leaderboardDiv = document.getElementById('leaderboard');
    const sortedPeople = [...people].sort((a, b) => b.rating - a.rating);
    
    leaderboardDiv.innerHTML = sortedPeople.map((person, index) => `
        <div class="leaderboard-item">
            <img src="${person.img}" alt="Person ${person.id}">
            <div class="leaderboard-stats">
                <span>#${index + 1}</span>
                <span>Rating: ${person.rating}</span>
                <span>Hits: ${person.hits}</span>
                <span>Skips: ${person.skips}</span>
            </div>
        </div>
    `).join('');
}