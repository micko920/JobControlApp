<template>
  <table class="w-9/12 mt-16 mx-auto">
    <thead class="text-2xl">
      <th>State</th>
      <th>Title</th>
      <th>Last Edited</th>
      <th>Date Created</th>
    </thead>
    <tbody>
      <tr class="">
        <td><router-link to="/JobEditor"><Button label="OK" backgroundColor="#0bec03"/></router-link></td>
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
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
