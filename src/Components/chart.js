import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const LineChart = () => {
  useEffect(() => {
    const options = {
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      chart: {
        type: "bar",
      },

      series: [
        {
          data: [
            {
              x: "category A",
              y: 10,
              goals: [
                {
                  name: "Expected",
                  value: 52,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "category B",
              y: 18,

              goals: [
                {
                  name: "Expected",
                  value: 52,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "category C",
              y: 13,
              goals: [
                {
                  name: "Expected",
                  value: 52,
                  strokeColor: "#775DD0",
                },
              ],
            },
          ],
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" />;
};

export default LineChart;
