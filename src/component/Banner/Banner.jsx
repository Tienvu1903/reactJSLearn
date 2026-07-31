import styles from './styles.module.scss';
import ButtonCuaTao from '../Buttons/Button';

function Banner() {
    const { container, content, title, description } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Welcome to the Saint Mercy</h1>
                <div className={description}>
                    We have a wide selection of games for all platforms. Browse
                    our collection and find your next favorite game today!
                </div>
                <div>
                    Also we have everything you need for your gaming setup, from
                    consoles and accessories to gaming chairs and more. Shop now
                    and take your gaming experience to the next level!
                </div>

                <ButtonCuaTao content={"Let's Shop Now"} />
            </div>
        </div>
    );
}

export default Banner;
