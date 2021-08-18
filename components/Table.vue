<template>
  <table>
    <thead>
      <th>State</th>
      <th>Title</th>
      <th>Last Edited</th>
      <th>Date Created</th>
    </thead>
    <tbody>
      <tr>
        <td><Button label="OK" /></td>
        <td>HelloWorld.R</td>
        <td>10 mins</td>
        <td>10/10/2002</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'JobList',
  data() {
    return {
      jsonLink1: 'https://mysite.com/test.json', // only this works
      jsonLink2: '/storage.json', // not working (
    }
  },

  function () {
    fetch(this.$data.jsonLink1, { mode: 'cors' })
      .then(function (response) {
        return response.text()
      })
      .then(function (text) {
        console.log('Request successful', text)
      })
      .catch(function (error) {
        console.log('Request failed', error)
      })
  },
}
</script>
