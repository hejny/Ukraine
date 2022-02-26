import { verticalTrim } from './verticalTrim';

export default spaceTrim;

export function spaceTrim(
    content: string | ((block: (blockContent: string) => string) => string),
): string {
    let isFunctional = false;
    if (typeof content === 'function') {
        isFunctional = true;
        content = content((blockContent: string) =>
            blockContent.split('\n').join('__NEWLINE__'),
        );
    }

    // ✂️ Trimming from top and bottom
    content = verticalTrim(content);

    // ✂️ Trimming from left and right

    const lines = content.split('\n');

    const lineStats = lines
        .filter((line) => line.trim() !== '')
        .map((line) => {
            const contentStart = line.length - line.trimStart().length;
            const contentEnd = contentStart + line.trim().length;

            return { contentStart, contentEnd };
        });

    if (lineStats.length === 0) {
        return '';
    }

    const { minContentStart, maxContentEnd } = lineStats.reduce(
        // tslint:disable-next-line: no-shadowed-variable
        ({ minContentStart, maxContentEnd }, { contentStart, contentEnd }) => ({
            minContentStart: Math.min(minContentStart, contentStart),
            maxContentEnd: Math.max(maxContentEnd, contentEnd),
        }),
        {
            minContentStart: lineStats[0].contentStart,
            maxContentEnd: lineStats[0].contentEnd,
        },
    );

    let linesHorizontalyTrimmed = lines.map((line) =>
        line.substring(minContentStart, maxContentEnd),
    );

    if (isFunctional) {
        linesHorizontalyTrimmed = linesHorizontalyTrimmed.map((line) => {
            const sublines = line.split('__NEWLINE__');
            const firstSubine = sublines[0];
            const contentStart =
                firstSubine.length - firstSubine.trimStart().length;
            const indentation = ' '.repeat(contentStart);
            return sublines
                .map((subline) => `${indentation}${subline.trimStart()}`)
                .join('\n');
        });
    }

    return linesHorizontalyTrimmed.join('\n');
}

/**
 *  TODO: Allow to change split char , char: RegExp = /\s/
 */
