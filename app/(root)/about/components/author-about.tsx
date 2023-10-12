import AuthorSectionTitle from './author-section-title'

const AuthorAbout = () => {
	return (
		<div className="px-4 md:px-0">
			<h2 className="uppercase text-2xl pb-10 font-bold">ABOUT ME</h2>
			<p>
				Welcome to my corner of the internet, where I teach how to create and
				develop interactive web applications. I'm Garrett Humbert, I'm a web
				developer base in Iowa and I'm delighted to be your guide to proficient
				web development.
			</p>
			<AuthorSectionTitle>The Journey of a Programmer</AuthorSectionTitle>
			<p>
				My love affair with programming began in high school. It started with
				game development, creating small video games in Scratch was always so
				satisfying. Working my way through engines like GameMaker, Unity, and
				Unreal Engine, for years I found enjoyment creating mechanics and game
				play systems. Eventually, I realized that path of programming wasn't
				meant for me. It's very complicated, requiring you to wear many hats. I
				found out after awhile that there were many aspects to the entire
				process that I didn't enjoy. I will always look back with fond memories,
				but I don't see myself ever going back down that path. From there I
				learned Python, then JavaScript, HTML, CSS, ReactJS, and so much more
				where I found a true passion for creating web applications.
			</p>
			<AuthorSectionTitle>Why I Write</AuthorSectionTitle>
			<p>
				I decided to create a blog to only expand my knowledge on certain
				topics, but also help others that struggling with similar problems. As
				someone that hasn't had professional experience in web development, I
				thought it would be an interesting and creative way to expand my
				repertoire of knowledge.
			</p>
		</div>
	)
}

export default AuthorAbout
