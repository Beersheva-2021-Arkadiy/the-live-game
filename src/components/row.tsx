import React, { FC } from 'react';
import lifeGameConfig from "../configuration/life-game-config.json";

const BORDER_SIZE = 1;
type RowProps = {row: number[]};

const Row: FC<RowProps> = (props) => {
    return  <div style={{display: "flex"}}>{getCeels(props.row)}</div>;
} 

function getCeels(row: number[]): React.ReactNode[] {
    return row.map((num, index) => <div key={index} style={getStyle(num)}></div>);
}

function getStyle(n: number): React.CSSProperties {
    const size = getCellSize();
    return {
            backgroundColor: !!n ? "black" : "white", 
            width: size, 
            height: size, 
            border: `${BORDER_SIZE / 2}px solid gray`
        };
}

function getCellSize(): number {
    return Math.min(window.innerHeight, window.innerWidth) / lifeGameConfig.dimension - BORDER_SIZE * 2;    
}

export default Row;

