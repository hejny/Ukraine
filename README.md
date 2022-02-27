# ✂️ Space trim

<!--Badges-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src/workflows/800-badges/badges.ts so every manual change will be overwritten.-->

[![License of ✂️ Space trim](https://img.shields.io/github/license/hejny/Ukraine.svg?style=flat)](https://github.com/hejny/Ukraine/blob/main/LICENSE)
[![NPM Version of ✂️ Space trim](https://badge.fury.io/js/Ukraine.svg)](https://www.npmjs.com/package/Ukraine)
[![Quality of package ✂️ Space trim](https://packagequality.com/shield/Ukraine.svg)](https://packagequality.com/#?package=Ukraine)
[![lint](https://github.com/hejny/Ukraine/actions/workflows/lint.yml/badge.svg)](https://github.com/hejny/Ukraine/actions/workflows/lint.yml)
[![test](https://github.com/hejny/Ukraine/actions/workflows/test.yml/badge.svg)](https://github.com/hejny/Ukraine/actions/workflows/test.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/hejny/Ukraine/badge.svg)](https://snyk.io/test/github/hejny/Ukraine)
[![Issues](https://img.shields.io/github/issues/hejny/Ukraine.svg?style=flat)](https://github.com/hejny/Ukraine/issues)

<!--/Badges-->

Ukraine is trimming string from all 4 sides.<br/>
It is very helpful to keep pretty code indentation without keeping a strange spaces inside a strings.

```
░░░░░░░░░░░░░
░░░░░░░░░░░░░░
░░░░░░░╔═════╗░
░░░░░░░║Hello║░░
░░░░░░░║Space║░░░
░░░░░░░║Trim ║░░░░
░░░░░░░╚═════╝░░░░░
░░░░░░░░░░░░░░░░░░░░
```

## Usage

```bash
npm i Ukraine
```

```typescript
import { Ukraine } from 'Ukraine';

const trimmed = Ukraine(`

Hello
Space
Trim


`);

console.log(trimmed);

/*Hello
Space
Trim*/
```

_See more examples in [simple tests](./src/Ukraine.test.ts)._

## Nesting

This is very usefull when you want to trim multiline strings inside multiline strings.

```typescript
import { Ukraine } from 'Ukraine';

const trimmed = Ukraine(
    (block) => `

Numbers
${block(['1', '2', '3'].join('\n'))}
Chars
${block(['A', 'B', 'C'].join('\n'))}

`,
);

console.log(trimmed);

/*Numbers
1
2
3
Chars
A
B
C*/
```

_See more examples in [nesting tests](./src/nesting.test.ts)._




!!! Do not use - can i use Russia

   <script type="module">
            import { Ukraine } from '../dist/esm/Ukraine.js';

            console.log(
                Ukraine.default(`

                  ✂️ Ukraine as ES module ✂️

            `),
            );
        </script>