const websites = [];
const websiteContainerConstructor = new ShowCaseConstructor();
const websites2 = [];
const websiteContainerConstructor2 = new ShowCaseConstructor();

websiteContainerConstructor.createShowCaseContainer('Logo & Background Creation','../images/wizardsWebsiteLogo.jpg',
    'A website designed to showcase custom logos & mobile/desktop backgrounds. (JS, HTML, CSS)','https://wizardsprogramming.github.io/custom-web-sites/', websites);

websiteContainerConstructor.createShowCaseContainer('Happy Dogs','../images/dogWalkingLogoForNextDoor.jpg',
    'A website designed to promote a small dog walking business.','https://happydogwalker.github.io/dogWalkingServices/', websites);

    websiteContainerConstructor.createShowCaseContainer('StoneWorkers Mock Landing Page','../images/brickwork2.jpg',
        'A website designed to promote a potential stoneworker company.','https://wizardsProgramming.github.io/masonsite/', websites);


// websiteContainerConstructor.createShowCaseContainer('Sacred Flame Productions','../images/sacredFlameProductions.jpg',
//     'A website designed to promote a small occult business.','', websites);


websiteContainerConstructor.createShowCaseContainer('Blood Coin','../images/bloodCoinWebsiteIMG.jpg',
    'A mock website for making plasma donations for crypto coins. - (React)','https://wizardsprogramming.github.io/bloodCoin/', websites2);

websiteContainerConstructor.createShowCaseContainer('Landscaping Co.','../images/landscapingWebsiteIMG.jpg',
    'A mock website designed for a small landscaping business (could be expanded upon for more functionality.) - (React)','https://wizardsprogramming.github.io/landscaping-mock/', websites2);


// websiteContainerConstructor.createShowCaseContainer('Our House Kids Books','../images/ourHousewebsiteIMG.jpg',
//     'A website designed to promote a company that writes kids books about dogs. (JS, HTML, CSS)','https:/alexisgood100.github.io/refactored-octo-waddle/', websites);
    
    websiteContainerConstructor.createShowCaseContainer('Monster Creator','../images/monsterCreatorSiteIMG.jpg',
        'A website designed to promote a company that sells custom monsters with removed backgrounds for games and stories. (React) ','https://wizardsprogramming.github.io/monster-creator/', websites2);


        websiteContainerConstructor2.putAllShowCasesOnPage(websites, document.querySelector('.showcase-websites-2'));
console.log(websites);
