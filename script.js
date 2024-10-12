const quotes = [
    "Bitcoin is the digital gold of the future.",
    "Ethereum is the world's decentralized computer.",
    "The future of finance is decentralized.",
    "Investing in crypto is investing in the future.",
    "Blockchain will change the world forever.",
    "Crypto: the currency of tomorrow.",
    "Smart contracts are the new normal.",
    "In crypto we trust.",
    "DeFi will disrupt traditional finance.",
    "NFTs are changing the art world."
];

document.getElementById('generateButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
});
