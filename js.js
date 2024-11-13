const quotes = [
    { text: "A luta contra o racismo é uma luta de todos.", author: "Nelson Mandela" },
    { text: "Você tem que agir como se fosse possível transformar radicalmente o mundo. E você tem que fazer isso o tempo todo.", author: "Angela Davis" },
    { text: "A ignorância aliada ao poder é o inimigo mais feroz que a justiça pode ter.", author: "James Baldwin" },
    { text: "Não sou livre enquanto outra mulher for prisioneira, mesmo que as correntes dela sejam diferentes das minhas.", author: "Audre Lorde" },
    { text: "A história é feita por aqueles que dizem não.", author: "Malcolm X" },
    { text: "“A Educação Antirracista dá oportunidade para todos os que estão no ambiente escolar terem uma aprendizagem digna, feliz, igualitária e equânime.”", author: "Rosa Margarida de Carvalho Rocha" }
];

let currentQuoteIndex = 0;

function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    document.getElementById("quote-text").textContent = `"${quotes[currentQuoteIndex].text}"`;
    document.getElementById("quote-author").textContent = `— ${quotes[currentQuoteIndex].author}`;
}
