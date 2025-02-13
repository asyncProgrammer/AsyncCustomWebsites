let games = [];

const gamesContainerConstructor = new ShowCaseConstructor();

gamesContainerConstructor.createShowCaseContainer('Color Cache (Mobile)','../images/games/colorCacheImage.jpg',
    'A game designed to improve pattern recognition and memory. - (JS, HTML, CSS)','https://alexisgood100.github.io/colorCacheMobile/', games);


gamesContainerConstructor.createShowCaseContainer('Word To Number','../images/games/wordsToNumbersIMG.jpg',
        'A game designed to teach pattern recognition and quick thinking. Convert words to numbers using a table of letter values - (HTML, CSS, JavaScript).','https://alexisgood100.github.io/WordToNumber/', games);


    gamesContainerConstructor.createShowCaseContainer('Color Cache (Desktop)','../images/games/colorCacheImage.jpg',
        'A game designed to improve pattern recognition and memory. - (JS, HTML, CSS)','https://alexisgood100.github.io/ColorCacheFree/', games);

        gamesContainerConstructor.createShowCaseContainer('Synonymous Sentence','../images/games/synonWebsiteIMG.jpg',
            'A game designed to improve your ability to make similar sentences. - (JS, HTML, CSS)','https://wizardsprogramming.github.io/SynonymousSentences/', games);

            gamesContainerConstructor.createShowCaseContainer('Basic Stock Market Simulator Game','../images/games/stockmarketGameIMG.jpg',
                'A game designed to mock selling and buying stocks that change prices. Aim for five minutes and getting a higher than starting amount. - (React).','https://wizardsprogramming.github.io/stockmarketgame/', games);

gamesContainerConstructor.putAllShowCasesOnPage(games, document.querySelector('.showcase-games'));
console.log(games);

