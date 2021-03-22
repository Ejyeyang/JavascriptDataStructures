validAnagram('', '');
validAnagram('aaz', 'zza');
validAnagram('anagram', 'nagaram');
validAnagram('rat', 'car');

function anagramPractice(one, two){
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
