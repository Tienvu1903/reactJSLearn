import MainLayout from '@components/Layout/Layout';
import { dataInfor } from './constans';
import InforCart from './In4Cart/informationCart';
import styles from './styles.module.scss';

function Infor() {
    const { container } = styles;
    return (
        <div>
            <MainLayout>
                <div className={container}>
                    {dataInfor.map((item) => {
                        return (
                            <InforCart
                                content={item.title}
                                des={item.description}
                                src={item.src}
                            />
                        );
                    })}
                </div>
            </MainLayout>
        </div>
    );
}

export default Infor;
