import { NavLink } from 'react-router-dom'
import { HomeIcon, ServicesIcon, DepartmentsIcon, LiveSeeIcon, BuyersIcon, TasksIcon, LogoutIcon, InfoIcon } from '../svg.module'
import logo from '../../../public/logo.svg'
import classes from './sidebar.module.scss'

const Sidebar = () => {

    const setActive = ({isActive}) => {
        isActive ? `${classes.active}` : ''
    }

    const handlerLogout = () => {
        console.log('del token')
    }

    const sidebarLinks = [
        {
            title: 'Home',
            icon: <HomeIcon/>,
            to: '/'
        },
        {
            title: 'Services',
            icon: <ServicesIcon/>,
            to: 'services'
        },
        {
            title: 'LiveSee',
            icon: <LiveSeeIcon/>,
            to: 'livesee'
        },
        {
            title: 'Departments',
            icon: <DepartmentsIcon/>,
            to: 'departments'
        },
        {
            title: 'Accounts',
            icon: <BuyersIcon/>,
            to: 'accounts'
        },
        {
            title: 'Tasks',
            icon: <TasksIcon/>,
            to: 'tasks'
        },
    ]

    return (
        <nav className={classes.sidebar}>
            <div className={classes.content}>
                <div className={classes.top}>
                    <div className={classes.logo_content}>
                        <NavLink to={'/'}>
                            <img className={classes.logo} src={logo} />
                        </NavLink>
                    </div>
                    <ul className={classes.list}>
                        {
                            sidebarLinks.map((ctx, index) => (
                                <li className={classes.item} key={index}>
                                    <NavLink to={ctx.to} className={setActive}>
                                        { ctx.icon }
                                    </NavLink>
                                    <span className={classes.tooltipe}>{ ctx.title }</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className={classes.bottom}>
                    <div className={classes.info}>
                        <NavLink to={'info'}>
                            <InfoIcon/>
                        </NavLink>
                    </div>
                    <div className={classes.logout} onClick={handlerLogout}>
                        <LogoutIcon/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar