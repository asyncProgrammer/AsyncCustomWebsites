let tracker = {totalPrice:0, totalPieces:0, startingID: 1} //keeps track of a few total pieces, price, and ID

function createCabinet(originalWidth, originalHeight){ //creates the cabinet with the original measurements
    const cabinet = { originalWidth: originalWidth, originalHeight: originalHeight, width: originalWidth, height: originalHeight };
    return cabinet;
}

//gets the new values from the originals for the actual measurement with the hinge adjustment added
function findNewMeasurementsFromCabinets(cabinets, overlay){
    cabinets.forEach((cabinet) => {
        cabinet.width += (overlay * 2);
        cabinet.height += (overlay * 2);
    });
};

//display the new cabinet in the results div after it the button to add the measurements in clicked
function displayNewMeasurements(cabinets) {
    const parent = document.getElementById('results');
    
    
    cabinets.forEach((cabinet) => {
        let cabinetDiv = document.createElement('div');
        cabinetDiv.classList.add('div-cabinet');
        let cabinetOriginalWidth = cabinet.originalWidth;
        let cabinetOriginalHeight = cabinet.originalHeight;
        let cabinetId = tracker.startingID;
        let cabinetWidth = cabinet.width;
        let cabinetHeight = cabinet.height;
        let cabinetPrice = ((cabinet.height * cabinet.width) / 144) * 10.4;
        let cabinetOriginalPrice = ((cabinet.originalHeight * cabinet.originalWidth) / 144) * 10.4;
        tracker.totalPrice += cabinetPrice;
        let cabinetResults = document.createElement('p');
        cabinetResults.textContent = `ID: ${cabinetId} - Original Width And Height: ${cabinetOriginalWidth}x${cabinetOriginalHeight}. Original Price: $${cabinetOriginalPrice.toFixed(2)}`;
        let newResults = document.createElement('p');
        newResults.textContent = `With Hinges Adjustments: ${cabinetWidth}x${cabinetHeight}. Estimated Price: $${cabinetPrice.toFixed(2)}`;
        
        
        cabinetDiv.appendChild(cabinetResults);
        cabinetDiv.appendChild(newResults);
        parent.appendChild(cabinetDiv);
    });
    tracker.totalPieces = tracker.startingID;
    tracker.startingID += 1;
}


//functions being used inside of an event listener for the cabinet form that creates the item.
document.getElementById('cabinet-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const overlay = parseFloat(document.getElementById('overlay').value);

    const cabinet = createCabinet(width, height);
    const cabinets = [cabinet];
    
    findNewMeasurementsFromCabinets(cabinets, overlay);
    displayNewMeasurements(cabinets);
    let trackerDisplay = document.querySelectorAll('.tracker-results span');
    trackerDisplay[0].innerText = tracker.totalPrice.toFixed(2);
    trackerDisplay[1].innerText = tracker.totalPieces;
});




// CSV
// click event on the generate csv button
document.getElementById('generate-csv').addEventListener('click', function () {
    let csvContent = "ID,Original Width,Original Height,Adjusted Width,Adjusted Height,Original Price,Estimated Price\n";
    //The values needed if the generated CSV is going to be put into an ordering sites spreadsheet
    document.querySelectorAll('.div-cabinet').forEach((div, index) => {
        let values = div.textContent.match(/[-+]?[0-9]*\.?[0-9]+/g); // Extracts numbers
        if (values && values.length >= 6) {
            csvContent += `${index + 1},${values[0]},${values[1]},${values[2]},${values[3]},${values[4]},${values[5]}\n`;
        } //values appended 
    });

    document.getElementById('csv-output').value = csvContent;
    new bootstrap.Modal(document.getElementById('csv-modal')).show(); //using the built-in bootstrap modal 
});



// Copy CSV to clipboard
document.getElementById('copy-csv').addEventListener('click', function () {
    let csvText = document.getElementById('csv-output');
    csvText.select();
    document.execCommand('copy');
});
