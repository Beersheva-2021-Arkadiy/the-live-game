import React, { FC } from 'react';
import Row from './row';

type MatrixProps = {matrix: number[][];}

const Matrix: FC<MatrixProps> = (props) => {
    return <div style={{display: "flex", flexDirection: "column"}}>{getRows(props.matrix)}</div>;
}

function getRows(matrix: number[][]): React.ReactNode[] {
    return matrix.map((row, index) => <Row key={index} row={row}></Row> );
}

export default Matrix;


