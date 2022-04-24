import Link from "next/link";
import styles from "./Header.module.scss";
import { navLinks } from "../../../utils/data";

function Header() {
	return (
		<div>
			<nav className={styles.nav}>
				<div className={styles.navLogo}>
					<Link href="/" passHref>
						<a>
							<h3>noob.js</h3>
						</a>
					</Link>
				</div>
				<div className={styles.navMenu}>
					{navLinks.map((link, index) => {
						return (
							<ul key={index}>
								<Link href={link.path} passHref>
									<a>
										<li className={styles.navItems}>{link.name}</li>{" "}
									</a>
								</Link>
							</ul>
						);
					})}
				</div>
			</nav>
		</div>
	);
}

export default Header;
