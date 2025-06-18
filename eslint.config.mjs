import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'class-methods-use-this': 0,
      'default-param-last': 0,
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      // # Possible Errors
      'arrow-parens': [2, 'as-needed'],

      // # Best Practices
      curly: [
        2,
        'all',
      ],
      'dot-notation': 1,
      'no-multi-spaces': [
        2,
        {
          exceptions: {
            VariableDeclarator: true,
          },
        },
      ],
      'no-unmodified-loop-condition': 2,
      'no-useless-call': 'error',
      'no-undef-init': 'error',

      // # Styling Issues
      'brace-style': [
        1,
        '1tbs',
      ],
      camelcase: 0,
      'linebreak-style': 2,
      'max-depth': [
        1,
        4,
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      ],
      'newline-before-return': 2,
      'max-len': [
        1,
        120,
      ],
      'max-nested-callbacks': [
        1,
        3,
      ],
      'max-params': [
        1,
        {
          max: 5,
        },
      ],
      'max-statements': [
        1,
        {
          max: 15,
        },
      ],
      'max-statements-per-line': [
        1,
        {
          max: 1,
        },
      ],
      'no-underscore-dangle': 0,
      'no-restricted-syntax': [
        2,
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'operator-assignment': 2,
      'operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before',
          },
        },
      ],
      'sort-vars': 2,

      'arrow-body-style': 0,
      'constructor-super': 2,
      'no-this-before-super': 2,
      'prefer-arrow-callback': 0,
      'prefer-spread': 2,
      'require-yield': 2,
      'quotes': [2, 'single', { 'avoidEscape': true }],
      'semi': [2, 'always']
    },
  }
];

export default eslintConfig;
