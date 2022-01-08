import styles from './ModalConfirmReset.module.scss';

function ModalConfirmReset({store, isShow, onCloseModal}) {
    const handleReset = () => {
        store.updateIsReset();

        setTimeout(() => store.updateIsReset(), 10);
        onCloseModal(false);
    };

    isShow ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    if (!isShow) return null;

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <p className={styles.text}>Будут сброшены все введённые данные. Ты уверен?</p>
                <button className={styles.btn} type="button" onClick={() => onCloseModal(false)}>Нет, не сбрасывать</button>
                <button className={`${styles.btn} ${styles.btnReset}`} type="button" onClick={handleReset}>Да, сбросить</button>
            </div>
        </div>
    );
}

export default ModalConfirmReset;
