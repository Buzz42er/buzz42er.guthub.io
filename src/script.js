//slides

var imgCoreToolsArray = [
  "./slike-projekata/Snimka zaslona (16).png",
  "./slike-projekata/Snimka zaslona (11).png",
  "./slike-projekata/Snimka zaslona (8).png",
  "./slike-projekata/Snimka zaslona (20).png",
];

var imgDesignArray = [
  "./slike-projekata/Snimka zaslona (11).png",
  "./slike-projekata/Snimka zaslona (16).png",
];

var imgSupportArray = ["./slike-projekata/Snimka zaslona (12).png"];

var imgReactArray = [
  "./slike-projekata/Snimka zaslona (12).png",
  "./slike-projekata/Snimka zaslona (18).png",
];

var imgAngularArray = ["./slike-projekata/Snimka zaslona (15).png"];

var imgjQueryArray = ["./slike-projekata/Snimka zaslona (15).png"];
//number for compare place of item in array
var numCT = 0,
  numD = 0,
  numS = 0,
  numR = 0,
  numA = 0,
  numQ = 0;

//function for button before
function beforeCT() {
  //getting img in html
  var imgCoreTools = document.getElementById("imgCoreTools");
  //when clicked num will subtract 1 from itself
  numCT--;
  //if num is less then 0
  if (numCT < 0) {
    //img length bil subtract 1 from itself
    numCT = imgCoreToolsArray.length - 1;
  }
  //exchange current imgSlider sorce with sam number in array as num
  imgCoreTools.src = imgCoreToolsArray[numCT];
  console.log(imgCoreToolsArray[numCT]);
}

//function for button next
function afterCT() {
  //get imgSlider in a var
  var imgCoreTools = document.getElementById("imgCoreTools");
  //when clicked add 1 to num
  numCT++;

  //if num is larger then or equle value 3 exchange value of num with 0
  if (numCT >= imgCoreToolsArray.length) {
    numCT = 0;
  }
  //exchange imgSlider sorce with img array's item with same value as num
  imgCoreTools.src = imgCoreToolsArray[numCT];
}

function beforeD() {
  var imgDesign = document.getElementById("imgDesign");
  numD--;

  if (numD < 0) {
    numD = imgDesignArray.length - 1;
  }
  imgDesign.src = imgDesignArray[numD];
  console.log(imgDesignArray[numD]);
}

//create array of pictures that you wanna slide
//create number var that you can compare with position of item in array

//create a function for onclick event
//put img that you wanna slide inside of a var
//subtract 1 from num var
//if num is less then 0
//make num equle to array lenght
//replace img src with array item that has same place value as num

function afterD() {
  var imgDesign = document.getElementById("imgDesign");
  numD++;

  if (numD >= imgDesignArray.length) {
    numD = 0;
  }
  imgDesign.src = imgDesignArray[numD];
}

function beforeS() {
  var imgSupport = document.getElementById("imgSupport");
  numS--;

  if (numS < 0) {
    numS = imgSupportArray.length - 1;
  }
  imgSupport.src = imgSupportArray[numS];
}

function afterS() {
  var imgSupport = document.getElementById("imgSupport");
  numS++;

  if (numS >= imgSupportArray.length) {
    numS = 0;
  }
  imgSupport.src = imgSupportArray[numS];
}

function beforeR() {
  var imgReact = document.getElementById("imgReact");
  numR--;

  if (numR < 0) {
    numR = imgReactArray.length - 1;
  }
  imgReact.src = imgReactArray[numR];
}

function afterR() {
  var imgReact = document.getElementById("imgReact");
  numR++;

  if (numR >= imgReactArray.length) {
    numR = 0;
  }
  imgReact.src = imgReactArray[numR];
}

function beforeA() {
  var imgAngular = document.getElementById("imgAngular");
  numA--;

  if (numA < 0) {
    numA = imgAngularArray.length - 1;
  }
  imgAngular.src = imgAngularArray[numA];
}

function afterA() {
  var imgAngular = document.getElementById("imgAngular");
  numA++;

  if (numA >= imgAngularArray.length) {
    numA = 0;
  }
  imgAngular.src = imgAngularArray[numA];
}

function beforeQ() {
  var imgjQuery = document.getElementById("imgjQuery");
  numQ--;

  if (numQ < 0) {
    numQ = imgjQueryArray.length - 1;
  }
  imgjQuery.src = imgjQueryArray[numQ];
}

function afterQ() {
  var imgjQuery = document.getElementById("imgjQuery");
  numQ++;

  if (numQ >= imgjQueryArray.length) {
    numQ = 0;
  }
  imgjQuery.src = imgjQueryArray[numQ];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//nav popup

const navHover = function navHover() {
    const nav = document.getElementById("nav");

    nav.style.transition = "all 1s";
  
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Menu button

function openNav() {
  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("nav");

  menuButton.addEventListener("click", function () {
    nav.style.height = "50px";
    console.log("to 50px");

    setTimeout(function navBackDown() {
      nav.style.height = "10px";
      console.log("to 10px");
    }, 600);
  });
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
