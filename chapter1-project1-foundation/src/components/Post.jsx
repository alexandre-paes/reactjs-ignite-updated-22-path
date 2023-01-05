import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.article}>
			<header>
				<div className={styles.author}>
					<img className={styles.avatar} src="https://github.com/AlexandrePaes.png" />
						<div className={styles.authorInfo}>
							<strong>Alexandre Paes</strong>
							<span>Software Engineer</span>
						</div>
				</div>

				<div className={styles.time}>
					<time title='11 de Maio às 7:30' dateTime='2022-05-11 07:30:00'>Publicado há 1 hora</time>
				</div>
			</header>

			<div className={styles.content}>
				<p>Hey, guys!</p>
				<p>My portfolio has just been updated with a fresh project as part of the Ignite Bootcamp from Rocketseat.</p>
				<p>emoji here <a href="">Any title here</a></p>
				<br />
				<p>
					<a href="">#some</a>{" "}
					<a href="">#hastags</a>{' '}
					<a href="">#for</a>{' '}
					<a href="">#the</a>{' '}
					<a href="">#SEO</a>{' '}
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Leave your feedback:</strong>
				<textarea placeholder='Leave your feedback' />
				<button type='submit'>Send</button>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>

		</article>
	)
}