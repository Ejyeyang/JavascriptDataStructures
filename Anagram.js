validAnagram('', '');
validAnagram('aaz', 'zza');
validAnagram('anagram', 'nagaram');
validAnagram('rat', 'car');

anagram(one, two){
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
    return false;
}

anagramThree(one, two){
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