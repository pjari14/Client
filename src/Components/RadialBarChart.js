import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const RadialBarChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [67],
      colors: ["#20E647"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            background: "#293450",
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15,
            },
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#fff",
              fontSize: "13px",
            },
            value: {
              color: "#fff",
              fontSize: "30px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#87D4F9"],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  }, []);

  return <div id="chart2" class="col-sm-4" />;
};

export default RadialBarChart;
