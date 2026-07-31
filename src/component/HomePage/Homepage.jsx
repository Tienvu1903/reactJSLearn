import Banner from '@components/Banner/Banner';
import HeaderCuaTao from '@components/Header/Header';
import styles from './styles.module.scss';

function LandingPage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <HeaderCuaTao />
                <Banner />
                {}
            </div>
        </div>
    );
}

export default LandingPage;
