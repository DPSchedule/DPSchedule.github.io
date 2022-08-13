

let labList = ["EML","Thinker Space","EMM","EMF","Kid Science","Scipod Level 2","Scipod Level 1","Scipod Level 3"]
var arr = [];

function generateSchedules(fhdv,shdv,fdv){
    arr.length = 0;
    renderTable(["Team Member","9:15-10:00","10:00-11:00","11:00-11:30","11:30-12:00","12:00-12:30","12:30-1:00","1:00-1:30","1:30-2:00","2:00-3:00","3:00-4:00","4:00-4:30"])
    addToTable(["","MOD","","","","","","","","","",""])
    generateTable(fhdv,shdv,fdv)
    
}

function generateTable(fhdv,shdv,fdv) {
    var labColumn = [];
    for (var u = 0; u < ((fhdv + shdv + fdv)*11); u++){
        
        labColumn.push(generateLabValue())
        console.log("LAB COLUMNN: ")
        console.log(labColumn)
        if (((u+1) % (fhdv + shdv + fdv)) == 0){
            arr.length = 0;
            console.log("u = " + u)
        }
    }
    splitArray(fhdv,shdv,fdv,labColumn)
}
// SOMETHING WRONG WITH METHOD BELOW

function splitArray(fhdv1,shdv1,fdv1,labColumn1){
    var arr2 = [];
    var passOn1 = true; 
    console.log("SPLIT ARRAY");
    for(var t = 1; t <= labColumn1.length; t++){
    
        arr2.push(labColumn1[t-1])
        if (t % 11 == 0){
            arr2.unshift("")

            if (fhdv1 > 0 && passOn1) {
                for (var l = 7; l < 12; l++){
                    arr2[l] = "";
                }
                fhdv1--
                addToTable(arr2)
                
                passOn1 = false
                
                
            }

            if (shdv1 > 0 && passOn1){
                for (var r = 0; r < 5; r++){
                    arr2[r] = "";
                }
                shdv1--
                addToTable(arr2)
                passOn1 = false
               
            }

            if (fdv1 > 0 && passOn1){
                arr2[6] = "Lunch"
                fdv1--
                addToTable(arr2)
                if (fdv1 > 0){
                    passOn1 = false
                } else {
                    passOn1 = true
                }
            }
            passOn1 = true
            arr2.length = 0;
        }
    }    
}

function generateLabValue() {
    var labValue;
    var randomNumber;
    while (true){
        randomNumber = (Math.floor(Math.random() * 39) + 1)
        console.log(randomNumber)
        labValue = randomAssignments(randomNumber)
        if(labValue == ""){
            continue
        } else {
            console.log(labValue)
            return labValue
        }
    }
}

function randomAssignments(number){

    switch(true) {
        case (number === 1):
            var value = isInArray("Scipod Level 3")
            if(value){
                return ""
            } else {
                arr.push("Scipod Level 3")
                console.log("IN SWITCH CASE")
                console.log(arr)       
                return "Scipod Level 3"
            }
        case ((number >=2) && (number <=3)):
            var value = isInArray("Scipod Level 1")
            if(value){
                return ""
            } else {
                arr.push("Scipod Level 1")
                console.log("IN SWITCH CASE")
                console.log(arr)   
                return "Scipod Level 1"
            }

        case ((number >=4) && (number <=6)):
            var value = isInArray("Scipod Level 2")
            if(value){
                return ""
            } else {
                arr.push("Scipod Level 2")
                console.log("IN SWITCH CASE")
                console.log(arr)   
                return "Scipod Level 2"
            }

        case ((number >=7) && (number <=10)):
            var value = isInArray("Kid Science")
            if(value){
                return ""
            } else {
                arr.push("")
                console.log("IN SWITCH CASE")
                console.log(arr)   
                return "Kid Science"
            }

        case ((number >=11) && (number <=15)):
            var value = isInArray("EMF")
            if(value){
                return ""
            } else {
                arr.push("EMF")
                console.log("IN SWITCH CASE")
                console.log(arr)   
                return "EMF"
            }

        case ((number >=16) && (number <=21)):
            var value = isInArray("EMM")
            if(value){
                return ""
            } else {
                arr.push("EMM")
                console.log("IN SWITCH CASE")
                console.log(arr)   
                return "EMM"
            }

        case ((number >=22) && (number <=28)):
            var value = isInArray("Thinker Space")
            if(value){
                return ""
            } else {
                arr.push("Thinker Space")
                console.log("IN SWITCH CASE")
                console.log(arr)   
                return "Thinker Space" 
            }

        case ((number >=29) && (number <=39)):
            var value = isInArray("EML")
            if(value){
                return ""
            } else {
                arr.push("EML")
                console.log("IN SWITCH CASE")
                console.log(arr)   
                return "EML"
            }
        }
    }

function isInArray(valToCheck){
    console.log("THE ARRAY:")
    console.log(arr)
    console.log("IS IN ARRAY: " + arr.includes(valToCheck))
    return arr.includes(valToCheck)
    
}

function addToTable(array){
    createTableHeadRow();
    addTableHeaders(array);
    appendAll();
}

