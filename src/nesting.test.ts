import { spaceTrim } from './spaceTrim';

// tslint:disable:no-trailing-whitespace
describe('how nesting works', () => {
    it('will nest simple values ', () => {
        expect(
            spaceTrim(
                (block) => `

                  ${block('Hello')}

    `,
            ),
        ).toBe('Hello');
    });

    it('will nest values joined inside spaceTrim block', () => {
        expect(
            spaceTrim(
                (block) => `

                  Numbers
                  ${block(['1', '2', '3'].join('\n'))}
                  Chars
                  ${block(['A', 'B', 'C'].join('\n'))}


        `,
            ),
        ).toBe(['Numbers', '1', '2', '3', 'Chars', 'A', 'B', 'C'].join('\n'));
    });

    it('will nest values joined with different offset inside spaceTrim block', () => {
        expect(
            spaceTrim(
                (block) => `

                  Numbers
                    ${block(['1', '2', '3'].join('\n'))}
                  Chars
                       ${block(['A', 'B', 'C'].join('\n'))}


      `,
            ),
        ).toBe(
            [
                'Numbers',
                '  1',
                '  2',
                '  3',
                'Chars',
                '     A',
                '     B',
                '     C',
            ].join('\n'),
        );
    });
});
