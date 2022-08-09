function generateSchedule(fhdv,shdv,fdv) {
    console.log(fhdv);
    console.log(shdv);
    console.log(fdv);
    
}

const masterTableDiv = document.querySelector(div.master_Table);

let tableHeaders = ["Team Member","9:15-10:00","10:00-11:00","11:00-11:30","11:30-12:00","12:00-12:30","12:30-1:00","1:00-1:30","1:30-2:00","2:00-3:00","3:00-4:00","4:00-4:30"]

const createTable = () => {
    let masterTable = document.createElement('table');
    masterTable.className = 'masterTable';
}

const createTableRow = () => {
    let masterTableRow = document.createElement('tr');
    masterTableRow.className = 'tableRow';
}

const appendItemsToHeaderRow = () => {
    let appendItems = document.createElement('th');
    appendItems.className = 'tableHeaderRow';
}