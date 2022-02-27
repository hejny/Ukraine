import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/main.ts',
    output: [
        {
            file: './dist/umd/main.js',
            name: 'Ukraine',
            format: 'umd',
            sourcemap: true,
        },
        {
            file: './dist/esm/main.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
};
