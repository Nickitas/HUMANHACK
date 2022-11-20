import classes from './table.module.scss'

const TableBodyCell = ({ children, ...props }) => {
    return (
        <td className={classes.tbody_cell} {...props}>
            { children }
        </td>
    )
}

export default TableBodyCell