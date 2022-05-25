const countChar = (string) => {
    const lowerString = string.toLowerCase()
    const stringTest = lowerString.split('')
    const stringArray = stringTest.filter(char => char != ' ') //remove blank spaces
    charObject = {}
    for (let char of stringArray) {
        if (char in charObject) {
            charObject[char] += 1
        } else {
            charObject[char] = 1
        }}
    return charObject
}

exports.isCharacterMatch = function(string1, string2) {
    charObject1 = countChar(string1)
    charObject2 = countChar(string2)
    for (let key in charObject1) {
        if (!key in charObject2) {
            return false} 
        else {
            if (charObject1[key] != charObject2[key]) {
                return false} }
        }
    
    return true

};

// exports.isCharacterMatch('hi', 'world')
