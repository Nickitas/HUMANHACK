import { NavLink } from 'react-router-dom'
import ava from '../../../public/ava.jpg'
import Input from '../UI/Input/Input'
import { CogIcon, BellIcon } from '../svg.module'
import classes from './header.module.scss'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className='content'>
                <div className={classes.row}>
                    <div className={classes.block}>
                        <Input lable={'Search here...'}/>
                    </div>
                    <div className={classes.block}>
                        <div className={classes.bell}>
                            <NavLink to={'notification'}>
                                <BellIcon/>
                            </NavLink>
                        </div>
                        <div className={classes.settings}>
                            <NavLink to={'settings'}>
                                <CogIcon/>
                            </NavLink>
                        </div>
                        <div className={classes.profile}>
                            <NavLink to={'profile'}>
                                <div className={classes.ava} style={{
                                background: `no-repeat url(${ava}) center` 
                                }}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header