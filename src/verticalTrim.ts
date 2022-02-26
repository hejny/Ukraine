import { topTrim } from "./topTrim";

export function verticalTrim(content: string): string {
    content = topTrim(content);
    content = topTrim(content.split('\n').reverse().join('\n'))
        .split('\n')
        .reverse()
        .join('\n');
    return content;
}


