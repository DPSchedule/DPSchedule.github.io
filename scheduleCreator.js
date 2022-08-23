

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
    for (var u = 0; u <  ((fhdv + shdv + fdv)*11 ); u++){
        labColumn.push(generateLabValue())
        if (((u+1) % (fhdv + shdv + fdv)) == 0){
            arr.length = 0;
        }
    }
    splitArray(fhdv,shdv,fdv,labColumn)
}

function splitArray(fhdv1,shdv1,fdv1,labColumn1){
    var fhdv2 = fhdv1
    var shdv2 = shdv1
    var fdv2 = fdv1 
    var arr2 = [];
    var passOn1 = true; 
    for(var t = 0; t < (fhdv1 + shdv1 + fdv1); t++){
        for(var w = 0; w < 11; w++) {
            
            arr2.push(labColumn1[(fhdv1 + shdv1 + fdv1)*w+t])
        }
        arr2.unshift("")

        if (fhdv2 > 0 && passOn1) {
            for (var l = 7; l < 12; l++){
                arr2[l] = "";
            }
            fhdv2--
            passOn1 = false
        }

        if (shdv2 > 0 && passOn1){
            for (var r = 0; r < 5; r++){
                arr2[r] = "";
            }
            shdv2--
            passOn1 = false
        }
        if (fdv2 > 0 && passOn1){
            arr2[6] = "Lunch"
            fdv2--
        }
        addToTable(arr2)
        passOn1 = true
        arr2.length = 0;
    }    
}

function generateLabValue() {
    var labValue;
    var randomNumber;
    while (true){
        randomNumber = (Math.floor(Math.random() * 39) + 1)
        labValue = randomAssignments(randomNumber)
        if(labValue == ""){
            continue
        } else {
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
                return "Scipod Level 3"
            }
        case ((number >=2) && (number <=3)):
            var value = isInArray("Scipod Level 1")
            if(value){
                return ""
            } else {
                arr.push("Scipod Level 1")
                return "Scipod Level 1"
            }

        case ((number >=4) && (number <=6)):
            var value = isInArray("Scipod Level 2")
            if(value){
                return ""
            } else {
                arr.push("Scipod Level 2")
                return "Scipod Level 2"
            }

        case ((number >=7) && (number <=10)):
            var value = isInArray("Kid Science")
            if(value){
                return ""
            } else {
                arr.push("")
                return "Kid Science"
            }

        case ((number >=11) && (number <=15)):
            var value = isInArray("EMF")
            if(value){
                return ""
            } else {
                arr.push("EMF")
                return "EMF"
            }

        case ((number >=16) && (number <=21)):
            var value = isInArray("EMM")
            if(value){
                return ""
            } else {
                arr.push("EMM")
                return "EMM"
            }

        case ((number >=22) && (number <=28)):
            var value = isInArray("Thinker Space")
            if(value){
                return ""
            } else {
                arr.push("Thinker Space")
                return "Thinker Space" 
            }

        case ((number >=29) && (number <=39)):
            var value = isInArray("EML")
            if(value){
                return ""
            } else {
                arr.push("EML")
                return "EML"
            }
        }
    }

function isInArray(valToCheck){
    return arr.includes(valToCheck)
    
}

function addToTable(array){
    createTableHeadRow();
    addTableHeaders(array);
    appendAll();
}

