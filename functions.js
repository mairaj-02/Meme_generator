// Function to clear all existing content from the meme, joke, quote, and riddle sections
function clearAll() {
    const meme_div = document.querySelector("#d-1");
    const funny_div = document.querySelector("#d-2");
    const wisdom_div = document.querySelector("#d-3");
    const riddle_div = document.querySelector("#d-4");

    // Clear the innerHTML of each div to remove all existing content
    meme_div.innerHTML = '';
    funny_div.innerHTML = '';
    wisdom_div.innerHTML = '';
    riddle_div.innerHTML = '';
}

/**
 * Displays a random programmer meme
 */
function showMeme() {
    // Clear the meme section before displaying new content
    clearAll();
    
    // Get a random meme URL from the memes array
    const randomMemeUrl = getRandomData('memes');
    
    // Create a new img element and set its src attribute to the random meme URL
    const meme_img = document.createElement('img');
    meme_img.setAttribute('src', randomMemeUrl);
    
    // Find the meme div element and append the new image to it
    const meme_div = document.querySelector("#d-1");
    meme_div.appendChild(meme_img);
}

/**
 * Displays a random joke
 */
function showJoke() {
    // Clear the joke section before displaying new content
    clearAll();
    
    // Get a random joke from the jokes array
    const randomJokeText = getRandomData('jokes');
    
    // Create a new paragraph element and set its text content to the random joke
    const funny_string = document.createElement('p');
    funny_string.textContent = randomJokeText;
    
    // Find the funny div element and append the new paragraph to it
    const funny_div = document.querySelector("#d-2");
    funny_div.appendChild(funny_string);
}

/**
 * Displays a random inspirational quote
 */
function showQuote() {
    // Clear the quote section before displaying new content
    clearAll();
    
    // Get a random quote object from the quotes array
    const randomQuote = getRandomData('quotes');
    
    // Create a new paragraph element
    const newP = document.createElement('p');
    
    // Set the text content of the paragraph to include the quote and author
    newP.textContent = randomQuote.quote + "\n" + " - " + randomQuote.author;
    
    // Find the wisdom div element and append the new paragraph to it
    const wisdom_div = document.querySelector("#d-3");
    wisdom_div.appendChild(newP);
}

/**
 * Displays a random riddle
 */
function showRiddle() {
    // Clear the riddle section before displaying new content
    clearAll();
    
    // Get a random riddle object from the riddles array
    const randomRiddle = getRandomData('riddles');
    
    // Create a new paragraph for the question
    const new_riddle = document.createElement('p');
    new_riddle.textContent = randomRiddle.question;
    
    // Create a new paragraph for the answer
    const new_answer = document.createElement('p');
    new_answer.textContent = randomRiddle.answer;
    new_answer.setAttribute('id', 'ans'); // Set an id for easy access later
    new_answer.hidden = true; // Hide the answer initially

    // Find the riddle div element and append both question and answer paragraphs
    const riddle_div = document.querySelector("#d-4");
    riddle_div.innerHTML = ''; // Clear the div before appending new content
    riddle_div.appendChild(new_riddle);
    riddle_div.appendChild(new_answer);
}

/**
 * Reveal the answer to the current riddle
 */
function revealAnswers() {
    // Find the riddle div element
    const riddle_div = document.querySelector("#d-4");
    
    // Find the paragraph containing the riddle question
    const riddle_check = riddle_div.querySelector('p');
    
    // Find the hidden answer paragraph
    const answer_check = document.querySelector('#ans');
    
    // Check if there's no riddle shown
    if (!riddle_check) {
        alert('There is no riddle shown.');
    }
    // Check if the answer is already visible
    else if (riddle_check && !answer_check.hidden) {
        alert('Answer is already shown');
    }
    // If none of the above conditions are met, show the answer
    else {
        answer_check.hidden = false;
    }
}
  
  // Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
  const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'];
  
  // Sourced from: http://www.devtopics.com/best-programming-jokes/
  const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];
  
  // source: https://www.goodreads.com/quotes/tag/programming
  const quotes = [
    { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson'},
    { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', author: 'Rick Cook' },
    { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },
    { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
    { quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
    { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },
    { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },
    { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },
    { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
    { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },
    { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },
    { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' },
  ];
  
  // Source: https://www.rd.com/list/challenging-riddles/
  const riddles = [
    { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'An echo' },
    { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A Candle' },
    { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
    { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
    { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
    { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' }
  ];
  
  
  // A little helper function to genrate a random number
  function getRandumNumber(len) {
    return Math.floor(Math.random() * len);
  }
  
  // An important function to get random data from the data object
  function getRandomData(type) {
    const items = data[type];
    return items[getRandumNumber(items.length)];
  }
  
  const data = {
    memes,
    jokes,
    quotes,
    riddles
  };