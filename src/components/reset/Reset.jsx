import styles from './Reset.module.scss';
import { observer } from "mobx-react-lite";
import { useState } from "react";
import ModalConfirmReset from "../modals/modalConfirmReset/ModalConfirmReset";


function Reset({store}) {
    const [isShowModal, setShowModal] = useState(false);

    return (
        <section className={styles.resetWrap}>
            <button className={styles.btn} type="button" onClick={() => setShowModal(true)}>Сброс</button>

            <ModalConfirmReset store={store} isShow={isShowModal} onCloseModal={setShowModal} />
        </section>
    );
}

export default observer(Reset);
