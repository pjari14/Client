import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const LineRadialBarChart = () => {
  useEffect(() => {
    const chart1 = new ApexCharts(document.querySelector("#chart1"), {
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      chart: {
        type: "bar",
        height: 400,
      },

      series: [
        {
          data: [
            {
              x: "UttarPradesh",
              y: 7.4,
            },
            {
              x: "AP",
              y: 5.8,
            },
            {
              x: "Jharkhand",
              y: 5.3,
            },
            {
              x: "Meghalaya",
              y: 5.1,
            },
            {
              x: "Delhi",
              y: 5,
            },
            {
              x: "Assam",
              y: 4.4,
            },
            {
              x: "Chhattisgarh",
              y: 4,
            },
            {
              x: "Haryana",
              y: 3.8,
            },
            {
              x: "Odisha",
              y: 3.8,
            },
            {
              x: "AndhraPradesh",
              y: 3.6,
            },
          ],
        },
      ],
    });

    const chart2 = new ApexCharts(document.querySelector("#chart2"), {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [76],
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
    });
    const chart3 = new ApexCharts(document.querySelector("#chart3"), {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [84],
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
    });
    const chart4 = new ApexCharts(document.querySelector("#chart4"), {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [20],
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
    });
    const chart5 = new ApexCharts(document.querySelector("#chart5"), {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#FF1654", "#247BA0"],
      series: [
        {
          name: "Series A",
          data: [487.8, 445.9, 422.2, 445.9, 445.9],
        },
      ],
      stroke: {
        width: [4, 4],
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
        },
      },
      xaxis: {
        categories: [2020, 2021, 2022, 2023, 2024],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "grey",
          },
          labels: {
            style: {
              colors: "black",
            },
          },
          title: {
            text: "Per 100,000 People",
            style: {
              color: "#FF1654",
            },
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        x: {
          show: true,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    });
    chart1.render();
    chart2.render();

    chart5.render();
    return () => {
      chart1.destroy();
      chart2.destroy();

      chart5.destroy();
    };
  }, []);

  return (
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-7 shadow-lg p-5" id="chart1">
          <h2>List of states and union territories of India by crime rate</h2>
        </div>
        <div class="col-4 ms-4 p-5 shadow-lg " id="chart2">
          <h2>Crime-solving rate 76% of 45,869 cases solved in 2023</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 7 shadow-lg p-5 my-5" id="chart5">
          <h2>Crime Rate in India Year Wise</h2>
        </div>
      </div>
    </div>
  );
};

export default LineRadialBarChart;
