<template>
  <ag-grid-vue
    style="width: 100%; height: 600px;"
    class="ag-grid-div ag-theme-balham ag-basic"
    :columnDefs="columnDefs"
    :rowData="rowData"
    rowSelection="multiple"
    @grid-ready="onGridReady"
  >
  </ag-grid-vue>
</template>

<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
//@import "../../node_modules/ag-grid-community/dist/styles/ag-basic.css";

/*
@import "../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../node_modules/ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine-mixin.scss";

@include ag-theme-alpine(
  (
    add-row-background-color: #ace
  )
);
*/
</style>

<script>
import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default {
  name: "App",
  data() {
    return {
      defaultColDef: {
        sortable: true,
        resizable: true
      },
      debug: true,
      rowData: null,
      //ready 이후 필요한 Action 설정
      onGridReady: function() {
        this.api.addGlobalListener(function(type, event) {
          if (type.indexOf("column") >= 0) {
            console.log("Got column event: ", event);
          }
        });
      }
    };
  },
  components: {
    AgGridVue
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        minWidth: 120,
        pinned: "left",
        suppressSizeToFit: true,
        suppressMenu: true,
        sort: "asc"
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        minWidth: 50,
        maxWidth: 100,
        pinned: "left",
        suppressMenu: true,
        suppressSorting: true
      },
      { headerName: "Country", field: "country", width: 120 },
      { headerName: "Year", field: "year", width: 90 },
      { headerName: "Date", field: "date", width: 110 },
      { headerName: "Sport", field: "sport", width: 110 },
      { headerName: "Gold Medal", field: "gold", width: 100 },
      { headerName: "Silver Medal", field: "silver", width: 100 },
      { headerName: "Bronze Medal", field: "bronze", width: 100 },
      { headerName: "Total", field: "total", width: 100 }
    ];

    fetch(
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
    )
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));
  }
};
</script>
