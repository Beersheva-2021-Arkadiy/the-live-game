function getRandomNumber(min:number, max:number): number {
    if (max < min)[max, min] = [min, max];
    return Math.round(min + Math.random() * (max - min));
}


export function getRandomMatrix(minValue:number, maxValue:number, nRows:number, nColumns:number): number[][] {
    if (nRows < 0 || nColumns <0) throw Error(`nRows (${nRows}) and nColumns (${nColumns}) can't be negative.`);
    
    const res = new Array<number[]>();
    
    for (let row = 0; row < nRows; row++) {
        res[row] = [];
        for (let col = 0; col < nColumns; col++) {
            res[row][col] = getRandomNumber(minValue, maxValue);
        }
    }
    
    return res;
}