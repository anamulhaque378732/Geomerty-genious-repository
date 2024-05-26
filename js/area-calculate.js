
// reusable get input value field in number
function calculateArea(input) {
    const areaCalculate = document.getElementById(input);
    const areaCalculateString = areaCalculate.value;
    const areaCalculateValue = parseFloat(areaCalculateString);
    areaCalculate.value = '';
    if (isNaN(areaCalculateValue)) {
        alert('Please insert a number');
        return;
    };
    return areaCalculateValue;
};
// reusable set span text
function showAreaField(showArea, area) {
    const showAreaValue = document.getElementById(showArea);
    showAreaValue.innerText = area;
};
// triangle area
document.getElementById('btn-triangle').addEventListener('click', function () {
    const base = calculateArea('base');
    const height = calculateArea('height');
    const triangleArea = 0.5 * base * height;
    if (isNaN(triangleArea)) {
        return;
    };
    showAreaField('show-triangle-area', triangleArea);
    // add to calculation entry
    addToCalculationEntry('Triangle', triangleArea);

});
// rectangle area 
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const rectangleLength = calculateArea('rectangle-length');
    const rectangleWidth = calculateArea('rectangle-width');
    const rectangleArea = rectangleLength * rectangleWidth;
    if (isNaN(rectangleArea)) {
        return;
    };
    // add to calculation entry
    addToCalculationEntry('Rectangle', rectangleArea)

    showAreaField('show-rectangle-area', rectangleArea);
});

// parallelogram area 
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const parallelogramBase = calculateArea('parallelogram-base');
    const parallelogramHeight = calculateArea('parallelogram-height');
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    if (isNaN(parallelogramArea)) {
        return;
    };
    addToCalculationEntry('Parallelogram', parallelogramArea)

    showAreaField('show-parallelogram-area', parallelogramArea);
});
//  rhombus area 
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const rhombusDiagonal1 = calculateArea('rhombus-diagonal1');
    const rhombusDiagonal2 = calculateArea('rhombus-diagonal2');
    const rhombusArea = rhombusDiagonal1 * rhombusDiagonal2;
    if (isNaN(rhombusArea)) {
        return;
    };
    addToCalculationEntry('Rhombus', rhombusArea);

    showAreaField('show-rhombus-area', rhombusArea);
});
// pentagon area
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const pentagon_p = calculateArea('pentagon-p');
    const pentagon_b = calculateArea('pentagon-b');
    const pentagonArea = 0.5 * pentagon_p * pentagon_b;
    if (isNaN(pentagonArea)) {
        return;
    };
    addToCalculationEntry('Pentagon', pentagonArea);
    showAreaField('show-pentagon-area', pentagonArea);
});
// ellipse area 
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const ellipse_a = calculateArea('ellipse-a');
    const ellipse_b = calculateArea('ellipse-b');
    const ellipseArea = 3.1416 * ellipse_a * ellipse_b;
    const ellipseAreaToFixed = ellipseArea.toFixed(2);
    if (isNaN(ellipseAreaToFixed)) {
        return;
    };
    addToCalculationEntry('Ellipse', ellipseArea);
    showAreaField('show-ellipse-area', ellipseAreaToFixed);
});




// ad to calculation entry
/**
 * 1. get  the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set inner html it could be dynamic template string
 * 5. append the created element as a child of the parent
 * 
 */


function addToCalculationEntry(areaType, area) {
    // console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');

    const count = calculationEntry.childElementCount;
    p.classList.add('py-4')
    p.innerHTML = ` ${count + 1}.  ${areaType} ${area} cm<sup>2</sup>  <button class="btn ml-8  btn-small btn-success"> Convert </button>
    `;
    calculationEntry.appendChild(p);
};






/** Data validation
 * 1. set the proper type of input field (number, date, email)
 * 2. cheek type using typeof
 * 3. isNaN, : NaN = Not a Number, isNaN is cheeking whether the input is not a number or not
 * 
 */