import classes from './table.module.scss'

const TableHead = ({ children, ...props }) => {
    return (
        <thead className={classes.thead} {...props}>
            { children }
        </thead>
    )
}

export default TableHead