const names = ["Олег", "Артем", "Дмитро", "Юліан", "Влад"];
const nameLengths = names.reduce((acc, name) => {
    acc[name] = name.length;
    return acc;
}, {});
console.log(nameLengths);

