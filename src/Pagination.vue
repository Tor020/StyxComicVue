// vue component pagination?
new Vue({
  el: "#app",
  components: {
    Pagination
  },
  data: {
    page: 1,
    perPage: 20,
    records: []
  },
  methods: {
    callback: function(page) {
      // no need for callback here since you have all your data loaded already
    }
  },
  computed: {
    displayedRecords() {
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;
      return this.records.slice(startIndex, endIndex);
    }
  },
  created() {
    // here we simulate an api call that returns the complete list
    for (let i = 1; i <= 500; i++) {
      this.records.push(`Item ${i}`);
    }
  }
});

#app {
  text-align: center;
}

[v-cloak] {
  display: none;
}

<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
<script src="https://cdn.rawgit.com/matfish2/vue-pagination-2/controlled-component/dist/vue-pagination-2.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>
<div id="app" v-cloak>
  <h2><a target="_blank" href="https://www.npmjs.com/package/vue-pagination-2">Vue Pagination 2</a></h2>
  <p>Selected page: {{page}}</p>
  <ul>
    <li v-for="(record, index) of displayedRecords" :key="index">{{record}}</li>
  </ul>
  <pagination :records="records.length" v-model="page" :per-page="perPage" @paginate="callback">
  </pagination>
</div>

new Vue({
  el: "#app",
  components: {
    Pagination
  },
  data: {
    page: 1,
    perPage: 20,
    records: [],
    recordsLength: 0
  },
  methods: {
    getPage: function(page) {
      // we simulate an api call that fetch the records from a backend
      this.records = [];
      const startIndex = this.perPage * (page - 1) + 1;
      const endIndex = startIndex + this.perPage - 1;
      for (let i = startIndex; i <= endIndex; i++) {
        this.records.push(`Item ${i}`);
      }
    },
    getRecordsLength() {
      // here we simulate an api call that returns the records length
      this.recordsLength = 500;
    }
  },
  created() {
    this.getRecordsLength();
    this.getPage(this.page);
  }
});

#app {
  text-align: center;
}

[v-cloak] {
  display: none;
}

<script src="https://cdn.rawgit.com/matfish2/vue-pagination-2/controlled-component/dist/vue-pagination-2.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>
<div id="app" v-cloak>
  <h2><a target="_blank" href="https://www.npmjs.com/package/vue-pagination-2">Vue Pagination 2</a></h2>
  <p>Selected page: {{page}}</p>
  <ul>
    <li v-for="(record, index) of records" :key="index">{{record}}</li>
  </ul>
  <pagination :records="recordsLength" v-model="page" :per-page="perPage" @paginate="getPage">
  </pagination>
</div>