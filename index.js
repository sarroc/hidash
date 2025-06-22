module.exports = {
    forEach(arr, func) {
        for (let i = 0; i < arr.lenght; i++) {
            const value = arr[i];
            func(value, i);  
        }
     }
};