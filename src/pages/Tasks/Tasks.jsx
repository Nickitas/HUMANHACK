
import Button from '../../components/UI/Button/Button'
import classes from './tasks.module.scss'

const Tasks = () => {

    return (
        <section className={classes.tasks}>
            <div className={classes.row}>
                <h1 className='title'>Tasks Commands</h1>
            </div>
            <div className={classes.row}>
                <Button>Import JSON/XML product</Button>
                <Button>Export configuration</Button>
                <Button>Export notifications</Button>
                <Button>Export events</Button>
                <Button>Export statistics results for the day</Button>
            </div>

        </section>
    )
}

export default Tasks