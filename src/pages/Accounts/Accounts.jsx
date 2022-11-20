import { useState, useEffect } from 'react'
import TableWrapper  from '../../components/UI/Table/TableWrapper'
import Table from '../../components/UI/Table/Table'
import TableHead from '../../components/UI/Table/TableHead'
import TableBody from '../../components/UI/Table/TableBody'
import TableRow from '../../components/UI/Table/TableRow'
import TableHeadCell from '../../components/UI/Table/TableHeadCell'
import TableBodyCell from '../../components/UI/Table/TableBodyCell'
import Button  from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import Spinner from '../../components/UI/Spinner/Spinner'
import { getAccounts } from '../../Fetch'
import { PencilIcon, TrashCanIcon } from '../../components/svg.module'
import classes from './accounts.module.scss'


const Accounts = () => {

    const [data, setData] = useState([])
    const [sortedField, setSortedField] = useState(null)

    useEffect(() => {
        getAccounts().then(e => {
            setData(e.map(ee => {
                return {
                    _id: ee._id,
                    name: ee.full_name,
                    email: ee.login,
                    last_date: ee.last_date,
                    post: ee.post,
                    type: ee.type
                }
            }))
        })
    }, [data])

    let _data = data
    if(sortedField !== null) {
        _data = data.sort((a, b) => {
            if (a[sortedField] > b[sortedField])
                return 1
            if (a[sortedField] < b[sortedField])
                return -1
            return 0
        })
    }



    return (
        <section className={classes.accounts}>
            <div className={classes.row}>
                <h1 className='title'>Accounts of Sistem</h1>
                <Button>Add</Button>
            </div>
            {
                _data ? (
                    <TableWrapper>
                        <Input lable={'Search...'} />
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeadCell onClick={() => setSortedField('ID')}>
                                        ID
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('neme')}>
                                        Full name
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('email')}>
                                        Email
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('sign')}>
                                        Date last sign
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('post')}>
                                        Post
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('post')}>
                                        Rules
                                    </TableHeadCell>
                                    <TableHeadCell>
                                        Edit
                                    </TableHeadCell>
                                    <TableHeadCell>
                                        Remove
                                    </TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    _data.map(ctx => (
                                        <TableRow key={ctx._id}>
                                            <TableBodyCell>{ ctx._id }</TableBodyCell>
                                            <TableBodyCell>{ ctx.full_name }</TableBodyCell>
                                            <TableBodyCell>{ ctx.email }</TableBodyCell>
                                            <TableBodyCell>{ ctx.last_date }</TableBodyCell>
                                            <TableBodyCell>{ ctx.post }</TableBodyCell>
                                            <TableBodyCell>{ ctx.type }</TableBodyCell>
                                            <TableBodyCell>
                                                <div className='svg-wrapp ok' onClick={() => setVisibleEdit(true)}>
                                                    <PencilIcon/>
                                                </div>
                                            </TableBodyCell>
                                            <TableBodyCell>
                                                <div className='svg-wrapp no' onClick={() => handlerDelete(row._id)}>
                                                    <TrashCanIcon/>
                                                </div>
                                            </TableBodyCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableWrapper>
                ) : <Spinner/>
            }
        </section>
    )
}

export default Accounts