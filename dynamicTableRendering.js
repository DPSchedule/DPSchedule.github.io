var masterTableDiv;
var scoreboardTable;
var scoreboardTableHead;
var scoreboardTableHeaderRow;
var scoreboardTableBody;
var scoreHeader;
var input;
var boolean;
var counter = 1; 


function renderTable (tableHeaders){   

    masterTableDiv = document.querySelector('.master_Table')

    createTable();

    createTableHead();

    createTableHeadRow();

    
    addTableHeaders(tableHeaders);
    
    scoreboardTableHead.append(scoreboardTableHeaderRow) 
    scoreboardTable.append(scoreboardTableHead)

    createTableBody();

    scoreboardTable.append(scoreboardTableBody) 
    masterTableDiv.append(scoreboardTable)

    }

function createTable(){
    scoreboardTable = document.createElement('table')
    scoreboardTable.className = 'scoreboardTable'
    scoreboardTable.id = 'scoreboard-table'
}

function createTableHead(){
    scoreboardTableHead = document.createElement('thead') 
    scoreboardTableHead.className = 'scoreboardTableHead'
}

function createTableHeadRow(){
    scoreboardTableHeaderRow = document.createElement('tr') 
    scoreboardTableHeaderRow.className = 'scoreboardTableHeaderRow'
}
function createInput(){
    input = document.createElement("input")
    input.type = "text"
    input.id = "input-DOM"
}

function addTableHeaders(tableHeaders){
    boolean = true; 
    if(counter > 1){
        createInput();
    }
    
    tableHeaders.forEach(header => {
        
        scoreHeader = document.createElement('th') 
        scoreHeader.id = "th"
        scoreHeader.innerText = header
        if (boolean && counter > 1){
            scoreHeader.append(input)
        }
        boolean = false
        counter = counter + 1 
        scoreboardTableHeaderRow.append(scoreHeader)
    })
    
}
function createTableBody(){
    scoreboardTableBody = document.createElement('tbody')
    scoreboardTableBody.className = "scoreboardTable-Body"
}

function appendAll(){

    scoreboardTableHead.append(scoreboardTableHeaderRow) 
    scoreboardTable.append(scoreboardTableHead)

    scoreboardTable.append(scoreboardTableBody) 
    masterTableDiv.append(scoreboardTable)
    

}
