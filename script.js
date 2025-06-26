document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    let clickCount = 0;
    const maxClicks = 15;
    const scaleFactor = 1.2;

    noButton.addEventListener('click', function() {
        clickCount++;
        
        
        const currentScale = parseFloat(getComputedStyle(yesButton).transform.split(',')[3]) || 1;
        yesButton.style.transform = `scale(${currentScale * scaleFactor})`;
        
        
        const hue = 340 + (clickCount * 10);
        document.body.style.backgroundColor = `hsl(${hue}, 100%, 92%)`;
        
        
        if (clickCount >= maxClicks) {
            noButton.style.display = 'none';
            yesButton.textContent = "Okay, i will drink water";
            yesButton.style.transform = 'scale(1.5)';
            yesButton.style.backgroundColor = '#4CAF50';
            yesButton.style.color = 'white';
            
            
            const gif = document.createElement('img');
            gif.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3JldTRlbGo1cTY3MWw1cmd2NWN0ZjJ5c2Q4eXFzdW1zbW1leXlyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gHbjuTVHSmlVxRKIHb/giphy.gif';
            gif.className = 'water-gif';
            gif.alt = 'Celebration gif';
            document.querySelector('.container').appendChild(gif);
            gif.style.display = 'block';
        }
    });

    yesButton.addEventListener('click', function() {
        alert("Good Golu, Drink Water");
    });
});