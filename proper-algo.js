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

// Generate seat data
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
                row,
                column,
                seat: `${column}${row}`,
                type: section.type,
                passengerId: null,
                broken: false
            });
        });
    }
});


// Example occupied/broken seats
seats[35].passengerId = 101;
seats[36].passengerId = 102;
seats[42].broken = true;
seats[43].broken = true;


const obj = {
    bus: { start: 1, end: 30 },
    eco1: { start: 31, end: 90 },
    vip: { start: 91, end: 102 },
    eco2: { start: 103, end: 162 },
    mature: { start: 163, end: 180 }
};


function getSeat(passengers, type, seniorPassenger = 0) {

    let currentBlock = [];
    let availableBlocks = [];

    let start = obj[type]?.start;
    let end = obj[type]?.end;

    // seniors can sit anywhere
    if (passengers === seniorPassenger) {
        start = obj.eco1.start;
        end = obj.mature.end;
    }

    // eco means eco1 + eco2
    if (type === "eco") {
        start = obj.eco1.start;
        end = obj.eco2.end;
    }

    for (let i = start - 1; i < end; i++) {

        // skip vip section while eco search
        if (type === "eco" && i === obj.eco1.end) {
            i = obj.eco2.start - 1;
            continue;
        }

        let seat = seats[i];

        // seat unavailable
        if (seat.passengerId || seat.broken) {

            if (currentBlock.length) {
                availableBlocks.push([...currentBlock]);
                currentBlock = [];
            }

            continue;
        }

        // avoid splitting rows
        if (
            currentBlock.length &&
            seats[i - 1] &&
            seat.row !== seats[i - 1].row
        ) {

            availableBlocks.push([...currentBlock]);
            currentBlock = [];
        }

        currentBlock.push(seat);

        // single passenger
        if (passengers === 1) {

            // avoid middle seats
            if (
                seat.column !== "B" &&
                seat.column !== "E"
            ) {
                return [seat.seat];
            }

            continue;
        }

        // perfect block found
        if (currentBlock.length === passengers) {
            return currentBlock.map(x => x.seat);
        }
    }

    // add remaining block
    if (currentBlock.length) {
        availableBlocks.push([...currentBlock]);
    }

    // try combining smaller groups
    let indexes = twoSum(
        availableBlocks.map(x => x.length),
        passengers
    );

    if (indexes) {

        return [
            ...availableBlocks[indexes[0]],
            ...availableBlocks[indexes[1]]
        ].map(x => x.seat);
    }

    return "No seats available";
}


function twoSum(nums, target) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        let needed = target - nums[i];

        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(nums[i], i);
    }

    return null;
}


// TESTS
console.log(
    "3 eco:",
    getSeat(3, "eco", 1)
);

console.log(
    "1 bus:",
    getSeat(1, "bus", 0)
);

console.log(
    "5 vip:",
    getSeat(5, "vip", 0)
);

console.log(
    "2 mature:",
    getSeat(2, "mature", 0)
);

console.log(
    "4 senior:",
    getSeat(4, "bus", 4)
);