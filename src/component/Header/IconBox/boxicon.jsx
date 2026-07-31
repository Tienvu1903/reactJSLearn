import styles from '../styles.module.scss';
import fb_icon from '@icons/fb_icon.svg';
import X_icon from '@icons/X_icon.svg';
import Youtube_icon from '@icons/Youtube_icon.svg';
import Tiktok_icon from '@icons/Tiktok_icon.svg';

function IconBox({ type, href }) {
    const { boxIcon } = styles;

    const handerRenderIcon = (type) => {
        switch (type) {
            case 'FB':
                return fb_icon;
            case 'X':
                return X_icon;
            case 'tiktok':
                return Tiktok_icon;
            case 'youtube':
                return Youtube_icon;
        }
    };

    return (
        <div className={boxIcon}>
            <img src={handerRenderIcon(type)} alt={type} />
        </div>
    );
}

export default IconBox;
