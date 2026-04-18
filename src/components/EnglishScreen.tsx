type EnglishScreenProps = {
	is_active: boolean
}

export function EnglishScreen({ is_active }: EnglishScreenProps) {
	return (
		<div id="en" className={`screen ${is_active ? 'active' : ''}`}>
			<section className="en-hero">
				<div className="en-hero-left">
					<div className="en-eyebrow">Creative Portfolio · Est. 2020</div>
					<div className="en-name">
						YOUR
						<br />
						NAME
					</div>
					<div className="en-title-italic">Visual Designer</div>
					<p className="en-bio">
						Crafting identities, interfaces, and experiences that cut through noise. Driven by the
						tension between order and expression - where bold ideas meet rigorous craft.
					</p>
					<a href="#" className="en-cta">
						View Work
					</a>
				</div>
				<div className="en-hero-right">
					<div className="en-hero-visual">
						<div className="en-red-strip" />
						<div className="en-big-letter">D</div>
						<div className="en-year-tag">Design · Identity · Strategy · Motion</div>
						<svg
							className="en-grid-lines"
							viewBox="0 0 600 700"
							preserveAspectRatio="xMidYMid slice"
							style={{
								position: 'absolute',
								inset: 0,
								width: '100%',
								height: '100%',
								opacity: 0.15,
							}}
						>
							<line x1="0" y1="100" x2="600" y2="100" stroke="#C9A84C" strokeWidth="0.5" />
							<line x1="0" y1="300" x2="600" y2="300" stroke="#C9A84C" strokeWidth="0.5" />
							<line x1="0" y1="500" x2="600" y2="500" stroke="#C9A84C" strokeWidth="0.5" />
							<line x1="150" y1="0" x2="150" y2="700" stroke="#C9A84C" strokeWidth="0.5" />
							<line x1="450" y1="0" x2="450" y2="700" stroke="#C9A84C" strokeWidth="0.5" />
							<circle cx="300" cy="350" r="120" stroke="#8B1A1A" strokeWidth="1" fill="none" />
							<circle cx="300" cy="350" r="200" stroke="#8B1A1A" strokeWidth="0.5" fill="none" />
						</svg>
						<div
							style={{
								position: 'absolute',
								top: '30px',
								right: '30px',
								fontFamily: 'Cinzel, serif',
								fontSize: '11px',
								letterSpacing: '3px',
								color: 'rgba(201,168,76,0.6)',
							}}
						>
							01 - 03
						</div>
					</div>
				</div>
			</section>

			<section className="en-section en-projects">
				<div className="en-section-label">Selected Works</div>
				<div className="en-section-heading">Projects</div>
				<div className="en-project-grid">
					<div className="en-proj-card">
						<div className="en-proj-bg" />
						<div className="en-proj-num">001</div>
						<svg
							style={{
								position: 'absolute',
								inset: 0,
								width: '100%',
								height: '100%',
								opacity: 0.3,
							}}
							viewBox="0 0 300 375"
							preserveAspectRatio="xMidYMid slice"
						>
							<circle cx="200" cy="180" r="100" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
							<circle cx="200" cy="180" r="60" stroke="#8B1A1A" strokeWidth="0.5" fill="none" />
							<line x1="100" y1="80" x2="300" y2="280" stroke="#C9A84C" strokeWidth="0.3" />
						</svg>
						<div className="en-proj-info">
							<div className="en-proj-cat">Branding</div>
							<div className="en-proj-title">Maison Rouge - Identity System</div>
						</div>
					</div>
					<div className="en-proj-card">
						<div className="en-proj-bg" />
						<div className="en-proj-num">002</div>
						<svg
							style={{
								position: 'absolute',
								inset: 0,
								width: '100%',
								height: '100%',
								opacity: 0.3,
							}}
							viewBox="0 0 300 375"
							preserveAspectRatio="xMidYMid slice"
						>
							<rect
								x="60"
								y="80"
								width="180"
								height="220"
								stroke="#9966CC"
								strokeWidth="0.5"
								fill="none"
							/>
							<rect
								x="90"
								y="110"
								width="120"
								height="160"
								stroke="#9966CC"
								strokeWidth="0.5"
								fill="none"
							/>
						</svg>
						<div className="en-proj-info">
							<div className="en-proj-cat">UI / UX</div>
							<div className="en-proj-title">Nocturne - App Design</div>
						</div>
					</div>
					<div className="en-proj-card">
						<div className="en-proj-bg" />
						<div className="en-proj-num">003</div>
						<svg
							style={{
								position: 'absolute',
								inset: 0,
								width: '100%',
								height: '100%',
								opacity: 0.3,
							}}
							viewBox="0 0 300 375"
							preserveAspectRatio="xMidYMid slice"
						>
							<polygon
								points="150,40 260,200 40,200"
								stroke="#66CC66"
								strokeWidth="0.5"
								fill="none"
							/>
							<polygon
								points="150,100 220,200 80,200"
								stroke="#66CC66"
								strokeWidth="0.5"
								fill="none"
							/>
						</svg>
						<div className="en-proj-info">
							<div className="en-proj-cat">Editorial</div>
							<div className="en-proj-title">Verdant - Magazine Spread</div>
						</div>
					</div>
				</div>
			</section>

			<section className="en-section en-skills">
				<div className="en-section-label">Expertise</div>
				<div className="en-section-heading">Skills</div>
				<div className="en-skills-grid">
					<div className="en-skill-item">
						<div className="en-skill-num">92%</div>
						<div className="en-skill-label">Visual Design</div>
					</div>
					<div className="en-skill-item">
						<div className="en-skill-num">87%</div>
						<div className="en-skill-label">Brand Identity</div>
					</div>
					<div className="en-skill-item">
						<div className="en-skill-num">85%</div>
						<div className="en-skill-label">UI / UX Design</div>
					</div>
					<div className="en-skill-item">
						<div className="en-skill-num">78%</div>
						<div className="en-skill-label">Motion Design</div>
					</div>
				</div>
			</section>

			<section
				className="en-section"
				style={{
					background: '#111',
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: '80px',
					alignItems: 'center',
				}}
			>
				<div>
					<div className="en-section-label">About Me</div>
					<div className="en-section-heading" style={{ fontSize: 'clamp(28px,4vw,52px)' }}>
						The eye behind the work.
					</div>
				</div>
				<div>
					<p
						style={{
							fontSize: '17px',
							lineHeight: 1.9,
							color: 'rgba(240,234,224,0.75)',
							marginBottom: '24px',
						}}
					>
						A multidisciplinary designer with over 5 years of experience shaping brands, digital
						products, and editorial identities. Rooted in Phnom Penh, working globally.
					</p>
					<p style={{ fontSize: '17px', lineHeight: 1.9, color: 'rgba(240,234,224,0.75)' }}>
						I believe design is the space where culture, intuition, and precision converge. My work
						doesn't just look - it speaks.
					</p>
				</div>
			</section>

			<section className="en-contact">
				<div className="en-contact-heading">
					Let's Create
					<br />
					Together.
				</div>
				<div className="en-contact-sub">Available for freelance &amp; collaborative projects</div>
				<a href="mailto:hello@yourname.com" className="en-email-link">
					hello@yourname.com
				</a>
			</section>
		</div>
	)
}
