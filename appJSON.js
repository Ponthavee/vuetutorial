new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => ( this.info = response.data))
    }
  })