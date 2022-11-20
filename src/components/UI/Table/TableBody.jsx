import classes from './table.module.scss'

const TableBody = ({ children, ...props }) => {
    return (
        <tbody className={classes.tbody} {...props}>
            { children }
        </tbody>
    )
}

export default TableBody