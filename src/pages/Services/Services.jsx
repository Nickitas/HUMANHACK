import React, { useState, useEffect } from 'react'
import TableWrapper  from '../../components/UI/Table/TableWrapper'
import Table from '../../components/UI/Table/Table'
import TableHead from '../../components/UI/Table/TableHead'
import TableBody from '../../components/UI/Table/TableBody'
import TableRow from '../../components/UI/Table/TableRow'
import TableHeadCell from '../../components/UI/Table/TableHeadCell'
import TableBodyCell from '../../components/UI/Table/TableBodyCell'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import { CrossIcon, OkeyIcon } from '../../components/svg.module'
import { getServices, updateService } from '../../Fetch'
import classes from './services.module.scss'


const Services = () => {

    const [data, setData] = useState([])

    const [sortedField, setSortedField] = useState(null)

    useEffect(() => {
        getServices().then(e => {
            setData(e.map(ee => {
                return {
                    _id: ee._id,
                    name: ee.name,
                    version: ee.version,
                    last_update: ee.last_update,
                    status: ee.status
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

    const handlerToggleStatus = (id, status, index) => {
        updateService(id, !status).then(e => {
            if(e.state) {
                setToggleIndex(index)
                setChecked([...toggleIndex])
            }
            else setChecked(delete checked[index])
        })
    }

    return (
        <section className={classes.services}>
            
            <div className={classes.row}>
                <h1 className='title'>Services Tools</h1>
                <Button>Add</Button>
            </div>
            {
                _data ? (
                    <TableWrapper>
                        <Input lable={'Search...'} />
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeadCell onClick={() => setSortedField('name')}>
                                        Name
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('varsion')}>
                                        Version
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('last')}>
                                        Last update
                                    </TableHeadCell>
                                    <TableHeadCell>
                                        Stats
                                    </TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    _data.map((ctx, index) => (
                                        <TableRow key={ctx._id}>
                                            <TableBodyCell>{ ctx.name }</TableBodyCell>
                                            <TableBodyCell>{ ctx.version }</TableBodyCell>
                                            <TableBodyCell>{ ctx.last_update }</TableBodyCell>
                                            <TableBodyCell>
                                                <div className={'svg-wrapp active'} onClick={() => handlerToggleStatus(ctx._id, ctx.status, index)}>
                                                    { ctx.status ? <OkeyIcon/> : <CrossIcon/> }
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

export default Services