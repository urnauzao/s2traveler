import styles from "../../styles/components/footer.module.css";


export default function Footer() {
    return (
        <footer className={styles?.footer}>
            Desenvolvido por Urnau
            {/* <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> and Urnau
            </a> */}
        </footer>
    );
}