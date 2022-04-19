function findMatching(arr, string) {return arr.filter(function (name) {return string.toUpperCase() == name.toUpperCase()})}

function fuzzyMatch(arr, string) {return arr.filter(x => string[0]==x[0])}

function matchName(arr, string) {return arr.filter(x => x.name === string)}