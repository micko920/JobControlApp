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
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
