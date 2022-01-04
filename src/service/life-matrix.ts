import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _matrix: number[][]) {}

    nextStep(): number[][] {
        // TODO: Return the new Matrix()
        this._matrix = getRandomMatrix(0, 1, this._matrix.length, this._matrix[0].length);
        return this._matrix;
    }

    get matrix() {
        return this._matrix;
    }

}