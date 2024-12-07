const express = require('express');
const app = express();

// Funkce pro výpočet zbývajícího času do 24. 12. 2024
function calculateTimeUntilChristmas() {
    const now = new Date();
    const christmas = new Date('2024-12-24T00:00:00Z');
    const diff = christmas - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} dní, ${hours} hodin a ${minutes} minut do Vánoc!`;
}

// Webhook pro získání času do Vánoc
app.get('/vanoce', (req, res) => {
    const message = calculateTimeUntilChristmas();
    res.send(message);  // Odeslání odpovědi jako text
});

// Spuštění serveru
app.listen(3000, () => {
    console.log('Server běží na http://localhost:3000');
});
