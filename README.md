# 🔥 Hit or Skip: Image Rating Game

This is a dynamic and interactive image rating web application where users can upload their own images and rank them against each other in a "Hot or Not" style competition.

---

## 🎯 Project Description

"Hit or Skip" is a fun, client-side game that allows users to determine the best image from a collection. After uploading images, the app presents two at a time, and the user chooses the "hit" or skips the pair. Behind the scenes, an **Elo rating system** adjusts the scores of the images based on the outcome of each comparison, making every choice matter. The game is built entirely on the front-end using **session storage**, meaning the leaderboard and images are unique to each user's current session.

---

## ✨ Features

* **Bulk Image Upload**: Users can easily upload multiple images from their device to begin a new game session.
* **Head-to-Head Battles**: The core of the game displays two random images for the user to compare.
* **Elo Rating System**: Each image starts with a base rating of **1400**. A win increases an image's rating while a loss decreases it, creating a fair and competitive ranking.
* **Interactive Choices**: Simple "HIT" and "SKIP" buttons make for fast-paced and intuitive gameplay.
* **Live Leaderboard**: A real-time leaderboard ranks all images by their current rating, also displaying the total number of hits and skips for each.
* **Session-Based**: The entire experience is powered by browser **session storage**, ensuring user privacy as all data is cleared when the tab is closed.

---

<img width="1497" height="968" alt="image" src="https://github.com/user-attachments/assets/568177da-4e2e-4de6-9417-aa54ccfd527e" />


---

## 💻 Technologies Used

* **HTML5**: For the core structure of the application.
* **CSS3**: For modern styling and a clean, responsive user interface.
* **JavaScript**: For all the client-side logic, including the rating algorithm, DOM manipulation, and session storage management.

---

## 🚀 How to Play

1.  **Upload Images**: Click the upload button and select a bunch of images you want to compare.
2.  **Start Comparing**: The game will automatically start, showing you two images.
3.  **Vote or Skip**:
    * Click **HIT** under the image you like more.
    * Click **SKIP** if you don't want to vote on the current pair.
4.  **Check the Leaderboard**: Watch as the ratings change and see which image climbs to the top!

