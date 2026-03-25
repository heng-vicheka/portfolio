import prettier from 'eslint-config-prettier'
import path from 'node:path'
import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import ts from 'typescript-eslint'

const gitignore_path = path.resolve(import.meta.dirname, '.gitignore')

export default defineConfig(
	includeIgnoreFile(gitignore_path),
	{
		ignores: ['dist/**', 'build/**', 'coverage/**'],
	},
	js.configs.recommended,
	...ts.configs.recommended,
	prettier,

	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			'no-undef': 'off',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					format: ['snake_case', 'UPPER_CASE'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'function',
					format: ['snake_case'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
			],
		},
	},
)
