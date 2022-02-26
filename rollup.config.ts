import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/spaceTrim.ts',
    output: [
        {
            file: './dist/umd/spaceTrim.js',
            name: 'spaceTrim',
            format: 'umd',
            sourcemap: true,
        },
        {
            file: './dist/esm/spaceTrim.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
};
