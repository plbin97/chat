let i = {
    1: {
        f: () => {
            console.log("123");
        }
    },
    2: {
        f: () => {
            console.log("123");
        }
    }
}

delete i[1];
console.log(i);