body {
    background-color: #ffd6e7; /* Light pink background */
    font-family: 'Comic Sans MS', cursive, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s;
}

.container {
    max-width: 800px;
    padding: 20px;
}

h1 {
    color: #ff6b9d;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 2.5rem;
    margin-bottom: 40px;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

p {
    margin: 0;
    padding: 15px 30px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
    font-size: 1.2rem;
}

#yes {
    background-color: #a8e6cf;
    color: #1e6f5c;
    transform: scale(1);
    border: none;
}

#no {
    background-color: #ffaaa5;
    color: #9c0d38;
    border: none;
}

#no:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.water-gif {
    max-width: 200px;
    margin-top: 20px;
    display: none;
}