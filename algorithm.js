import fs from "fs";

// Not in use(First step of thinking)
let airlines = {
    bus: [
        [
            {
                A1: null
            },
            {
                B1: null
            },
            {
                C1: null
            },
            {
                D1: null
            },
            {
                E1: null
            },
            {
                F1: null
            }
        ],
        [
            {
                A2: null
            },
            {
                B2: null
            },
            {
                C2: null
            },
            {
                D2: null
            },
            {
                E2: null
            },
            {
                F2: null
            }
        ],
        [
            {
                A3: null
            },
            {
                B3: null
            },
            {
                C3: null
            },
            {
                D3: null
            },
            {
                E3: null
            },
            {
                F3: null
            }
        ],
        [
            {
                A4: null
            },
            {
                B4: null
            },
            {
                C4: null
            },
            {
                D4: null
            },
            {
                E4: null
            },
            {
                F4: null
            }
        ],
        [
            {
                A5: null
            },
            {
                B5: null
            },
            {
                C5: null
            },
            {
                D5: null
            },
            {
                E5: null
            },
            {
                F5: null
            }
        ]
    ],
    eco1: [
        [
            {
                A6: null
            },
            {
                B6: null
            },
            {
                C6: null
            },
            {
                D6: null
            },
            {
                E6: null
            },
            {
                F6: null
            }
        ],
        [
            {
                A7: null
            },
            {
                B7: null
            },
            {
                C7: null
            },
            {
                D7: null
            },
            {
                E7: null
            },
            {
                F7: null
            }
        ],
        [
            {
                A8: null
            },
            {
                B8: null
            },
            {
                C8: null
            },
            {
                D8: null
            },
            {
                E8: null
            },
            {
                F8: null
            }
        ],
        [
            {
                A9: null
            },
            {
                B9: null
            },
            {
                C9: null
            },
            {
                D9: null
            },
            {
                E9: null
            },
            {
                F9: null
            }
        ],
        [
            {
                A10: null
            },
            {
                B10: null
            },
            {
                C10: null
            },
            {
                D10: null
            },
            {
                E10: null
            },
            {
                F10: null
            }
        ],
        [
            {
                A11: null
            },
            {
                B11: null
            },
            {
                C11: null
            },
            {
                D11: null
            },
            {
                E11: null
            },
            {
                F11: null
            }
        ],
        [
            {
                A12: null
            },
            {
                B12: null
            },
            {
                C12: null
            },
            {
                D12: null
            },
            {
                E12: null
            },
            {
                F12: null
            }
        ],
        [
            {
                A13: null
            },
            {
                B13: null
            },
            {
                C13: null
            },
            {
                D13: null
            },
            {
                E13: null
            },
            {
                F13: null
            }
        ],
        [
            {
                A14: null
            },
            {
                B14: null
            },
            {
                C14: null
            },
            {
                D14: null
            },
            {
                E14: null
            },
            {
                F14: null
            }
        ],
        [
            {
                A15: null
            },
            {
                B15: null
            },
            {
                C15: null
            },
            {
                D15: null
            },
            {
                E15: null
            },
            {
                F15: null
            }
        ]
    ],
    vip: [
        [
            {
                A16: null
            },
            {
                B16: null
            },
            {
                C16: null
            },
            {
                D16: null
            },
            {
                E16: null
            },
            {
                F16: null
            }
        ],
        [
            {
                A17: null
            },
            {
                B17: null
            },
            {
                C17: null
            },
            {
                D17: null
            },
            {
                E17: null
            },
            {
                F17: null
            }
        ]
    ],
    eco2: [
        [
            {
                A18: null
            },
            {
                B18: null
            },
            {
                C18: null
            },
            {
                D18: null
            },
            {
                E18: null
            },
            {
                F18: null
            }
        ],
        [
            {
                A19: null
            },
            {
                B19: null
            },
            {
                C19: null
            },
            {
                D19: null
            },
            {
                E19: null
            },
            {
                F19: null
            }
        ],
        [
            {
                A20: null
            },
            {
                B20: null
            },
            {
                C20: null
            },
            {
                D20: null
            },
            {
                E20: null
            },
            {
                F20: null
            }
        ],
        [
            {
                A21: null
            },
            {
                B21: null
            },
            {
                C21: null
            },
            {
                D21: null
            },
            {
                E21: null
            },
            {
                F21: null
            }
        ],
        [
            {
                A22: null
            },
            {
                B22: null
            },
            {
                C22: null
            },
            {
                D22: null
            },
            {
                E22: null
            },
            {
                F22: null
            }
        ],
        [
            {
                A23: null
            },
            {
                B23: null
            },
            {
                C23: null
            },
            {
                D23: null
            },
            {
                E23: null
            },
            {
                F23: null
            }
        ],
        [
            {
                A24: null
            },
            {
                B24: null
            },
            {
                C24: null
            },
            {
                D24: null
            },
            {
                E24: null
            },
            {
                F24: null
            }
        ],
        [
            {
                A25: null
            },
            {
                B25: null
            },
            {
                C25: null
            },
            {
                D25: null
            },
            {
                E25: null
            },
            {
                F25: null
            }
        ],
        [
            {
                A26: null
            },
            {
                B26: null
            },
            {
                C26: null
            },
            {
                D26: null
            },
            {
                E26: null
            },
            {
                F26: null
            }
        ],
        [
            {
                A27: null
            },
            {
                B27: null
            },
            {
                C27: null
            },
            {
                D27: null
            },
            {
                E27: null
            },
            {
                F27: null
            }
        ]
    ],
    mature: [
        [
            {
                A28: null
            },
            {
                B28: null
            },
            {
                C28: null
            },
            {
                D28: null
            },
            {
                E28: null
            },
            {
                F28: null
            }
        ],
        [
            {
                A29: null
            },
            {
                B29: null
            },
            {
                C29: null
            },
            {
                D29: null
            },
            {
                E29: null
            },
            {
                F29: null
            }
        ],
        [
            {
                A30: null
            },
            {
                B30: null
            },
            {
                C30: null
            },
            {
                D30: null
            },
            {
                E30: null
            },
            {
                F30: null
            }
        ]
    ]
}

