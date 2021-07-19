module.exports = class Checkers {
    constructor(){
        this.field = {};
        this.field.whoseMove = 1;

        this.field.whoseWin = 0;
        this.field.queens = [];

        this.user1 = null;
        this.user2 = null;

        this.ways = {
            GoldWay:       ['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
            DoubleWayG1A7: ['g1', 'f2', 'e3', 'd4', 'c5', 'b6', 'a7'],
            DoubleWayH2B8: ['h2', 'g3', 'f4', 'e5', 'd6', 'c7', 'b8'],
            TripleWayC1A3: ['c1', 'b2', 'a3'],
            TripleWayC1H6: ['c1', 'd2', 'e3', 'f4', 'g5', 'h6'],
            TripleWayH6F8: ['h6', 'g7', 'f8'],
            TripleWayA3F8: ['a3', 'b4', 'c5', 'd6', 'e7', 'f8'],
            UltraWayA5D8:  ['a5', 'b6', 'c7', 'd8'],
            SimpleWayA7B8: ['a7', 'b8'],
            UltraWayH4D8:  ['h4', 'g5', 'f6', 'e7', 'd8'],
            UltraWayE1A5:  ['e1', 'd2', 'c3', 'b4', 'a5'],
            UltraWayE1H4:  ['e1', 'f2', 'g3', 'h4'],
            SimpleWayG1H2: ['g1', 'h2']
          }
      
          this.waysOfCells = {
            a1: [['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8']],
            c1: [['c1', 'b2', 'a3'], ['c1', 'd2', 'e3', 'f4', 'g5', 'h6']],
            e1: [['e1', 'd2', 'c3', 'b4', 'a5'], ['e1', 'f2', 'g3', 'h4']],
            g1: [['g1', 'h2'], ['g1', 'f2', 'e3', 'd4', 'c5', 'b6', 'a7']],
            b2: [['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'], ['c1', 'b2', 'a3']],
            d2: [['c1', 'd2', 'e3', 'f4', 'g5', 'h6'], ['e1', 'd2', 'c3', 'b4', 'a5']],
            f2: [['g1', 'f2', 'e3', 'd4', 'c5', 'b6', 'a7'], ['e1', 'f2', 'g3', 'h4']],
            h2: [['h2', 'g3', 'f4', 'e5', 'd6', 'c7', 'b8'], ['g1', 'h2']],
            a3: [['c1', 'b2', 'a3'], ['a3', 'b4', 'c5', 'd6', 'e7', 'f8']],
            c3: [['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'], ['e1', 'd2', 'c3', 'b4', 'a5']],
            e3: [['g1', 'f2', 'e3', 'd4', 'c5', 'b6', 'a7'], ['c1', 'd2', 'e3', 'f4', 'g5', 'h6']],
            g3: [['h2', 'g3', 'f4', 'e5', 'd6', 'c7', 'b8'], ['e1', 'f2', 'g3', 'h4']],
            b4: [['a3', 'b4', 'c5', 'd6', 'e7', 'f8'], ['e1', 'd2', 'c3', 'b4', 'a5']],
            d4: [['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'], ['g1', 'f2', 'e3', 'd4', 'c5', 'b6', 'a7']],
            f4: [['h2', 'g3', 'f4', 'e5', 'd6', 'c7', 'b8'], ['c1', 'd2', 'e3', 'f4', 'g5', 'h6']],
            h4: [['h4', 'g5', 'f6', 'e7', 'd8'], ['e1', 'f2', 'g3', 'h4']],
            a5: [['a5', 'b6', 'c7', 'd8'], ['e1', 'd2', 'c3', 'b4', 'a5']],
            c5: [['g1', 'f2', 'e3', 'd4', 'c5', 'b6', 'a7'], ['a3', 'b4', 'c5', 'd6', 'e7', 'f8']],
            e5: [['h2', 'g3', 'f4', 'e5', 'd6', 'c7', 'b8'], ['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8']],
            g5: [['c1', 'd2', 'e3', 'f4', 'g5', 'h6'], ['h4', 'g5', 'f6', 'e7', 'd8']],
            b6: [['g1', 'f2', 'e3', 'd4', 'c5', 'b6', 'a7'], ['a5', 'b6', 'c7', 'd8']],
            d6: [['h2', 'g3', 'f4', 'e5', 'd6', 'c7', 'b8'], ['a3', 'b4', 'c5', 'd6', 'e7', 'f8']],
            f6: [['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'], ['h4', 'g5', 'f6', 'e7', 'd8']],
            h6: [['c1', 'd2', 'e3', 'f4', 'g5', 'h6'], ['h6', 'g7', 'f8']],
            a7: [['a7', 'b8'], ['g1', 'f2', 'e3', 'd4', 'c5', 'b6', 'a7']],
            c7: [['h2', 'g3', 'f4', 'e5', 'd6', 'c7', 'b8'], ['a5', 'b6', 'c7', 'd8']],
            e7: [['a3', 'b4', 'c5', 'd6', 'e7', 'f8'], ['h4', 'g5', 'f6', 'e7', 'd8']],
            g7: [['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'], ['h6', 'g7', 'f8']],
            b8: [['a7', 'b8'], ['h2', 'g3', 'f4', 'e5', 'd6', 'c7', 'b8']],
            d8: [['a5', 'b6', 'c7', 'd8'], ['h4', 'g5', 'f6', 'e7', 'd8']],
            f8: [['h6', 'g7', 'f8'], ['a3', 'b4', 'c5', 'd6', 'e7', 'f8']],
            h8: [['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8']]
          }
      
          this.createField();
          this.checkMoves(); 
    }

    createField(){
        for(let i = 0; i < 8; i++){
            let row;
            switch(i){
                case 0:
                    row = 'a';
                    break;
                case 1:
                    row = 'b';
                    break;
                case 2:
                    row = 'c';
                    break;
                case 3:
                    row = 'd';
                    break;
                case 4:
                    row = 'e';
                    break;
                case 5:
                    row = 'f';
                    break;
                case 6:
                    row = 'g';
                    break;
                case 7:
                    row = 'h';
                    break;
                default: 
                    break;
            };

            let j = (i % 2) ? 2 : 1;
            this.field.moves = [];
            this.field.chops = false;

            for(;j <= 8; j += 2){
                let cell = {};
                cell.coordinate = row + j;

                this.field[cell.coordinate] = cell;

                let checker; // шашка
                (j <= 3 ? checker = 1 : (j >= 6) ? checker = 2 : checker = 0) // 0 - пусто, 1 - белая шашка, 2 - черная шашка
                cell.checker = checker; // cell.checker - шашка в клетке

                cell.queen = false;
            }

        }
    }

    checkMoves() {
        if(this.field.chops === true) return;
        if(this.field.whoseMove === 1) {
            for(const way in this.ways){
                let length = this.ways[way].length;
                
                for(let i = 0; i < length; i++) {
                    let checkingCell = this.ways[way][i];
                    let nextCell =  this.ways[way][i + 1];

                    if(this.field[checkingCell] && (this.field[checkingCell].checker === 1) && this.field[nextCell] && (this.field[nextCell].checker === 0)) {
                        const move = [checkingCell, [nextCell]];
                        this.field.moves.push(move);
                    }
                }
            }
        } else if(this.field.whoseMove === 2) {
            for(const way in this.ways) {
                let length = this.ways[way].length;
                
                for(let i = 0; i < length; i++){
                    let checkingCell = this.ways[way][i + 1];
                    let nextCell = this.ways[way][i];
                    
                    if(this.field[checkingCell] && this.field[checkingCell].checker === 2 && this.field[nextCell].checker === 0) {
                        const move = [checkingCell, [nextCell]];
                        this.field.moves.push(move);
                    }
                }
            }
        }
    }

    handleMove(realMoves, userId, backToClient) {
        this.field.moves.forEach(move => {

            if((this.field.whoseMove === 1 && this.user1 === userId) || (this.field.whoseMove === 2 && this.user2 === userId)) {

                move[1].forEach(oneMove => {
                    if(move[0] === realMoves[0] && oneMove === realMoves[1]){

                        this.field[move[0]].checker = 0;
                        this.field[oneMove].checker = this.field.whoseMove;

                        if(this.field[move[0]].queen) {
                            this.field[oneMove].queen = true;
                            this.addQueen(oneMove);
                            this.field[move[0]].queen = false;
                            this.removeQueen(move[0]);
                        }

                        if((this.field.whoseMove === 1 && oneMove[1] === '8') || (this.field.whoseMove === 2 && oneMove[1] === '1')) {
                            this.field[oneMove].queen = true;
                            if(this.field.queens.indexOf(oneMove) === -1){
                                this.field.queens.push(oneMove);
                            }
                        }

                        // если move[2] существует, то значит этот ход является срубом
                        if (this.field[move[2]]) {
                            this.field[move[2]].checker = 0;
                            this.field[move[2]].queen = false;
                            const indexQueen = this.field.queens.indexOf(move[2]);
                            if (indexQueen !== -1) {
                            this.field.queens.splice(indexQueen, 1);
                            }

                            this.field.moves = [];
                            if (this.field[oneMove].queen) {
                              this.checkAdditionalChopsOfQueen(oneMove);
                            } else {
                              this.checkAdditionalChops(oneMove);
                            }
                            if (this.field.moves[0]) {
                              backToClient();
                            } else {
                              this.field.chops = false;
                            }
                          }

                        if (this.field.chops === false) {
                            this.field.whoseMove === 1 ? this.field.whoseMove = 2 : this.field.whoseMove = 1;
                            this.field.moves = [];
                
                            this.checkChops();
                            this.checkChopsOfQueens(this.field.queens);
                
                            this.checkMovesOfQueens();
                            this.checkMoves();
                            
                            if (this.field.moves[0] === undefined) {
                              this.field.whoseWin = this.field.whoseMove === 1 ? this.field.whoseMove = 2 : this.field.whoseMove = 1;
                            }
                          
                          }
                            
                        backToClient();
                    }
                })
                
            }
        });
    }

    addQueen(cell){
        this.field.queens.push(cell);
    };

    removeQueen(cell) {
        const index = this.field.queens.indexOf(cell);
        this.field.queens.splice(index, 1);
    }

    checkChops() {
        for(const way in this.ways) {

            const lengthOfWay = this.ways[way].length;

            for(let i = 0; i < lengthOfWay; i++) {
                this.checkChopOfSingleWay(this.ways[way], i);
            }
        }
    }

    checkChopOfSingleWay(way, i) {
        if(!this.field[way[i]].queen) {

            if(this.field.whoseMove === 1) {

                // сруб вперед
                if(this.field[way[i]] && (this.field[way[i]].checker === 1) && (this.field[way[i]].queen === false) && this.field[way[i+1]] && (this.field[way[i+1]].checker === 2) && this.field[way[i+2]] && (this.field[way[i+2]].checker === 0)) {
                    this.field.chops = true;
                    const hitting = way[i];
                    const newHittingPlace = [way[i+2]];
                    const victim = way[i+1];
                    const move = [hitting, newHittingPlace, victim];
                    this.field.moves.push(move);
                }

                // сруб назад
                if(this.field[way[i]] && (this.field[way[i]].checker === 1) && (this.field[way[i]].queen === false) && this.field[way[i-1]] && (this.field[way[i-1]].checker === 2) && this.field[way[i-2]] && (this.field[way[i-2]].checker === 0)) {
                    this.field.chops = true;
                    const hitting = way[i];
                    const newHittingPlace = [way[i-2]];
                    const victim = way[i-1];
                    const move = [hitting, newHittingPlace, victim];
                    this.field.moves.push(move);
                }
            }

            if(this.field.whoseMove === 2) {

                // сруб вперед
                if(this.field[way[i]] && (this.field[way[i]].checker === 2) && (this.field[way[i]].queen === false) && this.field[way[i+1]] && (this.field[way[i+1]].checker === 1) && this.field[way[i+2]] && (this.field[way[i+2]].checker === 0)) {
                    this.field.chops = true;
                    const hitting = way[i];
                    const newHittingPlace = [way[i+2]];
                    const victim = way[i+1];
                    const move = [hitting, newHittingPlace, victim];
                    this.field.moves.push(move);
                }

                // сруб назад
                if(this.field[way[i]] && (this.field[way[i]].checker === 2) && (this.field[way[i]].queen === false) && this.field[way[i-1]] && (this.field[way[i-1]].checker === 1) && this.field[way[i-2]] && (this.field[way[i-2]].checker === 0)) {
                    this.field.chops = true;
                    const hitting = way[i];
                    const newHittingPlace = [way[i-2]];
                    const victim = way[i-1];
                    const move = [hitting, newHittingPlace, victim];
                    this.field.moves.push(move);
                }
            }
        }
    }

    checkChopsOfQueens(queens) {
        queens.forEach(queen => {
            this.waysOfCells[queen].forEach(way => {
                const indexOfQueen = way.indexOf(queen);
                const lengthOfWay = way.length;

                if(this.field.whoseMove === 1 && this.field[queen].checker === 1) {

                    for(let i = indexOfQueen + 1; i < lengthOfWay; i++) {
                        if(this.field[way[i]].checker === 1) break;
                        if(this.field[way[i]].checker === 2 && this.field[way[i+1]] && this.field[way[i+1]].checker !== 0) break;
                        if(this.field[way[i]].checker === 2 && this.field[way[i+1]] && this.field[way[i+1]] === 0) {

                            this.field.chops = true;
                            const intermidiateWays = [];
                            let intermidiateChops = false;

                            const hitting = queen;
                            const newHittingPlace = [this.field[way[i+1]]];
                            const victim = this.field[way[i]];
                            const move = [hitting, newHittingPlace, victim];
                            intermidiateWays.push(move);

                            this.waysOfCells[way[i+1]].forEach(way2 => {
                                if(way2.indexOf(queen) === -1) {
                                    const indexOfFirstEmptyCell = way2.indexOf(this.field[way[i+1]]);
                                    const lengthOfWay2 = way2.length;

                                    // const isIntermidiateChops = false;

                                    for(let j = indexOfFirstEmptyCell + 1; j < lengthOfWay2; j++) {
                                        if(this.field[way2[j]].checker === 1) break;
                                        if(this.field[way2[j]].checker === 2 && this.field[way[j+1]] && this.field[way[j+1]].checker !== 0) break;
                                        if(this.field[way2[j]].checker === 2 && this.field[way[j+1]] && this.field[way[j+1]] === 0) {

                                            intermidiateChops = true;
                                            // isIntermidiateChops = true;
                                            const hitting = queen;
                                            const newHittingPlace = this.field[way[j+1]];
                                            const victim = [this.field[way[j]]];
                                            const move = [hitting, newHittingPlace, victim];
                                            intermidiateWays.push(move);

                                            break;
                                        }
                                    }
                                } 
                            })

                            if(!intermidiateChops) {
                                this.field.moves.concat(intermidiateWays)
                            }
                        }

                        break;
                    };

                    for(let i = indexOfQueen - 1; i >= 0; i--){
                        if(this.field[way[i]].checker === 1) break;
                        if(this.field[way[i]].checker === 2 && this.field[way[i-1]] && this.field[way[i-1]].checker !== 0) break;
                        if(this.field[way[i]] === 2 && this.field[way[i-1]] && this.field[way[i-1]] === 0) {

                            this.field.chops = true;
                            const intermidiateWays = [];
                            const intermidiateChops = false;

                            const hitting = queen;
                            const newHittingPlace = [this.field[way[i-1]]];
                            const victim = this.field[way[i]];
                            const move = [hitting, newHittingPlace, victim];
                            intermidiateWays.push(move);

                            this.waysOfCells[way[i-1]].forEach(way2 => {
                                if(way2.indexOf(queen) === -1) {
                                    const indexOfEmptyCell = this.field[way[i-1]];
                                    // const lengthOfWay2 = way2.length;

                                    for(let j = indexOfEmptyCell - 1; j >= 0; j--) {
                                        if(this.field[way2[j]].checker === 1) break;
                                        if(this.field[way2[j]].checker === 2 && this.field[way2[j-1]] && this.field[way2[j-1]].checker !== 0) break;
                                        if(this.field[way2[j]] === 2 && this.field[way2[j-1]] && this.field[way2[j-1]] === 0) {

                                            intermidiateChops = true;
                                            const hitting = queen;
                                            const newHittingPlace = [this.field[way2[j-1]]];
                                            const victim = this.field[way2[j]];
                                            const move = [hitting, newHittingPlace, victim];
                                            intermidiateWays.push(move);

                                            break;
                                        }
                                    }
                                }
                            })

                            if(!intermidiateChops) {
                                this.field.moves.concat(intermidiateWays);
                            }

                        }

                        break;
                    }
                }

                if((this.field.whoseMove === 2) && (this.field[queen].checker === 2)) {

                    for(let i = indexOfQueen + 1; i < lengthOfWay; i++) {
                        if(this.field[way[i]].checker === 2) break;
                        if(this.field[way[i]].checker === 1 && this.field[way[i+1]] && this.field[way[i+1]].checker !== 0) break;
                        if(this.field[way[i]].checker === 1 && this.field[way[i+1]] && this.field[way[i+1]].checker === 0) {

                            this.field.chops = true;
                            const intermidiateWays = [];
                            const intermidiateChops = false;

                            const hitting = queen;
                            const newHittingPlace = [this.field[way[i+1]]];
                            const victim = this.field[way[i]];
                            const move = [hitting, newHittingPlace, victim];
                            intermidiateWays.push(move);

                            this.waysOfCells[way[i+1]].forEach(way2 => {
                                if(way2.indexOf(queen) === -1) {
                                    const indexOfFirstEmptyCell = way2.indexOf(this.field[way[i+1]]);
                                    const lengthOfWay2 = way2.length;

                                    // const isIntermidiateChops = false;

                                    for(let j = indexOfFirstEmptyCell + 1; j < lengthOfWay2; j++) {
                                        if(this.field[way2[j]].checker === 2) break;
                                        if(this.field[way2[j]].checker === 1 && this.field[way[j+1]] && this.field[way[j+1]].checker !== 0) break;
                                        if(this.field[way2[j]].checker === 1 && this.field[way[j+1]] && this.field[way[j+1]].checker === 0) {

                                            intermidiateChops = true;
                                            // isIntermidiateChops = true;
                                            const hitting = queen;
                                            const newHittingPlace = [this.field[way[j+1]]];
                                            const victim = this.field[way[j]];
                                            const move = [hitting, newHittingPlace, victim];
                                            intermidiateWays.push(move);

                                            break;
                                        }
                                    }
                                } 
                            })

                            if(!intermidiateChops) {
                                this.field.moves.concat(intermidiateWays)
                            }
                        }

                        break;
                    };

                    for(let i = indexOfQueen - 1; i >= 0; i--){
                        if(this.field[way[i]].checker === 2) break;
                        if(this.field[way[i]].checker === 1 && this.field[way[i-1]] && this.field[way[i-1]].checker !== 0) break;
                        if(this.field[way[i]].checker === 1 && this.field[way[i-1]] && this.field[way[i-1]].checker === 0) {

                            this.field.chops = true;
                            const intermidiateWays = [];
                            const intermidiateChops = false;

                            const hitting = queen;
                            const newHittingPlace = [this.field[way[i-1]]];
                            const victim = this.field[way[i]];
                            const move = [hitting, newHittingPlace, victim];
                            intermidiateWays.push(move);

                            this.waysOfCells[way[i-1]].forEach(way2 => {
                                if(way2.indexOf(queen) === -1) {
                                    const indexOfEmptyCell = this.field[way[i-1]];
                                    // const lengthOfWay2 = way2.length;

                                    for(let j = indexOfEmptyCell - 1; j >= 0; j--) {
                                        if(this.field[way2[j]].checker === 2) break;
                                        if(this.field[way2[j]].checker === 1 && this.field[way2[j-1]] && this.field[way2[j-1]].checker !== 0) break;
                                        if(this.field[way2[j]].checker === 1 && this.field[way2[j-1]] && this.field[way2[j-1]].checker === 0) {

                                            intermidiateChops = true;
                                            const hitting = queen;
                                            const newHittingPlace = [this.field[way2[j-1]]];
                                            const victim = this.field[way2[j]];
                                            const move = [hitting, newHittingPlace, victim];
                                            intermidiateWays.push(move);

                                            break;
                                        }
                                    }
                                }
                            })

                            if(!intermidiateChops) {
                                this.field.moves.concat(intermidiateWays);
                            }

                        }

                        break;
                    }
                }
            })
        })
    }

    checkMovesOfQueens() {
        if(this.field.chops === true) return;
    
        this.field.queens.forEach(queen => {
            if(this.field.whoseMove === 1 && this.field[queen].checker === 1){
                this.waysOfCells[queen].forEach(way => {
                    const indexOfQueen = way.indexOf(queen);
                    const lengthOfWay = way.length;

                    for(let i = indexOfQueen + 1; i < lengthOfWay; i++) {
                        if(this.field[way[i]] && this.field[way[i]].checker === 0) {
                            const move = [queen, [this.field[way[i]].coordinate]];
                            this.field.moves.push(move);
                        }
                        if(this.field[way[i]] && ((this.field[way[i]].checker === 2) || (this.field[way[i]].checker === 1))) break;
                    }

                    for(let j = indexOfQueen - 1; j >= 0; j--) {
                        if(this.field[way[j]] && this.field[way[j]].checker === 0) {
                            const move = [queen, [this.field[way[j]].coordinate]];
                            this.field.moves.push(move);
                        }
                        if(this.field[way[j]] && ((this.field[way[j]].checker === 2) || (this.field[way[j]].checker === 1))) break;
                    }
                })
            }


            if(this.field.whoseMove === 2 && this.field[queen].checker === 2){
                this.waysOfCells[queen].forEach(way => {
                    const indexOfQueen = way.indexOf(queen);
                    const lengthOfWay = way.length;

                    for(let i = indexOfQueen + 1; i < lengthOfWay; i++) {
                        if(this.field[way[i]] && this.field[way[i]].checker === 0) {
                            const move = [queen, [this.field[way[i]].coordinate]];
                            this.field.moves.push(move);
                        }
                        if(this.field[way[i]] && ((this.field[way[i]].checker === 2) || (this.field[way[i]].checker === 1))) break;
                    }

                    for(let j = indexOfQueen - 1; j >= 0; j--) {
                        if(this.field[way[j]] && this.field[way[j]].checker === 0) {
                            const move = [queen, [this.field[way[j]].coordinate]];
                            this.field.moves.push(move);
                        }
                        if(this.field[way[j]] && ((this.field[way[j]].checker === 2) || (this.field[way[j]].checker === 1))) break;
                    }
                })
            }
        })
    }

    checkAdditionalChopsOfQueen(queen) {
        this.checkChopsOfQueens([queen]);
    }

    checkAdditionalChops(cell) {
        for(const way in this.ways) {
            this.ways[way].forEach((coordinate, i) => {
                if(coordinate === cell) {
                    this.checkChopOfSingleWay(this.ways[way], i);
                }
            })
        }
    }

}