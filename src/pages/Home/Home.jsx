import React, { useState, useEffect } from 'react'
import TableWrapper  from '../../components/UI/Table/TableWrapper'
import Table from '../../components/UI/Table/Table'
import TableHead from '../../components/UI/Table/TableHead'
import TableBody from '../../components/UI/Table/TableBody'
import TableRow from '../../components/UI/Table/TableRow'
import TableHeadCell from '../../components/UI/Table/TableHeadCell'
import TableBodyCell from '../../components/UI/Table/TableBodyCell'
import Input from '../../components/UI/Input/Input'
import Spinner from '../../components/UI/Spinner/Spinner'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveBump } from '@nivo/bump'
import { ResponsivePie } from '@nivo/pie'
import { StatisticsIcon } from '../../components/svg.module'
import { getAccuracy } from '../../Fetch' 
import classes from './home.module.scss'


const BarChrt = () => {
    const data = [
      {
        "department": "AL",
        "hot dog": 194,
        "hot dogColor": "hsl(141, 70%, 50%)",
        "burger": 151,
        "burgerColor": "hsl(306, 70%, 50%)",
        "sandwich": 125,
        "sandwichColor": "hsl(340, 70%, 50%)",
        "kebab": 98,
        "kebabColor": "hsl(244, 70%, 50%)",
        "fries": 129,
        "friesColor": "hsl(298, 70%, 50%)",
        "donut": 119,
        "donutColor": "hsl(86, 70%, 50%)"
      },
      {
        "department": "AM",
        "hot dog": 113,
        "hot dogColor": "hsl(56, 70%, 50%)",
        "burger": 30,
        "burgerColor": "hsl(11, 70%, 50%)",
        "sandwich": 76,
        "sandwichColor": "hsl(60, 70%, 50%)",
        "kebab": 192,
        "kebabColor": "hsl(311, 70%, 50%)",
        "fries": 50,
        "friesColor": "hsl(68, 70%, 50%)",
        "donut": 38,
        "donutColor": "hsl(50, 70%, 50%)"
      }
    ]
    return (
        <ResponsiveBar
            data={data}
            keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut'
            ]}
            indexBy="department"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'department',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
        />
    )
}

const LineChart = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getAccuracy().then(e => {
            setData(e.map(ee => {
                return {
                    date: ee.date,
                    percent: ee.percent,
                }
            }))
        })
    }, [data])

    const _data = [
        {
          "id": "Accuracy",
          "data": [data]
        }
      ]
    return (
        <ResponsiveBump
            data={_data}
            xPadding={0.75}
            xOuterPadding={0.45}
            colors={{ scheme: 'spectral' }}
            lineWidth={5}
            activeLineWidth={8}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            pointSize={10}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ theme: 'background' }}
            axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -36
            }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'percent',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
            axisRight={null}
        />
    )
}


const RoundChart = () => {
    const data = [
        {
          "id": "meet",
          "label": "meet",
          "value": 122,
          "color": "hsl(133, 70%, 50%)"
        },
        {
          "id": "household chemicals",
          "label": "household chemicals",
          "value": 74,
          "color": "hsl(98, 70%, 50%)"
        },
        {
          "id": "Bakery products",
          "label": "Bakery products",
          "value": 467,
          "color": "hsl(130, 70%, 50%)"
        },
        {
          "id": "Bakery products",
          "label": "Bakery products",
          "value": 309,
          "color": "hsl(216, 70%, 50%)"
        },
        {
          "id": "beverages",
          "label": "beverages",
          "value": 215,
          "color": "hsl(222, 70%, 50%)"
        }
      ]
    return (
        <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'household chemicals'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'Bakery products'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
    )
}


const Home = () => {

    const [data, setData] = useState([])
    const [sortedField, setSortedField] = useState(null)

    const [buyer, setBuyer] = useState('')
    const [active, setActive] = useState(false)

    useEffect(() => {
        
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

    const cards = [
        {
            title: 'Total sales',
            element: <BarChrt/>
        },
        {
            title: 'Frequently purchased products',
            element: <LineChart/>
        },
        {
            title: 'Forecast',
            element: <RoundChart/>
        }
    ]

    const list = [
        {
            uuid:'',
            name:'',
            age: '',
        }
    ]

    const handlerOpenStatistics = (id) => {
        setBuyer(id)
    }


    return (
        <section className={classes.home}>

            <h1 className='title'>Welcome back, Admin</h1>
            <p className='text'>We are saving stats tomorow</p>

            <div className={classes.grid}>
                {
                    cards.map((item, index) => (
                        <div className={classes.card} key={index}>
                            <h3 className='header'>{ item.title }</h3>
                            { item.element }
                        </div>
                    ))
                }
            </div>
            {
                _data ? (
                    <TableWrapper>
                        <Input lable={'Search...'} />
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeadCell onClick={() => setSortedField('uuid')}>
                                        UUID
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('time')}>
                                        Time
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('age')}>
                                        Age
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('sex')}>
                                        Sex
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('mood')}>
                                        Mood
                                    </TableHeadCell>
                                    <TableHeadCell onClick={() => setSortedField('list')}>
                                        List of products
                                    </TableHeadCell>
                                    <TableHeadCell>
                                        Stats
                                    </TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    _data.map(ctx => (
                                        <TableRow key={ctx.uuid}>
                                            <TableBodyCell>{ ctx.uuid }</TableBodyCell>
                                            <TableBodyCell>{ ctx.time }</TableBodyCell>
                                            <TableBodyCell>{ ctx.age }</TableBodyCell>
                                            <TableBodyCell>{ ctx.sex }</TableBodyCell>
                                            <TableBodyCell>{ ctx.mood }</TableBodyCell>
                                            <TableBodyCell>{ ctx.list }</TableBodyCell>
                                            <TableBodyCell>
                                                <div className={active ? 'svg-wrapp active' : 'svg-wrapp'} onClick={() => handlerOpenStatistics(ctx.uuid)}>
                                                    <StatisticsIcon/>
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

export default Home