const standarize = (input: number) => {
    if (input===undefined){
        return 0
    } else if (input < 0.1) {
        const result = input * 100;
        return result.toFixed(2);
    } else {
        return input.toFixed(2);
    }
}

export default standarize;