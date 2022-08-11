var masterTableDiv;
var scoreboardTable;
var scoreboardTableHead;
var scoreboardTableHeaderRow;
var scoreboardTableBody;
var scoreHeader;

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

function addTableHeaders(tableHeaders){
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

