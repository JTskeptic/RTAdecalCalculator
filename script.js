
document.querySelector('#submitButton').addEventListener("click", function(){

    //first I will grab all of the inputs from the user
    var height = parseFloat(document.querySelector('#height').value);
    var width = parseFloat(document.querySelector('#width').value);
    var quantity = parseFloat(document.querySelector('#quantity').value);
    var price = parseFloat(document.querySelector('#price').value);

    //here, I will initialize the vinyl width
    var vinylPrintableWidth = 52;

    //now let's get an idea of how many we can fit on the vinyl with some spacing added

    if (height >= 50.1) {
        height = 0;
    } else {
        height = height + 0.5; //height + spacing        
    }
    console.log(height);
    
    if (width >= 50.1) {
        width = 0;
    } else {
        width = width + 0.5; //width + spacing
    }
    console.log(width);

    quantity = Math.ceil(quantity);
    console.log('quantity needed is ' + quantity);

    var decalsPerRow = 0;

    if (height < (width/2)) {
        decalsPerRow = Math.floor(vinylPrintableWidth / width);
    } else if (width < (height/2)) {
        decalsPerRow = Math.floor(vinylPrintableWidth / height);
    } else {
        decalsPerRow = Math.floor(vinylPrintableWidth / height);
    }

    console.log("decals per row = " + decalsPerRow);
    
    //how many rows will we need?

    var rowsNeeded = 1; //by default we need at least 1 row

    rowsNeeded = Math.ceil(quantity / decalsPerRow);

    console.log("rows needed to get quantity = " + rowsNeeded);

    var finalQuantity = rowsNeeded * decalsPerRow;

    //now we determine the total sqft of the job

    var rowWidth = 0;

    if (height < (width/2)) {
        rowWidth = height;
    } else {
        rowWidth = width;
    }

    var sqft = Math.ceil(((rowWidth * rowsNeeded) * 54) / 144);

    console.log("the job sqft total is " + sqft);

    var totalPrice = (sqft * price).toFixed(2);
    var eachPrice = ((sqft * price) / quantity).toFixed(2);

    //the formatter below is to make all of the dollar amounts appear properly

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    document.querySelector('#final-price').innerHTML = formatter.format(totalPrice);

    document.querySelector('#final-price-each').innerHTML = formatter.format(eachPrice) + ' each decal';

    document.querySelector('#final-sqft').innerHTML = sqft + 'sqft total';

    document.querySelector('#final-quantity').innerHTML = finalQuantity + ' actual quantity';

    });

    //dark mode toggle

    let root = document.documentElement;
    let currentStyle = window.getComputedStyle;

    document.getElementById('dark-light').addEventListener ('click', () => {

        if (root.style.getPropertyValue('--main-bg-color') === '#efeff0') {
            root.style.setProperty('--main-bg-color', '#333');
        } else {
            root.style.setProperty ('--main-bg-color', '#efeff0');
        }
        
        if (root.style.getPropertyValue('--darker-bg-color') === '#eeeeee') {
            root.style.setProperty('--darker-bg-color', '#1f1f1f');
        } else {
            root.style.setProperty('--darker-bg-color', '#eeeeee');
        }

        if (root.style.getPropertyValue('--dark-accent-color') === 'rgba(60,60,60,0.5)') {
            root.style.setProperty('--dark-accent-color', '#1f1f1f');
        } else {
            root.style.setProperty ('--dark-accent-color', 'rgba(60,60,60,0.5)');
        }

        if (root.style.getPropertyValue('--light-accent-color') === 'rgba(255,255,255,0.5)') {
            root.style.setProperty('--light-accent-color', 'rgba(45,45,45,0.5)');
        } else {
            root.style.setProperty ('--light-accent-color', 'rgba(255,255,255,0.5)');
        }

        if (root.style.getPropertyValue('--dark-text') === 'rgba(60,60,60,0.5)') {
            root.style.setProperty('--dark-text', 'rgba(255,255,255,0.5)');
        } else {
            root.style.setProperty ('--dark-text', 'rgba(60,60,60,0.5)');
        }

    });
