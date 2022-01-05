import lifeGameConfig from "../configuration/life-game-config.json";
import { getRandomNumber } from "../util/random";

export default class LifeMatrix {
    constructor(private _matrix: number[][]) { }

    nextStep(): number[][] {
        this._matrix = generateNextMatrix(this._matrix);
        return this._matrix;
    }

    get matrix() {
        return this._matrix;
    }

}

function generateNextMatrix(currentMatrix: number[][]): number[][] {
    const matrix = new Array<number[]>();
    for (let row = 0; row < currentMatrix.length; row++) {
        matrix[row] = [];
        for (let col = 0; col < currentMatrix[0].length; col++) {
            matrix[row][col] = isAlive(currentMatrix, row, col);
        }
    }
    return matrix;
}

function isAlive(currentMatrix: number[][], row: number, col: number): number {
    const aliveNeighbours = checkNeighbours(currentMatrix, row, col);
    const currentCell = currentMatrix[row][col];
    let res = 0;
    switch (currentCell) {
        case 0: res = aliveNeighbours === 3 ? 1 : 0; break;
        case 1: res = (aliveNeighbours === 2 || aliveNeighbours === 3) ? 1 : 0; break;
        default: res = currentCell;
    }
    return surpriseFactor(res);
}

function checkNeighbours(currentMatrix: number[][], row: number, col: number): number {
    const rowLimit = currentMatrix.length - 1;
    const columnLimit = currentMatrix[0].length - 1;
    let aliveNeighbours = 0;
    for (let x = Math.max(0, row - 1); x <= Math.min(row + 1, rowLimit); x++) {
        for (let y = Math.max(0, col - 1); y <= Math.min(col + 1, columnLimit); y++) {
            if ((x !== row || y !== col) && currentMatrix[x][y] === 1) {
                aliveNeighbours++;
            }
        }
    }
    return aliveNeighbours;
}

function surpriseFactor(value:number): number {
    const randomNumber = getRandomNumber(1, 101);
    return randomNumber <= lifeGameConfig.surpiseFactor ? +!!!value : value;
}