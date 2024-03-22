function splitTextUsingRegex(inputString: string): string[] {
    const charecters: string[] = [];
    const regex = /[\s\S]/gu
    let match;
    while ((match = regex.exec(inputString)) !== null) {
        charecters.push(match[0]);
    }
    return charecters
}

export default splitTextUsingRegex