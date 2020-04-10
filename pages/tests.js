import { Heading } from '@chakra-ui/core'
import { Layout } from '../pages/layout'
import { Chart, ChartContainer } from '../components/chart'
import { SubMenu } from '../components/submenu'
import { getTestData } from '../utils'
const subMenuItems = [
  {
    href: '#total-tests',
    label: 'Total Test Results',
  },
  {
    href: '#test-increase',
    label: 'Test Result Increases',
  },
  {
    href: '#positive-ratio',
    label: 'Positive Ratio',
  },
]
export default function Tests({ stats }) {
  return (
    <Layout>
      <SubMenu items={subMenuItems} />
      <ChartContainer id="total-tests">
        <Heading>Total Test Results</Heading>
        <Chart data={stats} keys={['totalTestResults']} label="Total Test Results" />
      </ChartContainer>
      <ChartContainer id="test-increase">
        <Heading>Test Result Increases</Heading>
        <Chart data={stats} keys={['totalTestResultsIncrease']} label="Test Result Increases" />
      </ChartContainer>
      <ChartContainer id="positive-ratio">
        <Heading>Positive Ratio</Heading>
        <Chart data={stats} keys={['positiveRatio']} label="Positive Ratio" percent />
      </ChartContainer>
    </Layout>
  )
}

export async function getServerSideProps() {
  return getTestData()
}
