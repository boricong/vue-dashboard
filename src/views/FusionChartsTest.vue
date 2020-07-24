<template>
  <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
  ></fusioncharts>
</template>

<script>
//import VueFusionCharts from "../../node_modules/fusioncharts";
//import Charts from "../../node_modules/fusioncharts/fusioncharts.charts";
//import { FCComponent } from "../../node_modules/vue-fusioncharts";

// Resolves charts dependency
Charts(VueFusionCharts);

const dataSource = {
  chart: {
    caption: "Recommended Portfolio Split",
    subcaption: "For a net-worth of $1M",
    showvalues: "1",
    showpercentintooltip: "0",
    numberprefix: "$",
    enablemultislicing: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Equity",
      value: "300000"
    },
    {
      label: "Debt",
      value: "230000"
    },
    {
      label: "Bullion",
      value: "180000"
    },
    {
      label: "Real-estate",
      value: "270000"
    },
    {
      label: "Insurance",
      value: "20000"
    }
  ]
};

export default {
  components: {
    fusioncharts: FCComponent
  },
  data: () => ({
    type: "pie3d",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  })
};
</script>
