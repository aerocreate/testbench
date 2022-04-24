import styles from "./Footer.module.scss";

function Footer() {
	return (
		<div>
			<p className={styles.footerP}>
				{" "}
				Built with coffee by
				{` `}
				<a href="https://www.aerocreate.com">Aero Create</a> ©{" "}
				{new Date().getFullYear()}{" "}
			</p>
		</div>
	);
}

export default Footer;
