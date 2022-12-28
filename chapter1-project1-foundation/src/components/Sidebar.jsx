import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://source.unsplash.com/300x300"
			/>

			<div className={styles.profile}>
				<img className={styles.avatar}
					src="https://avatars.githubusercontent.com/u/30436251?v=4"
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