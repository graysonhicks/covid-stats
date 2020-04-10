import { Heading } from '@chakra-ui/core'
import { Layout } from '../components/layout'
import { Chart, ChartContainer } from '../components/chart'
import { SubMenu } from '../components/submenu'
import { getDeathData } from '../utils'
const subMenuItems = [
  {
    href: '#deaths',
    label: 'Deaths',
  },
  {
    href: '#death-increases',
    label: 'Death Increases',
  },
]
export default function Deaths({ stats }) {
  return (
    <Layout>
      <SubMenu items={subMenuItems} />
      <ChartContainer id="deaths">
        <Heading>Deaths</Heading>
        <Chart data={stats} keys={['death']} label="Deaths" />
      </ChartContainer>
      <ChartContainer id="death-increases">
        <Heading>Death Increases</Heading>
        <Chart data={stats} keys={['deathIncrease']} label="Death Increase" />
      </ChartContainer>
    </Layout>
  )
}

export async function getServerSideProps() {
  return getDeathData()
}
