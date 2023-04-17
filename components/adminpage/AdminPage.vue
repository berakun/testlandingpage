<template>
  <div class="relative overflow-x-auto w-screen py-10 px-10">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th v-for="(v, k) in headers" :key="k" scope="col" class="px-6 py-3 text-center">
            {{ v.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v, k) in users" :key="k" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
          <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ k + 1 }}
          </td>
          <td class="px-6 py-4">
            {{ v.product_name }}
          </td>
          <td class="px-6 py-4">
            {{ v.color }}
          </td>
          <td class="px-6 py-4">
            {{ v.category }}
          </td>
          <td class="px-6 py-4">
            {{ v.price }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      headers: [
        { text: 'no', value: '' },
        { text: 'product_name', value: 'product_name' },
        { text: 'color', value: 'color' },
        { text: 'category', value: 'category' },
        { text: 'price', value: 'price' }
      ],
      users: [],
      search: '',
    };
  },
  async mounted() {
    const response = await this.$gorilla.get('/');
    this.users = response.data.data;
    console.log(response);
  },
};

</script>
