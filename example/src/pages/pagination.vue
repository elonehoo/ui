<script setup lang="ts">
const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}]
</script>

<template>
  <div class="table-box">
    <table class="table-main">
      <thead>
        <tr>
          <th class="table-th">
            <span>Id</span>
          </th>
          <th class="table-th">
            <span>Name</span>
          </th>
          <th class="table-th">
            <span>Title</span>
          </th>
          <th class="table-th">
            <span>Email</span>
          </th>
          <th class="table-th">
            <span>Role</span>
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="item in people">
          <td class="table-td">{{ item.id }}</td>
          <td class="table-td">{{ item.name }}</td>
          <td class="table-td">{{ item.title }}</td>
          <td class="table-td">{{ item.email }}</td>
          <td class="table-td">{{ item.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
<div class="page-box">
  <div class="page-main">
    <nav class="page-body" aria-label="Pagination">
      <a href="#" class="page-star">
        <div class="w-5 h-5 i-carbon-chevron-left" />
      </a>
      <a href="#" v-for="i in 5" :key="i" class="page-content">{{ i }}</a>
      <a href="#" class="page-end">
        <div class="w-5 h-5 i-carbon-chevron-right" />
      </a>
    </nav>
  </div>
</div>
</template>
