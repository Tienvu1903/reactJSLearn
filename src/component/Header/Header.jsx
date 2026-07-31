import IconBox from './IconBox/boxicon';
import { dataIconBox, dataMenu } from './IconBox/constants'; 
import styles from './styles.module.scss';
import Menuu from './Menu/Menu';
import Logo from '@icons//IMG/SaintMercy.jpg';
import Reload_icon from '@icons/Reload_icon.svg'
import heart_icon from '@icons/heart_icon.svg'
import Phone_icon from '@icons/Phone_icon.svg'
import Shoppingcart_icon from '@icons/Shoppingcart_icon.svg'

function HeaderCuaTao() {
    const { 
        containerBoxicon, 
        containerMenu, 
        containerBox, 
        containerHeader, 
        container 
    } = styles;

    return (
      <div className={container}  >
      
          <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxicon}>
                    {dataIconBox.map((item) => {
                        return <IconBox  type={item.type} href={item.href} />;
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.slice(0,3).map((item) => {
                        return  <Menuu content={item.content} href={item.href} />; 
                    })}
                </div>
            </div>
            <div>
                <img className= {containerHeader} src={Logo}alt="Logo" styles ={{
                }} />
            </div>
            <div   className={containerBoxicon} >
                <div className={containerMenu}>
                    {dataMenu.slice(3,dataMenu.length).map((item) => {
                        return  <Menuu content={item.content} href={item.href} />; 
                    })}
                </div>
                
                <div className={containerBoxicon}>
                    <img width={26} height={26} src={Reload_icon} alt="Reload_icon" />
                    <img width={26} height={26} src={heart_icon} alt="heart_icon" />
                    <img width={26} height={26} src={Phone_icon} alt="Phone_icon" />
                    <img width={26} height={26} src={Shoppingcart_icon} alt="Shoppingcart_icon" />
                </div>
            </div>
            
        </div>
      </div>
    );
}

export default HeaderCuaTao;