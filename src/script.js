var imgCoreToolsArray = [
    './slike-projekata/Snimka zaslona (16).png',
    './slike-projekata/Snimka zaslona (11).png',
    './slike-projekata/Snimka zaslona (8).png',
    './slike-projekata/Snimka zaslona (20).png',

]

var imgDesignArray = [
    './slike-projekata/Snimka zaslona (11).png',
    './slike-projekata/Snimka zaslona (16).png'
]

var imgSupportArray = [
    './slike-projekata/Snimka zaslona (12).png'


]


var imgReactArray = [
    './slike-projekata/Snimka zaslona (12).png',
    './slike-projekata/Snimka zaslona (18).png'
    

]

var imgAngularArray = [
    './slike-projekata/Snimka zaslona (15).png',
    './slike-projekata/Snimka zaslona (15).png',
    './slike-projekata/Snimka zaslona (15).png'

]

var imgRubyjQueryArray = [
    './slike-projekata/Snimka zaslona (15).png',
    './slike-projekata/Snimka zaslona (15).png',
    './slike-projekata/Snimka zaslona (15).png'

]
//number for compare place of item in array
var numCT, numD, numS, numR, numA, numQ = 0


//function for button before
function beforeCT() {
    //getting img in html
    var imgCoreTools = document.getElementById('imgCoreTools')
    //when clicked num will subtract 1 from itself
    numCT--
    //if num is less then 0
    if (numCT < 0) {
        //img length bil subtract 1 from itself
        numCT = imgCoreToolsArray.length-1 
    }
    //exchange current imgSlider sorce with sam number in array as num
    imgCoreTools.src = imgCoreToolsArray[numCT]   
    console.log(imgCoreToolsArray[numCT])
}

//function for button next
function afterCT() {
    //get imgSlider in a var
    var imgCoreTools = document.getElementById('imgCoreTools')
    //when clicked add 1 to num
    numCT++

    //if num is larger then or equle value 3 exchange value of num with 0
    if (numCT >= imgCoreToolsArray.length) {
        numCT = 0
    }
    //exchange imgSlider sorce with img array's item with same value as num
    imgCoreTools.src = imgCoreToolsArray[numCT]
}