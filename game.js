const userStart = () => {
    alert('Select a clue by clicking on any point value. Point values indicate level of difficulty')
}
const letsPlay = document.querySelector('#letsPlay')

let userScore1 = document.querySelector('#p1Score')
let userScore2 = document.querySelector('#p2Score')

let player1Score = 0
let player2Score = 0

let player1Turn = true
let player2Turn = false

let answeredQuestionsCount = 0;


let btnList = []

let btnIDs = [
    '#elves100',
    '#dwarves100',
    '#hobbits100',
    '#books100',
    '#locations100',
    '#potpourri100',
    '#elves200',
    '#dwarves200',
    '#hobbits200',
    '#books200',
    '#locations200',
    '#potpourri200',
    '#elves300',
    '#dwarves300',
    '#hobbits300',
    '#books300',
    '#locations300',
    '#potpourri300',
    '#elves400',
    '#dwarves400',
    '#hobbits400',
    '#books400',
    '#locations400',
    '#potpourri400',
    '#elves500',
    '#dwarves500',
    '#hobbits500',
    '#books500',
    '#locations500',
    '#potpourri500'
]

let questions = [
    {
        title: 'Elves for 100',
        question: 'This elf was the daughter of Elrond',
        answer: 'arwen',
        points: 100,
    },
    {
        title: 'Dwarves for 100',
        question: 'Gimli was the son of this Dwarf',
        answer: 'gloin',
        points: 100,
    },
    {
        title: 'Hobbits for 100',
        question: 'This hobbit carried the One Ring to Mount Doom in order to destroy it',
        answer: 'frodo',
        points: 100,
    },
    {
        title: 'Books for 100',
        question: 'In the novel "The Fellowship of the Ring" this book depicts the celebration of Bilbo\'s eleventy first birthday',
        answer: 'the first journey',
        points: 100,
    },
    {
        title: 'Locations for 100',
        question: 'The Battle of the Hornburg took place in the valley of this location',
        answer: 'helm\'s deep',
        points: 100,
    },
    {
        title: 'Potpourri for 100',
        question: 'One Ring to rule them all, One Ring to find them, One Ring to bring them all an in the darkness `this`',
        answer: 'bind them',
        points: 100,
    },
    {
        title: 'Elves for 200',
        question: 'Elves sailed this direction to reach the Undying Lands',
        answer: 'west',
        points: 200,
    },
    {
        title: 'Dwarves for 200',
        question: 'This precious metal was highly coveted by the Dwarves of Moria',
        answer: 'mithril',
        points: 200,
    },
    {
        title: 'Hobbits for 200',
        question: 'This was the name of Bilbo Baggins literary work',
        answer: 'there and back again',
        points: 200,
    },
    {
        title: 'Books for 200',
        question: 'In this book the two Hobbits Merry and Pippin meet the Ent known as Treebeard',
        answer: 'the treason of isengard',
        points: 200,
    },
    {
        title: 'Locations for 200',
        question: 'The fortress of Isengard was located at the southern tip of this mountain range',
        answer: 'misty mountains',
        points: 200,
    },
    {
        title: 'Potpourri for 200',
        question: 'Elesar ',
        answer: 'isildur',
        points: 200,
    },
    {
        title: 'Elves for 300',
        question: 'Legolas hailed from this Elven realm',
        answer: 'mirkwood',
        points: 300,
    },
    {
        title: 'Dwarves for 300',
        question: 'This is how many Rings of Power that were given to the Dwarves',
        answer: '7',
        points: 300,
    },
    {
        title: 'Hobbits for 300',
        question: 'The longest living Hobbit was Bilbo Baggins who lived to this age',
        answer: '131',
        points: 300,
    },
    {
        title: 'Books for 300',
        question: 'This book shares the same name as the novel in which it is found',
        answer: 'the return of the king',
        points: 300,
    },
    {
        title: 'Locations for 300',
        question: 'The creatures known as Ents inhabitied this forest',
        answer: 'fangorn forest',
        points: 300,
    },
    {
        title: 'Potpourri for 300',
        question: 'In two songs from 1971: "Misty Mountain Hop" and "The Battle of Evermore" this band referenced the works of Tolkien',
        answer: 'led zeppelin',
        points: 300,
    },
    {
        title: 'Elves for 400',
        question: 'This elf was the only elf not to be given one of the Three Rings of power',
        answer: 'elrond',
        points: 400,
    },
    {
        title: 'Dwarves for 400',
        question: 'This sword was  weilded by Thorin II `Oakensheild` in the novel The Hobbit, also known as the Goblin-cleaver',
        answer: 'orcrist',
        points: 400,
    },
    {
        title: 'Hobbits for 400',
        question: 'Frodo Baggins was the son of this Hobbit',
        answer: 'drogo',
        points: 400,
    },
    {
        title: 'Books for 400',
        question: 'The story "Of Beren and Luthien are contained in this book',
        answer: 'the silmarillion',
        points: 400,
    },
    {
        title: 'Locations for 400',
        question: 'Lady Arwen crossed this river to save Frodo as she escaped the Nazgul',
        answer: 'the bruinen',
        points: 400,
    },
    {
        title: 'Potpourri for 400',
        question: 'The first film adaptation of The Hobbit was released in this year',
        answer: '1977',
        points: 400,
    },
    {
        title: 'Elves for 500',
        question: 'Galadriel was of the Wood-elves who were lesser known as these type of elves',
        answer: 'silvan',
        points: 500,
    },
    {
        title: 'Dwarves for 500',
        question: 'Thorin II was son of this Dwarf',
        answer: 'thrain ii',
        points: 500,
    },
    {
        title: 'Hobbits for 500',
        question: 'Hobbit holes were known as these',
        answer: 'smials',
        points: 500,
    },
    {
        title: 'Books for 500',
        question: 'This was the very first book J.R.R. Tokien began in 1918 but wasn\'t published until after his death in 2007',
        answer: 'the children of hurin',
        points: 500,
    },
    {
        title: 'Locations for 500',
        question: 'The Shire was located in this region of Middle-Earth',
        answer: 'eriador',
        points: 500,
    },
    {
        title: 'Potpourri for 500',
        question: 'Once he held the title of High-captain this Lord of Balrogs was responsible for killing two of the High Kings of the Noldor',
        answer: 'gothmog',
        points: 500,
    },

]

