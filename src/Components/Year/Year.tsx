import React, {CSSProperties, useState} from 'react';
import './Year.css';
import Week from "../Week/Week";

const Year: React.FC<{year: number}> = (year) => {
    const _1half = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    const _2half = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
    return (
        <div style={styles.rowContainer}>
            <div style={styles.halfRowLeft}>
                {
                    _1half.map(i =>
                        <Week year={year.year} week={i}/>
                    )
                }
            </div>

            <div style={styles.halfRowRight}>
                {
                    _2half.map(i =>
                        <Week year={year.year} week={i}/>
                    )
                }
            </div>
        </div>
    )
}

const halfRow: any = {
    width: '50vw',
    display: "flex",
    flexDirection: "row",
    marginTop: "0.5vh"
}

const styles: any = {
    rowContainer: {
        zIndex: 1,
        width: '100vw',
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        justifySelf: "center",
        backgroundColor: "transparent"
    },
    halfRowLeft: {
        ...halfRow,
        justifyContent: "right",
        marginRight: '0.2vw'
    },
    halfRowRight: {
        ...halfRow,
        justifyContent: "left",
        marginLeft: '0.2vw'
    }
}

export default Year;
