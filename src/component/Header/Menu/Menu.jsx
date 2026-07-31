import styles from '../styles.module.scss';

function Menuu({ content, href }) {
    const { MenuItem, MenuChose } = styles;

    return <div className={`${MenuItem} ${MenuChose}`}>{content}</div>;
}

export default Menuu;