for (let i = 0; i < btnIDs.length; i++) {
    btnList.push(document.querySelector(btnIDs[i]));
}

for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', (evt) => {
        let userAnswer = prompt(questions[i].question)
        while (userAnswer === null) {
            userAnswer = prompt(questions[i].question);
        }
        if (userAnswer.toLowerCase() === questions[i].answer) {
            if (player1Turn === true) {
                player1Score += questions[i].points;
                userScore1.innerHTML = player1Score;
            }
            if (player2Turn === true) {
                player2Score += questions[i].points
                userScore2.innerHTML = player2Score
            }
        }
        togglePlayerTurn();
        evt.target.classList.add('hideButton');
        answeredQuestionsCount += 1;
        let allQuestionsAnswered = false;

        if (answeredQuestionsCount === 30) {
            allQuestionsAnswered = true;
        } else {
            allQuestionsAnswered = false;
        }
        if (allQuestionsAnswered === true) {
            if (player1Score === player2Score) {
                alert("DRAW!")
            } else if (player1Score > player2Score) {
                alert('Player 1 WINS!')
            } else {
                alert('Player 2 WINS!')
            }
        }
    });
}

const togglePlayerTurn = () => {
    if (player1Turn === true) {
        player1Turn = false;
        player2Turn = true;
    } else {
        player2Turn = false;
        player1Turn = true;
    }

}

letsPlay.addEventListener('click', goToGame)
goToGame = () => {
}