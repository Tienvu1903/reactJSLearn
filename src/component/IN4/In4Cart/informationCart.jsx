import styles from '../styles.module.scss';


function InforCart({content, des, src}) {
   
    const { containerCart, containerContent, title, description } = styles;
    return (
        <div className={containerCart}>
            <img width='35' height='35' src={src} alt='Delivery' />

            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={description}>{des}</div>
            </div>
        </div>
    );
}

export default InforCart;
