import eslint from '@eslint/js';
import html from 'eslint-plugin-html';
import markdown from 'eslint-plugin-markdown';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...pluginVue.configs['flat/recommended'],
  {
    ignores: [
      '**/node_modules',
      '**/cache',
      '**/dist',
      '**/public',
      '**/outputs',
      'test/*/samples/**/*.*',
      '!test/*/samples/**/_config.js',
      '!test/*/samples/**/rollup.config.js'
    ]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      unicorn,
      markdown,
      html
    },
    rules: {
      'unicorn/prevent-abbreviations': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow'
        }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            memberTypes: [],
            order: 'alphabetically'
          }
        }
      ],
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/prefer-literal-enum-member': 'off',
      'dot-notation': 'error',
      'no-constant-condition': [
        'error',
        {
          checkLoops: false
        }
      ],
      'no-prototype-builtins': 'off',
      'object-shorthand': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'all'
        }
      ],
      'prefer-object-spread': 'error',
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false
        }
      ],
      'unicorn/consistent-destructuring': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-empty-file': 'off',
      'unicorn/no-for-loop': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-this-assignment': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/number-literal-case': 'off',
      'unicorn/prefer-at': 'off',
      'unicorn/prefer-code-point': 'off',
      'unicorn/prefer-math-trunc': 'off',
      'unicorn/prefer-number-properties': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/prefer-structured-clone': 'off',
      'unicorn/prefer-top-level-await': 'off'
      // 'unicorn/prevent-abbreviations': [
      //   'error',
      //   {
      //     replacements: {
      //       dir: false
      //     }
      //   }
      // ]
    }
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'unicorn/no-process-exit': 'off',
      'unicorn/prefer-module': 'off'
    }
  },
  {
    files: ['./*.ts', 'scripts/**/*.ts'],
    rules: {
      'unicorn/no-process-exit': 'off',
      'sort-keys': 'off'
    }
  },
  {
    files: ['examples/**/*.js'],
    rules: {
      'no-undef': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'no-redeclare': 'off'
    }
  },
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    rules: {
      'vue/require-v-for-key': 'off',
      'vue/no-v-html': 'off'
    }
  },
  {
    files: ['**/*.md'],
    rules: {
      'prettier/prettier': 'error',
      'no-inline-html': 'off',
      eqeqeq: 'off',
      semi: 0
    },
    processor: 'markdown/markdown'
  },
  {
    files: ['**/*.md/*.js', '**/*.md/*.ts'],
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      'no-console': 'off',
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-import-assign': 'off',
      'no-redeclare': 'off',
      'no-undef': 'off',
      'no-constant-condition': 'off',
      'no-constant-binary-expression': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      'prefer-rest-params': 'off',
      'no-empty': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off'
    }
  },
  {
    files: ['**/*.html'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double'],
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-inline-html': 'off'
    }
  },
  eslintPluginPrettierRecommended
);
