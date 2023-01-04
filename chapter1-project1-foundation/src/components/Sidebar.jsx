import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://github.com/AlexandrePaes.png"
			/>

			<div className={styles.profile}>
				<img className={styles.avatar}
					src="https://github.com/AlexandrePaes.png"
				/>

				<strong>Alexandre Mib</strong>
				<p />
				<strong>Software Engineer</strong>
			</div>

			<footer>
				<a href="#">
					<PencilLine />
					Edit your profile
				</a>
			</footer>
		</aside>
	);
}