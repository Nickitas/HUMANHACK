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
import { ImageIcon, PencilIcon, TrashCanIcon, ScanerIcon } from '../../components/svg.module'
import { getCameras } from '../../Fetch'
import classes from './livesee.module.scss'


const LiveSee = () => {

    const [data, setData] = useState([])
    const [sortedField, setSortedField] = useState(null)
    const [recognition, setRecognition] = useState(false)

    const [urlCam, setUrlCam] = useState(null)
    const [active, setActive] = useState(false)

    useEffect(() => {
        getCameras().then(e => {
            setData(e.map(ee => {
                return {
                    _id: ee._id,
                    ip: ee.ip,
                    name: ee.name,
                    url: ee.url,
                    department: ee.department, 
                    isActive: ee.is_active
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

    const handlerOpenStream = (id) => {
        if(!active) setUrlCam(null)
        setUrlCam(id)
        setActive(e => !e)
    }

    return (
        <section className={classes.livesee}>
            
            <div className={classes.row}>
                <h1 className='title'>LiveSee</h1>
                <Button>Add</Button>
            </div>

            <div className={classes.stream_wrapper}>
                {
                    urlCam && active ? (
                        <div className={classes.block}>
                            <div className={classes.recog_btn} onClick={() => setRecognition(e => !e)}>
                                <ScanerIcon/>
                            </div>
                            <div className={classes.video_stream} style={{
                                background: `no-repeat url(http://localhost:5000/video/${urlCam}&${recognition})`, backgroundSize:'cover'}}
                            ></div>
                        </div>
                    ) : <p className='text'>Select a camera to view from the table</p>
                }   
            </div>
            {
                data ? (
                    <TableWrapper>
                        <Input lable={'Search...'} />
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeadCell onClick={() => setSortedField('ip')}>
                                        IP-Camera
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('name')}>
                                        Name
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('url')}>
                                        URL
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('department')}>
                                        Department
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('isActive')}>
                                        Is active
                                    </TableHeadCell>
                                    <TableHeadCell>
                                        Open video
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
                                            <TableBodyCell>{ ctx.ip }</TableBodyCell>
                                            <TableBodyCell>{ ctx.name }</TableBodyCell>
                                            <TableBodyCell>{ ctx.url }</TableBodyCell>
                                            <TableBodyCell>{ ctx.department }</TableBodyCell>
                                            <TableBodyCell>{ ctx.isActive ? 'enable' : 'disable' }</TableBodyCell>
                                            <TableBodyCell>
                                                <div className={active ? 'svg-wrapp active' : 'svg-wrapp'} onClick={() => handlerOpenStream(ctx._id)}>
                                                    <ImageIcon/>
                                                </div>
                                            </TableBodyCell>
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

export default LiveSee