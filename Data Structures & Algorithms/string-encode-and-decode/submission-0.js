class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let newStr = "";

        // we have to go through the str and build a new one

        // go through str
        for (let i = 0; i < strs.length; i++) {
            let currWord = strs[i]
            //ascii the curr ele

            for (let j = 0; j < currWord.length; j++) {
                let asciiEle = currWord[j].charCodeAt();

                // push each ele into the new str
                // console.log(asciiEle, currWord[j])
                newStr += asciiEle
                newStr += "|";
            }
            // when we are done with the whole str we push a seperator
            // console.log(newStr)
            newStr += "*";
        }

        return newStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str, "-")
        // when its passed through our decoder we know its ascii we then go through the str

        // we then build a new str
        let result = [];

        let asciiKey = "";

        let word = "";

        for (let i = 0; i < str.length; i++) {

            let currNum = str[i];

            // console.log(str)

            if ( currNum === "|")  {
                // console.log(asciiKey, "the letter")
                word += String.fromCharCode(Number(asciiKey));
                // console.log(word, "building up our word", asciiKey);
                asciiKey = "";
            } else if ( currNum !== "|" && currNum !== "*"){
                // console.log(asciiKey, "curr key")
                asciiKey += currNum;
            }

            if ( currNum === "*" ) {
                // console.log(word, "word??")

                // console.log(String.fromCharCode(Number(word)))
                console.log(word, "wordddd")
                result.push(word);
                word = ""
            }
            
        }

        return result;
    }

    /* 
    
    if encoding something means that we scramble the letters or like we attach the letters to make on
    e bundke then can we just add a seperator for every char we encounter?

    something simple such as a number or symbol

    to decode this we recieve the str and then what ever is not a letter doesnt pass and doesnt get into the final str?

    we can use an ascii char for every letter then a seperator and then ascii to decode an
    
    */
}
