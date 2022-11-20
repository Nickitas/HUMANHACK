import { SearchIcon } from '../../svg.module'
import classes from './input.module.scss'

const Input = ({ ...props }) => {
    return (
        <div className={classes.input_wrapper}>
            <SearchIcon/>
            <input {...props} className={classes.input} placeholder={ props.lable } />
            <label className={classes.label}>{ props.lable }</label>
        </div>
    )
}

export default Input