
import classes from './table.module.scss'

const TableWrapper = ({ children, ...props }) => {

    return (
        <div className={classes.table_container} {...props}>
            <div className={classes.table_wrapp}>
                { children }
            </div>
        </div>
    )
}

export default TableWrapper