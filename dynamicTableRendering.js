var masterTableDiv;
var scoreboardTable;
var scoreboardTableHead;
var scoreboardTableHeaderRow;
var scoreboardTableBody;
var scoreHeader;
let tableHeaders = ["Team Member","9:15-10:00","10:00-11:00","11:00-11:30","11:30-12:00","12:00-12:30","12:30-1:00","1:00-1:30","1:30-2:00","2:00-3:00","3:00-4:00","4:00-4:30"]

function createScoreboardTable (){
    masterTableDiv = document.querySelector('.master_Table')

    createTable();

    createTableHead();

    createTableHeadRow()
    
    addTableHeaders()
    
    scoreboardTableHead.append(scoreboardTableHeaderRow) 
    scoreboardTable.append(scoreboardTableHead)

    createTableBody()

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

function addTableHeaders(){
    tableHeaders.forEach(header => {
        scoreHeader = document.createElement('th') 
        scoreHeader.innerText = header
        scoreboardTableHeaderRow.append(scoreHeader)
    })
}
function createTableBody(){
    scoreboardTableBody = document.createElement('tbody')
    scoreboardTableBody.className = "scoreboardTable-Body"
}

