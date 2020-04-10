import { ResponsiveBar } from '@nivo/bar'
import { Box, Stat, StatLabel, StatNumber, StatHelpText, useTheme } from '@chakra-ui/core'
import { shuffle } from 'lodash'
import { buildColorTheme } from '../utils'

const ToolTip = ({ value, label, date }) => {
  return (
    <Stat textAlign="center" p={0}>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText>{date}</StatHelpText>
    </Stat>
  )
}

export const Chart = ({ data, keys, label, percent }) => {
  const theme = useTheme()
  const colors = shuffle(buildColorTheme(theme))

  return (
    <ResponsiveBar
      data={data}
      groupMode="grouped"
      keys={keys}
      indexBy="formattedDate"
      margin={{ top: 0, right: 0, bottom: 100, left: 60 }}
      padding={0.05}
      colors={colors}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisBottom={{
        tickValues: [data[0].formattedDate, data[data.length - 1].formattedDate],
        tickSize: 5,
        tickPadding: 15,
        tickRotation: 0,
        legend: 'Date',
        legendPosition: 'middle',
        legendOffset: 50,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      tooltip={function ({ value, indexValue }) {
        const formattedValue = percent
          ? `${(value * 100).toFixed(2)}%`
          : value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        return <ToolTip value={formattedValue} label={label} date={indexValue} />
      }}
      labelFormat={percent ? '.0%' : '.3~s'}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="black"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  )
}

export const ChartContainer = ({ children, ...rest }) => (
  <Box height="50vh" {...rest}>
    {children}
  </Box>
)
