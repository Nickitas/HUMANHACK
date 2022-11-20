import classes from './table.module.scss'

const TableRow = ({ children, ...props }) => {
    return (
        <tr className={classes.table_row} {...props}>
            { children }
        </tr>
    )
}

export default TableRow