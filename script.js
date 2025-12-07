const quotes = [
    { text: "In mathematics, you don’t understand things. You just get used to them.", author: "John von Neumann" },
    { text: "A mathematician is a blind man in a dark room looking for a black cat which isn't there.", author: "Charles Darwin" },
    { text: "There are three kinds of lies: lies, damned lies, and statistics.", author: "Mark Twain (attributed to Benjamin Disraeli)" },
    { text: "If I were again beginning my studies, I would follow the advice of Plato and start with mathematics.", author: "Galileo Galilei" },
    { text: "I have heard that [a former student] has become a poet. I can well believe it; he did not have enough imagination to be a mathematician.", author: "David Hilbert" },
    { text: "Arithmetic is being able to count up to twenty without taking off your shoes.", author: "Mickey Mouse" },
    { text: "Mathematics is the only science where one never knows what one is talking about nor whether what is said is true.", author: "Bertrand Russell" },
    { text: "Black holes are where God divided by zero.", author: "Steven Wright" },
    { text: "The difference between the poet and the mathematician is that the poet tries to get his head into the heavens while the mathematician tries to get the heavens into his head.", author: "G.K. Chesterton" },
    { text: "God exists since mathematics is consistent, and the Devil exists since we cannot prove it.", author: "André Weil" },
    { text: "Mathematics is the language with which God has written the universe.", author: "Galileo Galilei" },
    { text: "Mathematics, rightly viewed, possesses not only truth, but supreme beauty—a beauty cold and austere, like that of sculpture.", author: "Bertrand Russell" },
    { text: "It is impossible to be a mathematician without being a poet in soul.", author: "Sofia Kovalevskaya" },
    { text: "An equation for me has no meaning unless it expresses a thought of God.", author: "Srinivasa Ramanujan" },
    { text: "The moving power of mathematical invention is not reasoning but imagination.", author: "Augustus De Morgan" },
    { text: "May not music be described as the mathematics of the sense, mathematics as music of the reason?", author: "James Joseph Sylvester" },
    { text: "The study of mathematics, like the Nile, begins in minuteness but ends in magnificence.", author: "Charles Caleb Colton" },
    { text: "Pure mathematics is, in its way, the poetry of logical ideas.", author: "Albert Einstein" },
    { text: "The beauty of mathematics only shows itself to more patient followers.", author: "Maryam Mirzakhani" },
    { text: "Algebra is nothing more than geometry, in words; geometry is nothing more than algebra, in pictures.", author: "Sophie Germain" },
    { text: "God does not care about our mathematical difficulties. He integrates empirically.", author: "Albert Einstein" },
    { text: "Mathematics is the art of giving the same name to different things.", author: "Henri Poincaré" },
    { text: "Geometry is knowledge of the eternally existent.", author: "Plato" },
    { text: "No human investigation can be called true science without passing through mathematical tests.", author: "Leonardo da Vinci" },
    { text: "Mathematics is the queen of the sciences and number theory is the queen of mathematics.", author: "Carl Friedrich Gauss" },
    { text: "To isolate mathematics from the practical demands of the sciences is to invite the sterility of a cow that is no longer pregnant with none but ghosts.", author: "Pafnuty Chebyshev" },
    { text: "Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.", author: "Shakuntala Devi" },
    { text: "Just as a musician can hear the notes on a page, a mathematician can see the logic in an equation.", author: "Marcus du Sautoy" },
    { text: "One of the most amazing things about mathematics is the people who do it.", author: "Lárus Thorlacius" },
    { text: "Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them.", author: "Joseph Fourier" },
    { text: "Q.E.D.", author: "Euclid (Quod Erat Demonstrandum)" },
    { text: "I think, therefore I am.", author: "René Descartes" },
    { text: "Eureka!", author: "Archimedes" },
    { text: "Number is the ruler of forms and ideas.", author: "Pythagoras" },
    { text: "Mathematics is the music of reason.", author: "James Joseph Sylvester" },
    { text: "Calculus is the most powerful weapon of thought yet devised by the wit of man.", author: "W.B. Smith" },
    { text: "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.", author: "William Paul Thurston" },
    { text: "A proof tells us where to concentrate our doubts.", author: "Morris Kline" },
    { text: "Nature is written in mathematical language.", author: "Galileo Galilei" },
    { text: "Mathematics involves no patents.", author: "Craig Venter" },
    { text: "A mathematician is a machine for turning coffee into theorems.", author: "Alfréd Rényi" },
    { text: "My brain is open.", author: "Paul Erdős" },
    { text: "Clouds are not spheres, mountains are not cones, coastlines are not circles, and bark is not smooth, nor does lightning travel in a straight line.", author: "Benoît Mandelbrot" },
    { text: "If you ask a mathematician to solve a problem, he will first show you that the problem is unsolved, then he will show you that it is unsolvable.", author: "Anonymous" },
    { text: "There is no branch of mathematics, however abstract, which may not some day be capable of application to phenomena of the real world.", author: "Nikolai Lobachevsky" },
    { text: "There was a young lady named Bright,\nWho traveled much faster than light.\nShe started one day\nIn a relative way,\nAnd returned on the previous night.", author: "A.H. Reginald Buller" },
    { text: "A sphere is a shape that’s quite rare,\nWith a surface that’s perfectly bare.\nNo corners or edges,\nNo angles or ledges,\nJust a curve that is perfectly fair.", author: "Unknown" },
    { text: "It’s a number commonly seen,\nCalculated by man and machine.\nStarts with 3 point 1 4,\nBut there’s infinitely more,\nIt’s the circle’s ratio supreme.", author: "Unknown" },
    { text: "A mathematician named Phipps,\nDrank coffee in small little sips.\n'For a mug,' he would say,\n'Is a donut today,\nIf you look at the geometry of lips!'", author: "Unknown" },
    { text: "There was an old fellow named Euclid,\nWho looked at a circle and drew lid.\n'The radius,' said he,\n'Is as plain as can be,\nWhatever the size of the new lid.'", author: "Unknown" }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const buttonElement = document.getElementById('new-quote-btn');

function generateQuote() {
    // Basic random selection
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Fade out effect
    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        // Handle newlines for limericks
        quoteElement.innerText = selectedQuote.text;
        authorElement.innerText = `— ${selectedQuote.author}`;
        
        // Fade in
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 300); // 300ms matches the transition time usually, can be tweaked
}

// Add CSS transition for opacity for the smooth fade effect
quoteElement.style.transition = "opacity 0.3s ease";
authorElement.style.transition = "opacity 0.3s ease";

// Event listener
buttonElement.addEventListener('click', generateQuote);

// Initial quote on load
window.onload = generateQuote;
