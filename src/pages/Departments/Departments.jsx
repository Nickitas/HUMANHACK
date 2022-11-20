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
import { PencilIcon, TrashCanIcon } from '../../components/svg.module'
import { getDepartments } from '../../Fetch'
import classes from './departments.module.scss'


const Departments = () => {

    const [data, setData] = useState([])
    const [sortedField, setSortedField] = useState(null)

    useEffect(() => {
        getDepartments().then(e => {
            setData(e.map(ee => {
                return {
                    _id: ee._id,
                    name: ee.name,
                    cameras: ee.cameras,
                    types: ee.types,
                    count: ee.count,
                    middle_time: ee. middle_time,
                    siggma: ee.siggma,
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
        <section className={classes.departments}>
           
            <div className={classes.row}>
                <h1 className='title'>Departments</h1>
                <Button>Add</Button>
            </div>
            {
                data ? (
                    <TableWrapper>
                        <Input lable={'Search...'} />
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeadCell onClick={() => setSortedField('id')}>
                                        №
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('name')}>
                                        Name
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('cameras')}>
                                        Cameras
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('type')}>
                                        Type of goods
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('count')}>
                                        Number of passing
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('middle_time')}>
                                        Average passage time
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('dispersion')}>
                                        Dispersion
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
                                    _data.map((ctx, index) => (
                                        <TableRow key={ctx._id}>
                                            <TableBodyCell>{ index+1 }</TableBodyCell>
                                            <TableBodyCell>{ ctx.name }</TableBodyCell>
                                            <TableBodyCell>{ ctx.cameras }</TableBodyCell>
                                            <TableBodyCell>{ ctx.types }</TableBodyCell>
                                            <TableBodyCell>{ ctx.count }</TableBodyCell>
                                            <TableBodyCell>{ ctx.middle_time }</TableBodyCell>
                                            <TableBodyCell>{ ctx.siggma }</TableBodyCell>
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

export default Departments