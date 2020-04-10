import { Heading } from '@chakra-ui/core'
import { Layout } from '../components/layout'
import { Chart, ChartContainer } from '../components/chart'
import { SubMenu } from '../components/submenu'
import { getHospitalizationData } from '../utils'

const subMenuItems = [
  {
    href: '#currently-hospitalized',
    label: 'Currently Hospitalized',
  },
  {
    href: '#hospitalized-increase',
    label: 'Hospitalized Increase',
  },
  {
    href: '#currently-ventilated',
    label: 'Currently Ventilated',
  },
  {
    href: '#currently-icu',
    label: 'Currently in ICU',
  },
]

export default function Hospitalizations({ stats }) {
  return (
    <Layout>
      <SubMenu items={subMenuItems} />
      <ChartContainer id="currently-hospitalized">
        <Heading>Currently Hospitalized</Heading>
        <Chart data={stats} keys={['hospitalizedCurrently']} label="Currently Hospitalized" />
      </ChartContainer>
      <ChartContainer id="hospitalized-increase">
        <Heading>Hospitalized Increase</Heading>
        <Chart data={stats} keys={['hospitalizedIncrease']} label="Hospitalized Increase" />
      </ChartContainer>
      <ChartContainer id="currently-ventilated">
        <Heading>Currently Ventilated</Heading>
        <Chart data={stats} keys={['onVentilatorCurrently']} label="Currently Ventilated" />
      </ChartContainer>
      <ChartContainer id="currently-icu">
        <Heading>Currently in ICU</Heading>
        <Chart data={stats} keys={['inIcuCurrently']} label="Currently in ICU" />
      </ChartContainer>
    </Layout>
  )
}

export async function getServerSideProps() {
  return getHospitalizationData()
}
