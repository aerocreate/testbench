import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Aero Create</title>
			</Head>
			<div className={styles.container}>
				<Header />
				<main className={styles.main}>{children}</main>
				<Footer />
			</div>
		</div>
	);
}