// Object.values(airlines).map((d)=>{
//     for (let i = 0; i < d.length; i++) {
//         console.log(d[i])
//     }
// });

// Modified thinking 
const sections = [
    { type: "bus", startRow: 1, rows: 5 },
    { type: "eco1", startRow: 6, rows: 10 },
    { type: "vip", startRow: 16, rows: 2 },
    { type: "eco2", startRow: 18, rows: 10 },
    { type: "mature", startRow: 28, rows: 3 }
];

const seats = [];
const columns = ["A", "B", "C", "D", "E", "F"];

let id = 1;

sections.forEach(section => {
    for (
        let row = section.startRow;
        row < section.startRow + section.rows;
        row++
    ) {
        columns.forEach(column => {
            seats.push({
                id: id++,
                planeId: null,
                row: row,
                column: column,
                seat: `${column}${row}`,
                type: section.type,
                passengerId: null,
                broken: false
            });
        });
    }
});

console.log(seats);

// fs.writeFile("seats.json", JSON.stringify(seats, null, 2), err => {
//     if (err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("File has been written successfully.");
//     }
// });

let obj = {
    bus: { start: 1, end: 30 },
    eco1: { start: 31, end: 90 },
    vip: { start: 91, end: 102 },
    eco2: { start: 103, end: 162 },
    mature: { start: 163, end: 180 }
}

function getSeat(passengers, type, seniorPassenger){

    let arr = {};
    let s = [];
    let counter = 0;

    let start = obj[type].start
    let end = obj[type].end
    if(passengers == seniorPassenger){
        start = obj.eco1.start;
        end = obj.mature.end;
    }

    for(let i = start;i<=end;i++){
        if(seats[i].passengerId || seats[i].broken){
            continue;
        }else{
            s.push(seats[i].seat);
        }
    }

}