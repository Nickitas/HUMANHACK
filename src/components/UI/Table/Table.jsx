import classes from './table.module.scss'

const Table = ({ children, ...props }) => {

    return (
        <table className={classes.table} {...props}>
            { children }
        </table>
    )
}

export default Table