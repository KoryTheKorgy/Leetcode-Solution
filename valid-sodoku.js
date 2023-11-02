/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set();
        let col = new Set();

        for(let j = 0; j < 9; j++) {
            let curRow = board[i][j];
            let currCol = board[j][i];

            if (curRow !== ".") {
                if (row.has(curRow)) return false;
                row.add(curRow);
            }

            if (currCol !== ".") {
                if (col.has(currCol)) return false; 
                col.add(currCol);
            }
        }
    }
    for (let i = 0; i < 9; i+=3) {
        for (let j = 0; j < 9; j+=3) {
            let box = new Set();
            
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    let currVal = board[i + x][j + y];

                    if (currVal !== ".") {
                        if (box.has(currVal)) return false;
                        box.add(currVal);
                    }
                }
            }
        }
    }
    return true; 
};