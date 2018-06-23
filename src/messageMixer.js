const messageMixer = {};

 messageMixer.countCharacter = function(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};

messageMixer.capitalizeFirstCharacterOfWords = function(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};


messageMixer.reverseWord = function(word) {
  return word.split("").reverse().join("");
};

messageMixer.reverseAllWords = function(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = messageMixer.reverseWord(words[i]);
    }
   return words.join(" ");
};


messageMixer.replaceFirstOccurence = function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


messageMixer.replaceAllOccurrences = function(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

messageMixer.encode = function(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = messageMixer.replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

messageMixer.palindrome = function(string) {
  return `${string} ${messageMixer.reverseWord(string)}`;
}

messageMixer.pigLatin = function(sentance, character) {
  return sentance.split(' ').join(character + ' ');
}

export default messageMixer;