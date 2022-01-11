import styles from './HelpScreen.module.scss';
import Container from '../../components/container/Container';
import Header from '../../components/header/Header';


function HelpScreen() {
    return (
        <Container>
            <Header />
            <section className={styles.help}>
                <p>Если возникли вопросы или нашли ошибку в работе калькулятора, можно написать
                    в <a className={styles.link} href="https://t.me/barbars_chat" target="_blank" rel="noopener noreferrer">Телеграм чате</a> или
                    на <a className={styles.link} href="https://barbars.ru/forum/subforum/0/267668" target="_blank" rel="noopener noreferrer">форуме</a> клана «ИМПЕРИЯ»
                </p>
            </section>
        </Container>
    );
}

export default HelpScreen;
