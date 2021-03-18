validAnagram('', '');
validAnagram('aaz', 'zza');
validAnagram('anagram', 'nagaram');
validAnagram('rat', 'car');

function validAnagram(strOne, strTwo){
    if(strOne.length != strTwo.length){
        return false;
    }
    const lookUp = {};
    for (let i = 0; i < strOne.length; i++) {
        let letter = strOne[i];
        //if letter exists, increment, other set to 1. 
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }
    for(let i = 0; i < strTwo.length; i++){
        let letter = strTwo[i];
        //if cant find letter or letter is zero then its not an anagram 
        if(!lookUp[letter]){
            return false;
        } else {
            look[letter] -= 1; 
        }
    }
    return true; 
}

anagramTwo(one, two){
    if(one.length != two.length){
        return false;
    }
    const lookUp = {};

    for(let i = 0; i < one.length; i++){
        let letter = one[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }

    for(let i = 0; i < two.length; i++){
        let letter = two[i];
        if(!lookUp[letter]){
            return false;
        } else {
            lookUp[letter] -= 1;
        }
    }
    return true;
}

anagramThree(one, two){
    if(one.length != two.length){
        return false;
    }

    const lookUp = {}

    for(let i = 0; i < one.length; i++){
        let letter = one[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }

    for(let i = 0; i < two.length; i++){
        let letter = two[i];
        if(!lookUp[letter]){
            return false;
        } else {
            lookUp[letter] -= 1; 
        }
    }
    return true; test
}

anagrams(one, two){
    if(one.length != two.length){
        return false;
    }

    const lookUp = {};

    for(let i = 0; i < one.length; i++){
        let letter = one[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1; 
    }

    for(let i = 0; i < two.length; i++){
        if(!lookUp[letter]){
            return false;
        } else {
            lookUp[letter] -= 1; 
        }
    }
    return true; 
}

anagramsAgain(one, two){
    if(one.length != two.length){
        return false;
    }

    const lookUp = {};

    for(let i = 0; i < one.length; i++){
        let letter = one[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1; 
    }

    for(let i = 0; i < two.length; i++){
        let letter = two[i];
        if(!lookUp[letter]){
            return false;
        } else {
            lookUp[letter] -= 1;
        }

        return false;

    }
}

anagramAgain(one, two){
    if(one.length != two.length){
        return false;
    }

    const lookUp = {};

    for(let i = 0; i < one.length; i++){
        let letter = one[i];
        lookUp[letter] ? lookUp += 1 : lookUp[letter] = 1; 
    }

    for(let i = 0; i < two.length; i++){
        let letter = two[i];
        if(!lookUp[letter]){
            return false;
        } else {
            lookUp[letter] -= 1;
        }
    }
    return true;
}