// You should implement your task here.

module.exports = function towelSort(matrix) {
    // const newArray = [];
    // for (let q = 0; q < matrix.length; q++) {
    //     if (q % 2 != 0) {
    //         const reverseArray = matrix[q].reverse();
    //         for (let x = 0; x < reverseArray.length; x++) {
    //             newArray.push(reverseArray[x]);
    //         }
    //     } else {
    //         for (let z = 0; z < matrix[q].length; z++) {
    //             newArray.push(matrix[q][z]);
    //         }
    //     }
    // }
    // return newArray;
    if (arguments.length === 0) {
        return [];
    } else {
        const newArray = [];
        for (let q = 0; q < matrix.length; q++) {
            if (q % 2 != 0) {
                const reverseArray = matrix[q].reverse();
                for (let x = 0; x < reverseArray.length; x++) {
                    newArray.push(reverseArray[x]);
                }
            } else {
                for (let z = 0; z < matrix[q].length; z++) {
                    newArray.push(matrix[q][z]);
                }
            }
        }
        return newArray;
    }
};
