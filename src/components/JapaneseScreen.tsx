type JapaneseScreenProps = {
	is_active: boolean
}

export function JapaneseScreen({ is_active }: JapaneseScreenProps) {
	return (
		<div id="jp" className={`screen ${is_active ? 'active' : ''}`}>
			<section className="jp-hero">
				<div className="jp-hero-left">
					<div className="jp-vertical-text">デザイナー · ポートフォリオ · 2024</div>
					<div className="jp-name-en">Your Name</div>
					<div className="jp-name-jp">ビジュアルデザイナー</div>
					<p className="jp-bio">
						秩序と表現の緊張の中で生まれる、
						<br />
						忘れられないデザイン。
						<br />
						Crafting identities and experiences
						<br />
						rooted in cultural depth.
					</p>
					<a href="#" className="jp-btn">
						作品を見る →
					</a>
				</div>
				<div className="jp-hero-right">
					<div className="jp-ink-splash">
						<div className="jp-kanji-bg">美</div>
					</div>
					<svg
						style={{
							position: 'absolute',
							inset: 0,
							width: '100%',
							height: '100%',
							opacity: 0.15,
						}}
						viewBox="0 0 500 600"
						preserveAspectRatio="xMidYMid slice"
					>
						<path
							d="M50,300 Q150,100 300,150 Q450,200 480,350 Q510,500 300,520 Q100,540 50,300Z"
							stroke="#8B1A1A"
							strokeWidth="1.5"
							fill="none"
						/>
						<path
							d="M100,350 Q200,200 350,250"
							stroke="#C9A84C"
							strokeWidth="1"
							fill="none"
							strokeDasharray="4 6"
						/>
						<line
							x1="0"
							y1="150"
							x2="500"
							y2="150"
							stroke="rgba(139,26,26,0.2)"
							strokeWidth="0.5"
						/>
						<line
							x1="0"
							y1="450"
							x2="500"
							y2="450"
							stroke="rgba(139,26,26,0.2)"
							strokeWidth="0.5"
						/>
					</svg>
					<div className="jp-red-circle">
						<div className="jp-circle-text">美 · 創 · 道</div>
					</div>
					<div className="jp-decoration-right">創造性と精度</div>
					<div className="jp-decoration-left">デザインの道</div>
				</div>
			</section>

			<section className="jp-section jp-projects">
				<div className="jp-section-header">
					<div className="jp-section-num">一</div>
					<div>
						<div className="jp-section-title">作品集</div>
						<div className="jp-section-title-sub">Selected Works</div>
					</div>
				</div>
				<div className="jp-proj-grid">
					<div className="jp-proj-card">
						<div className="jp-proj-num-jp">プロジェクト 01</div>
						<div className="jp-proj-title">Maison Rouge</div>
						<div className="jp-proj-desc">
							ブランドアイデンティティ
							<br />
							Brand Identity System
						</div>
						<div className="jp-proj-arrow">→</div>
					</div>
					<div className="jp-proj-card">
						<div className="jp-proj-num-jp">プロジェクト 02</div>
						<div className="jp-proj-title">Nocturne</div>
						<div className="jp-proj-desc">
							モバイルUI設計
							<br />
							Mobile App Design
						</div>
						<div className="jp-proj-arrow">→</div>
					</div>
					<div className="jp-proj-card">
						<div className="jp-proj-num-jp">プロジェクト 03</div>
						<div className="jp-proj-title">Verdant</div>
						<div className="jp-proj-desc">
							エディトリアルデザイン
							<br />
							Editorial Magazine
						</div>
						<div className="jp-proj-arrow">→</div>
					</div>
				</div>
			</section>

			<section className="jp-section jp-skills">
				<div className="jp-section-header">
					<div className="jp-section-num">二</div>
					<div>
						<div className="jp-section-title">技術</div>
						<div className="jp-section-title-sub">Skills &amp; Expertise</div>
					</div>
				</div>
				<table className="jp-skills-table">
					<tbody>
						<tr>
							<td className="jp-skill-jp">視覚</td>
							<td className="jp-skill-en">Visual Design</td>
							<td className="jp-skill-bar-td">
								<div className="jp-skill-bar-wrap">
									<div className="jp-skill-bar" style={{ width: '92%' }} />
								</div>
							</td>
							<td className="jp-skill-pct">92%</td>
						</tr>
						<tr>
							<td className="jp-skill-jp">品牌</td>
							<td className="jp-skill-en">Brand Identity</td>
							<td className="jp-skill-bar-td">
								<div className="jp-skill-bar-wrap">
									<div className="jp-skill-bar" style={{ width: '87%' }} />
								</div>
							</td>
							<td className="jp-skill-pct">87%</td>
						</tr>
						<tr>
							<td className="jp-skill-jp">界面</td>
							<td className="jp-skill-en">UI / UX Design</td>
							<td className="jp-skill-bar-td">
								<div className="jp-skill-bar-wrap">
									<div className="jp-skill-bar" style={{ width: '85%' }} />
								</div>
							</td>
							<td className="jp-skill-pct">85%</td>
						</tr>
						<tr>
							<td className="jp-skill-jp">動作</td>
							<td className="jp-skill-en">Motion Design</td>
							<td className="jp-skill-bar-td">
								<div className="jp-skill-bar-wrap">
									<div className="jp-skill-bar" style={{ width: '78%' }} />
								</div>
							</td>
							<td className="jp-skill-pct">78%</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section className="jp-section jp-about">
				<div>
					<div className="jp-section-header jp-about-header">
						<div className="jp-section-num">三</div>
						<div>
							<div className="jp-section-title">自己紹介</div>
							<div className="jp-section-title-sub">About Me</div>
						</div>
					</div>
				</div>
				<div>
					<p className="jp-about-main">
						5年以上の経験を持つマルチディシプリナリーデザイナー。ブランドアイデンティティ、デジタルプロダクト、エディトリアルデザインを専門としています。
					</p>
					<p className="jp-about-sub">プノンペン拠点 · グローバル対応</p>
				</div>
			</section>

			<section className="jp-contact">
				<div className="jp-contact-left">
					<div className="jp-contact-jp">お問い合わせ</div>
					<div className="jp-contact-en">Let's create together.</div>
					<a href="mailto:hello@yourname.com" className="jp-mail-btn">
						メールを送る →
					</a>
				</div>
				<div className="jp-contact-right">
					<div className="jp-contact-line">
						<div className="jp-contact-icon">✉</div>
						<div className="jp-contact-text">hello@yourname.com</div>
					</div>
					<div className="jp-contact-line">
						<div className="jp-contact-icon">◎</div>
						<div className="jp-contact-text">Phnom Penh, Cambodia</div>
					</div>
					<div className="jp-contact-line">
						<div className="jp-contact-icon">◈</div>
						<div className="jp-contact-text">Available for freelance projects</div>
					</div>
				</div>
			</section>
		</div>
	)
}
