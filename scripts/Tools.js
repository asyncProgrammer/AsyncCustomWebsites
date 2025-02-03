const tools = [];
const toolsContainerConstructor = new ShowCaseConstructor();


toolsContainerConstructor.createShowCaseContainer('Color Pallet Copier',
    '../images/colorPalletToolIMG.jpg',
    'A tool made created to aid developers and designers find color pallets they want to use for their projects - (JS, HTML, CSS)',
    'https://wizardsprogramming.github.io/ColorPaletteViewer/', tools);

    toolsContainerConstructor.createShowCaseContainer('Futhark Rune Reader',
        '../images/futharkToolIMG.jpg',
        'A Futhark Rune based fortune teller - (JS, HTML, CSS)',
        'https://wizardsprogramming.github.io/FutharkFortuneTeller', tools);

toolsContainerConstructor.createShowCaseContainer('Refacing Cabinet Estimator with CSV generation',
    '../images/kitchenCabinetTools.jpg',
    'A tool made to help individuals do the kitchen cabinet refacing process without needing to pay for an estimate - (JS, HTML, CSS)',
    './cabinetPriceEstimator/index.html', tools);

toolsContainerConstructor.createShowCaseContainer('Basic Inventory Management Application',
    '../images/productManagmentWebsiteIMG.jpg',
    'A tool made created for small businesses to manage products. (Basic Version, a paid version is available with requests for additional features) - (React)',
    'https://wizardsprogramming.github.io/inventoryManagement/', tools);


toolsContainerConstructor.putAllShowCasesOnPage(tools, document.querySelector('.showcase-tools'));
console.log(tools);


