export enum TokenType {
    Number,
    Idenifier,
    Equals,
    OpenParem, 
    CloseParem,
    BinaryOperator,
    Let,
}

function token (value = "", type: TokenType): Token {
    return { value, type };
}

export interface Token {
    value: string,
    type: TokenType,
}

export function tokenize (sourceCode: string,): Token[] {
    const tokens = new Array<Token>();
    const src = sourceCode.split("");

    // Build Each Token
    while (src.length > 0) {
        if (src[0] == '(') {
        tokens.push(token(src.shift(), TokenType.OpenParem));
    } else if (src[0] == ')') {
    tokens.push(token(src.shift(), TokenType.CloseParem));
    } else if (src[0] == '+' || src[0] == '-' || src[0] == '*' || src[0] == '/') {
        tokens.push(token(src.shift(), TokenType.BinaryOperator));
    } else if (src[0] == '=') {
        tokens.push(token(src.shift(), TokenType.Equals));
    } else {
        // Handle Multitoken stuff
    }
}
    return tokens;
}
