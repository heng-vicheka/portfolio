import { useCallback, useState } from 'react'

import { EnglishScreen } from './components/EnglishScreen'
import { JapaneseScreen } from './components/JapaneseScreen'
import { KhmerScreen } from './components/KhmerScreen'

type LanguageCode = 'en' | 'km' | 'jp'

export function App() {
	const [active_lang, set_active_lang] = useState<LanguageCode>('en')

	const switch_lang = useCallback((lang: LanguageCode) => {
		set_active_lang(lang)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<>
			<nav className="lang-bar">
				<div className="logo-mark">PORTFOLIO</div>
				<div className="lang-tabs">
					<button
						type="button"
						className={`lang-btn ${active_lang === 'km' ? 'active' : ''}`}
						onClick={() => switch_lang('km')}
					>
						ភាសាខ្មែរ
					</button>
					<button
						type="button"
						className={`lang-btn ${active_lang === 'en' ? 'active' : ''}`}
						onClick={() => switch_lang('en')}
					>
						English
					</button>
					<button
						type="button"
						className={`lang-btn ${active_lang === 'jp' ? 'active' : ''}`}
						onClick={() => switch_lang('jp')}
					>
						日本語
					</button>
				</div>
			</nav>

			<EnglishScreen is_active={active_lang === 'en'} />
			<KhmerScreen is_active={active_lang === 'km'} />
			<JapaneseScreen is_active={active_lang === 'jp'} />
		</>
	)
}
