import styles from './ChatScreen.module.scss';
import Container from '../../components/container/Container';
import Header from '../../components/header/Header';
import { useEffect } from 'react';

function ChatScreen() {
    useEffect(() => {
        document.getElementById("tgw_61dc7f84926961449a6aa814").setAttribute("src", "https://tgwidget.com/widget/?id=61dc7f84926961449a6aa814")
    }, []);

    return (
        <Container>
            {/*<Header />*/}

            <section>
                <h2 className={styles.title}>Присоединяйтесь к обсуждению в Telegram!</h2>

                <iframe
                    id="tgw_61dc7f84926961449a6aa814"
                    frameBorder="0"
                    scrolling="no"
                    horizontalscrolling="no"
                    verticalscrolling="no"
                    width="100%"
                    height="540px"
                    async
                    title="Телеграм чат"
                />
            </section>
        </Container>
    );
}

export default ChatScreen;
