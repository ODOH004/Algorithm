function analyzeSentence(sentence) {
    // Initialize counters
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let inWord = false; // to track whether we are inside a word
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      if (char === '.') {
        break; // stop processing as we reached the end of the sentence
      }
  
      // Increment character count
      charCount += 1;
  
      // Check if the character is a vowel
      if (vowels.has(char)) {
        vowelCount += 1;
      }
  
      // Check if the character is part of a word
      if (char !== ' ') {
        if (!inWord) {
          wordCount += 1;
          inWord = true;
        }
      } else {
        inWord = false;
      }
    }
  
    return {
      charCount: charCount,
      wordCount: wordCount,
      vowelCount: vowelCount
    };
  }
  
  // Example usage
  const sentence = "This is a test sentence.";
  const result = analyzeSentence(sentence);
  console.log(`Length of the sentence: ${result.charCount}`);
  console.log(`Number of words: ${result.wordCount}`);
  console.log(`Number of vowels: ${result.vowelCount}`);
  