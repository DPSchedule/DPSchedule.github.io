

let labList = ["EML","Thinker Space","EMM","EMF","Kid Science","Scipod Level 2","Scipod Level 1","Scipod Level 3"]
var arr = [];

function generateSchedules(fhdv,shdv,fdv){
    renderTable(["Team Member","9:15-10:00","10:00-11:00","11:00-11:30","11:30-12:00","12:00-12:30","12:30-1:00","1:00-1:30","1:30-2:00","2:00-3:00","3:00-4:00","4:00-4:30"])
    generateTable(fhdv,shdv,fdv)
}

function generateTable(fhdv,shdv,fdv) {
    var labColumn = []
    for (var u = 0; u < ((fhdv + shdv + fdv)*11); u++){
        if (((u+1) % (fhdv + shdv + fdv)) == 0){
            arr = [];
        }
        labColumn.push(generateLabValue(fhdv,shdv,fdv,labColumn))
    }

}

function splitArray(fhdv1,shdv1,fdv1,labColumn1){
    const arr2 = [];
    for(var t = 0; t < labColumn1.length/(fhdv1+shdv1+fdv1); t++){
        for(var e = 0; e < labColumn1.length/(fhdv1+shdv1+fdv1); e++){
            arr2.push(labColumn1[e*(fhdv1+shdv1+fdv1)]);
            labColumn1.splice(e*(fhdv1+shdv1+fdv1),1)
        }
        arr2 = [];
        renderTable(arr2);
    }
}

function generateLabValue() {
    var labValue;
    while (true){
        labValue = randomAssignments(Math.floor(Math.random() * 39) + 1)
        if(labValue === ""){
            continue
        } else {
            return labValue
        }
    }
}

function randomAssignments(number){

    switch(number) {
        case 1:
            if(isInArray("Scipod Level 3")){
                return ""
            } else {
                arr.push("Scipod Level 3");       
                return "Scipod Level 3"
            }
        case (number >=2 && number <=3):
            if(isInArray("Scipod Level 1")){
                return ""
            } else {
                arr.push("Scipod Level 1");
                return "Scipod Level 1"
            }

        case (number >=4 && number <=6):
            if(isInArray("Scipod Level 2")){
                return ""
            } else {
                arr.push("Scipod Level 2")
                return "Scipod Level 2"
            }

        case (number >=7 && number <=10):
            if(isInArray("Kid Science")){
                return ""
            } else {
                arr.push("Kid Science")
                return "Kid Science"

            }

        case (number >=11 && number <=15):
            if(isInArray("EMF")){
                return ""
            } else {
                arr.push("EMF")
                return "EMF"
            }

        case (number >=16 && number <=21):
            if(isInArray("EMM")){
                return ""
            } else {
                arr.push("EMM")
                return "EMM"
            }

        case (number >=22 && number <=28):
            if(isInArray("Thinker Space")){
                return ""
            } else {
                arr.push("Thinker Space")
                return "Thinker Space" 
            }

        case (number >=29 && number <=39):
            if(isInArray("EML")){
                return ""
            } else {
                arr.push("EML")
                return "EML"
            }
        }
    }

function isInArray(valToCheck){
    for (var i = 0; i < arr.length; i++) {
        if(valToCheck === arr[i]){
            return true
        }
    }
    return false
}

