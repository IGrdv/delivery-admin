<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import DataTable from 'primevue/datatable/sfc';
import Column from 'primevue/column/sfc';


const restaurants = ref([])
const fields = [ 'Id, Address, PhoneNumber, ActiveOrders']

async function getData() {
    const response = await fetch('https://localhost:7011/api/Restaurant')
    const json = await response.json()
    restaurants.value = json
  }
getData()
</script>

<template>
  <RouterView />
  <div class="top">
    <h2>Рестораны</h2>
  </div>
  
  <DataTable :value="restaurants">
    <Column field="id" header="Id" sortable="true"></Column>
    <Column field="restaurantAddress" header="Адрес"></Column>
    <Column field="phoneNumber" header="Номер телефона"></Column>
    <Column field="activeOrders" header="Активные заказы"></Column>
  </DataTable>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
.top {
  background-color: rgb(21, 125, 151);
  padding: 5px;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
}
.restaurants {
  font-family: 'Rubik', sans-serif;
}
</style>

