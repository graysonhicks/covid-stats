import React from 'react';
import fetch from 'isomorphic-unfetch';
import {  BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { ThemeProvider } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

export default function Index({stats}) {
  return (
    <ThemeProvider>
      <Box p={4}>
        <Heading m={0}>COVID-19 Tracking</Heading>
        <BarChart width={1200} height={400} data={stats.reverse()}>
          <Bar type="monotone" dataKey="positive" stroke="#8884d8" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </Box>
    </ThemeProvider>
  );
}

Index.getInitialProps = async function() {
  const res = await fetch('https://covidtracking.com/api/us/daily');
  const data = await res.json();

  return {
    stats: data.map(entry => {
      const stringDate = entry.date.toString()
      const year        = stringDate.substring(0,4);
      const month       = stringDate.substring(4,6);
      const day         = stringDate.substring(6,8);
      const date        = new Date(year, month-1, day);

      entry.formattedDate = date

      return entry;
    })
  };
};
