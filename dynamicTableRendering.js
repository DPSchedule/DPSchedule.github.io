var masterTableDiv;
var table;
var tableHead;
var tableHeaderRow;
var tableBody;
var valHeader;
var input;
var boolean;
var counter = 1; 

function reset(){
    counter = 1; 
}

function renderTable (tableHeaders){   

    masterTableDiv = document.querySelector('.master_Table')

    createTable();

    createTableHead();

    createTableHeadRow();

    
    addTableHeaders(tableHeaders);
    
    tableHead.append(tableHeaderRow) 
    table.append(tableHead)

    createTableBody();

    table.append(tableBody) 
    masterTableDiv.append(table)

    }

function createTable(){
    table = document.createElement('table')
    table.className = 'table'
    table.id = 'tableID'
}

function createTableHead(){
    tableHead = document.createElement('thead') 
    tableHead.className = 'tableHead'
}

function createTableHeadRow(){
    tableHeaderRow = document.createElement('tr') 
    tableHeaderRow.className = 'tableHeaderRow'
}
function createInput(){
    input = document.createElement("input")

    input.id = "input-DOM"
}

function addTableHeaders(tableHeaders){
    boolean = true; 
    if(counter > 1){
        createInput();
    }
    
    tableHeaders.forEach(header => {
        
        valHeader = document.createElement('th') 
        valHeader.id = "th"
        valHeader.innerText = header
        if (boolean && counter > 1){
            valHeader.append(input)
        }
        boolean = false
        counter = counter + 1 
        tableHeaderRow.append(valHeader)
    })
    
}
function createTableBody(){
    tableBody = document.createElement('tbody')
    tableBody.className = "table-Body"
}

function appendAll(){

    tableHead.append(tableHeaderRow) 
    table.append(tableHead)

    table.append(tableBody) 
    masterTableDiv.append(table)
    

}
