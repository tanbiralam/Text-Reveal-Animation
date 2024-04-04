/**
 * Splits a given input string into an array of individual characters using a regular expression.
 * @param inputString The input string to be split.
 * @returns An array containing individual characters from the input string.
 */
function splitTextUsingRegex(inputString: string): string[] {
    // Array to store individual characters
    const characters: string[] = [];

    // Regular expression to match any character (including line breaks and special characters)
    const regex = /[\s\S]/gu;

    let match;

    // Loop through the input string and match each character using the regular expression
    while ((match = regex.exec(inputString)) !== null) {
        // Push the matched character to the characters array
        characters.push(match[0]);
    }

    // Return the array of characters
    return characters;
}

// Exporting the splitTextUsingRegex function as default
export default splitTextUsingRegex;
