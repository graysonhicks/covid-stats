export const formatDate = (unformattedDate) => {
  const stringDate = unformattedDate.toString()
  const year = stringDate.substring(0, 4)
  const month = stringDate.substring(4, 6)
  const day = stringDate.substring(6, 8)
  const date = new Date(year, month - 1, day)
  const monthS = date.toLocaleString('default', { month: 'long' })
  let dd = date.getDate()

  let mm = date.getMonth() + 1

  if (mm < 10) {
    mm = '0' + mm
  }
  return monthS + ' ' + dd
}

const API_URL = 'https://covidtracking.com/api/us/daily'

export const getDeathData = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()

  return {
    props: {
      stats: data
        .map((entry) => {
          let result = {}
          result.formattedDate = formatDate(entry.date)
          result.death = entry.death
          result.deathIncrease = entry.deathIncrease

          return result
        })
        .reverse(),
    },
  }
}

export const getTestData = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()

  return {
    props: {
      stats: data
        .map((entry) => {
          let result = {}
          result.formattedDate = formatDate(entry.date)
          result.totalTestResults = entry.totalTestResults
          result.totalTestResultsIncrease = entry.totalTestResultsIncrease
          result.positiveRatio = entry.positive / entry.totalTestResults
          return result
        })
        .reverse(),
    },
  }
}

export const getHospitalizationData = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()

  return {
    props: {
      stats: data
        .map((entry) => {
          let result = {}
          result.formattedDate = formatDate(entry.date)
          result.hospitalizedCurrently = entry.hospitalizedCurrently
          result.hospitalizedIncrease = entry.hospitalizedIncrease
          result.onVentilatorCurrently = entry.onVentilatorCurrently
          result.inIcuCurrently = entry.inIcuCurrently
          return result
        })
        .reverse(),
    },
  }
}

export const buildColorTheme = (theme) => {
  let themeColors = []
  const keys = ['blue', 'red', 'gray', 'orange', 'purple', 'teal', 'cyan', 'pink', 'yellow']
  for (let i = 0; i < keys.length; i++) {
    const currentColor = keys[i]
    const color300 = theme.colors[currentColor]['300']
    const color400 = theme.colors[currentColor]['400']
    themeColors.push(color300, color400)
  }
  return themeColors
}
