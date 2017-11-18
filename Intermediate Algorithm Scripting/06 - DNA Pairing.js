/*
CHALLENGE :
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    var splitStrArr = str.split('');
    var resultsArr = [];

    for (var i = 0; i < splitStrArr.length; i++) {
        switch (splitStrArr[i]) {
            case "A":
                resultsArr.push(["A", "T"]);
                break;
            case "T":
                resultsArr.push(["T", "A"]);
                break;
            case "C":
                resultsArr.push(["C", "G"]);
                break;
            case "G":
                resultsArr.push(["G", "C"]);
                break;
        } // end of switch
    } // end of for

    return resultsArr;
}

pairElement("GCG");
