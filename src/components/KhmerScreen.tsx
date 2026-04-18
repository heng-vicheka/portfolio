type KhmerScreenProps = {
	is_active: boolean
}

export function KhmerScreen({ is_active }: KhmerScreenProps) {
	return (
		<div id="km" className={`screen ${is_active ? 'active' : ''}`}>
			<section className="km-hero">
				<svg
					style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08 }}
					viewBox="0 0 800 600"
					preserveAspectRatio="xMidYMid slice"
				>
					<rect x="100" y="400" width="600" height="200" fill="#C9A84C" />
					<rect x="200" y="300" width="400" height="120" fill="#C9A84C" />
					<rect x="280" y="220" width="240" height="100" fill="#C9A84C" />
					<rect x="330" y="160" width="140" height="80" fill="#C9A84C" />
					<polygon points="400,80 340,160 460,160" fill="#C9A84C" />
					<rect x="160" y="340" width="80" height="80" fill="#C9A84C" />
					<polygon points="200,300 170,340 230,340" fill="#C9A84C" />
					<rect x="560" y="340" width="80" height="80" fill="#C9A84C" />
					<polygon points="600,300 570,340 630,340" fill="#C9A84C" />
					<circle cx="200" cy="200" r="30" stroke="#C9A84C" strokeWidth="1" fill="none" />
					<circle cx="600" cy="200" r="30" stroke="#C9A84C" strokeWidth="1" fill="none" />
					<polygon
						points="400,200 420,220 400,240 380,220"
						stroke="#8B1A1A"
						strokeWidth="1"
						fill="none"
					/>
				</svg>

				<div className="km-hero-content">
					<div className="km-lotus-row">
						<div className="km-lotus" />
						<div className="km-lotus" />
						<div className="km-lotus" />
						<div className="km-lotus" />
						<div className="km-lotus" />
					</div>
					<div className="km-hero-subtitle">ផលប័ត្រការងារ · ២០២៤</div>
					<div className="km-hero-name">ឈ្មោះរបស់អ្នក</div>
					<div className="km-hero-role">អ្នករចនា · Visual Designer</div>
					<div className="km-divider" />
					<p className="km-bio">
						ការរចនាដ៏ស្រស់ស្អាតដែលបង្កើតឡើងដោយចិត្តស្រឡាញ់ រួមបញ្ចូលគ្នារវាងសិល្បៈខ្មែរ
						និងនិន្នាការទំនើប។
					</p>
				</div>

				<div className="km-temple-art">
					<svg viewBox="0 0 360 480" width="360" height="480" style={{ opacity: 0.7 }}>
						<rect
							x="20"
							y="20"
							width="320"
							height="440"
							stroke="#C9A84C"
							strokeWidth="1.5"
							fill="none"
						/>
						<rect
							x="30"
							y="30"
							width="300"
							height="420"
							stroke="rgba(201,168,76,0.4)"
							strokeWidth="0.5"
							fill="none"
						/>
						<circle cx="20" cy="20" r="8" fill="#C9A84C" />
						<circle cx="340" cy="20" r="8" fill="#C9A84C" />
						<circle cx="20" cy="460" r="8" fill="#C9A84C" />
						<circle cx="340" cy="460" r="8" fill="#C9A84C" />
						<circle cx="180" cy="240" r="80" stroke="#C9A84C" strokeWidth="1" fill="none" />
						<circle
							cx="180"
							cy="240"
							r="60"
							stroke="rgba(139,26,26,0.6)"
							strokeWidth="0.8"
							fill="none"
						/>
						<circle cx="180" cy="240" r="40" stroke="#C9A84C" strokeWidth="1" fill="none" />
						<circle cx="180" cy="240" r="10" fill="#8B1A1A" />
						<ellipse
							cx="180"
							cy="175"
							rx="12"
							ry="28"
							fill="rgba(201,168,76,0.4)"
							transform="rotate(0,180,240)"
						/>
						<ellipse
							cx="180"
							cy="175"
							rx="12"
							ry="28"
							fill="rgba(201,168,76,0.4)"
							transform="rotate(45,180,240)"
						/>
						<ellipse
							cx="180"
							cy="175"
							rx="12"
							ry="28"
							fill="rgba(201,168,76,0.4)"
							transform="rotate(90,180,240)"
						/>
						<ellipse
							cx="180"
							cy="175"
							rx="12"
							ry="28"
							fill="rgba(201,168,76,0.4)"
							transform="rotate(135,180,240)"
						/>
						<ellipse
							cx="180"
							cy="175"
							rx="12"
							ry="28"
							fill="rgba(201,168,76,0.4)"
							transform="rotate(180,180,240)"
						/>
						<ellipse
							cx="180"
							cy="175"
							rx="12"
							ry="28"
							fill="rgba(201,168,76,0.4)"
							transform="rotate(225,180,240)"
						/>
						<ellipse
							cx="180"
							cy="175"
							rx="12"
							ry="28"
							fill="rgba(201,168,76,0.4)"
							transform="rotate(270,180,240)"
						/>
						<ellipse
							cx="180"
							cy="175"
							rx="12"
							ry="28"
							fill="rgba(201,168,76,0.4)"
							transform="rotate(315,180,240)"
						/>
						<polygon
							points="180,80 200,100 180,120 160,100"
							stroke="#C9A84C"
							strokeWidth="1"
							fill="rgba(139,26,26,0.2)"
						/>
						<polygon
							points="180,360 200,380 180,400 160,380"
							stroke="#C9A84C"
							strokeWidth="1"
							fill="rgba(139,26,26,0.2)"
						/>
						<polygon
							points="80,240 100,260 80,280 60,260"
							stroke="#C9A84C"
							strokeWidth="1"
							fill="rgba(139,26,26,0.2)"
						/>
						<polygon
							points="280,240 300,260 280,280 260,260"
							stroke="#C9A84C"
							strokeWidth="1"
							fill="rgba(139,26,26,0.2)"
						/>
						<text
							x="180"
							y="50"
							textAnchor="middle"
							fill="rgba(201,168,76,0.6)"
							fontSize="11"
							fontFamily="serif"
							letterSpacing="2"
						>
							✦ ✦ ✦
						</text>
						<text
							x="180"
							y="450"
							textAnchor="middle"
							fill="rgba(201,168,76,0.6)"
							fontSize="11"
							fontFamily="serif"
							letterSpacing="2"
						>
							✦ ✦ ✦
						</text>
					</svg>
				</div>
			</section>

			<section className="km-section km-projects">
				<div className="km-section-header">
					<div className="km-ornament">✦</div>
					<div className="km-section-title">គម្រោងការងារ</div>
					<div className="km-ornament">✦</div>
				</div>
				<div className="km-proj-list">
					<div className="km-proj-row">
						<div className="km-proj-idx">០១</div>
						<div>
							<div className="km-proj-name">អត្តសញ្ញាណ Maison Rouge</div>
							<div className="km-proj-desc">Brand Identity · Visual System</div>
						</div>
						<div className="km-proj-tag">ម៉ាក</div>
					</div>
					<div className="km-proj-row">
						<div className="km-proj-idx">០២</div>
						<div>
							<div className="km-proj-name">កម្មវិធី Nocturne</div>
							<div className="km-proj-desc">Mobile UI · App Design</div>
						</div>
						<div className="km-proj-tag">DigitalUI</div>
					</div>
					<div className="km-proj-row">
						<div className="km-proj-idx">០៣</div>
						<div>
							<div className="km-proj-name">ស្នាដៃ Verdant</div>
							<div className="km-proj-desc">Editorial · Magazine Layout</div>
						</div>
						<div className="km-proj-tag">Editorial</div>
					</div>
				</div>
			</section>

			<section className="km-section km-skills">
				<div className="km-section-header">
					<div className="km-ornament">✦</div>
					<div className="km-section-title">ជំនាញ</div>
					<div className="km-ornament">✦</div>
				</div>
				<div className="km-skills-mandala">
					<div className="km-skill-lotus">
						<div className="km-skill-pct">៩២</div>
						<div className="km-skill-name">ការរចនា视觉</div>
					</div>
					<div className="km-skill-lotus">
						<div className="km-skill-pct">៨៧</div>
						<div className="km-skill-name">ម៉ាក</div>
					</div>
					<div className="km-skill-lotus">
						<div className="km-skill-pct">៨៥</div>
						<div className="km-skill-name">UI / UX</div>
					</div>
					<div className="km-skill-lotus">
						<div className="km-skill-pct">៧៨</div>
						<div className="km-skill-name">Motion</div>
					</div>
					<div className="km-skill-lotus">
						<div className="km-skill-pct">៨០</div>
						<div className="km-skill-name">Editorial</div>
					</div>
					<div className="km-skill-lotus">
						<div className="km-skill-pct">៧៥</div>
						<div className="km-skill-name">Strategy</div>
					</div>
				</div>
			</section>

			<section className="km-section km-about">
				<div className="km-section-header">
					<div className="km-ornament">✦</div>
					<div className="km-section-title">អំពីខ្ញុំ</div>
					<div className="km-ornament">✦</div>
				</div>
				<p className="km-about-main">
					ខ្ញុំជាអ្នករចនាដែលមានបទពិសោធន៍ជាង ៥ ឆ្នាំ ក្នុងការបង្កើតអត្តសញ្ញាណ ផលិតផលឌីជីថល
					និងកាសែតស្នាដៃ។
				</p>
				<p className="km-about-sub">ច្រកចូល · Phnom Penh, Cambodia · ធ្វើការជាអន្ដរជាតិ</p>
			</section>

			<section className="km-contact">
				<svg
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						width: '100%',
						height: '4px',
					}}
					viewBox="0 0 800 4"
				>
					<line
						x1="0"
						y1="2"
						x2="800"
						y2="2"
						stroke="#C9A84C"
						strokeWidth="2"
						strokeDasharray="8 4"
					/>
				</svg>
				<div className="km-contact-title">ទំនាក់ទំនង</div>
				<div className="km-contact-sub">✦ ត្រៀមធ្វើការជាមួយគ្នា ✦</div>
				<a href="mailto:hello@yourname.com" className="km-email-link">
					hello@yourname.com
				</a>
			</section>
		</div>
	)
}
