//nolo froyo
//second comment

window.onload = function() {
    var myArray = [];
    var getButton = document.getElementById("btn");
    var randomNum;
    
    getButton.onclick = clickFunction;
    
    function clickFunction () {
        randomNum = Math.floor(Math.random() * 10) + 1;
        myArray.unshift(randomNum);
        console.log(myArray);
    }
    
    
}//end of onload function