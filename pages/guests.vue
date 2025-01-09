<script setup lang="ts">
const columns = [{
  key: 'id',
  label: 'Id'
}, {
  key: 'first_name',
  label: 'First Name'
}, {
  key: 'last_name',
  label: 'Last Name'
}, {
  key: 'actions'
}]

const people = [{
  id: 1,
  first_name: 'Lindsay Walton',
  last_name: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
}, {
  id: 2,
  first_name: 'Courtney Henry',
  last_name: 'Designer',
}, {
  id: 3,
  first_name: 'Tom Cook',
  last_name: 'Director of Product',
}, {
  id: 4,
  first_name: 'Whitney Francis',
  last_name: 'Copywriter',
}, {
  id: 5,
  first_name: 'Leonard Krasner',
  last_name: 'Senior Designer',
}, {
  id: 6,
  first_name: 'Floyd Miles',
  last_name: 'Principal Designer',
}]

const items = row => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

const selected = ref([people[1]])


const page = ref(1)
const pageCount = 5

const rows = computed(() => {
  return people.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<template>
  <UTable  singleSelect  :rows="rows"  :columns="columns">

    <template #name-data="{ row }">
      <span :class="[selected.find(person => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
    </template>

    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
      </UDropdown>
    </template>

    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 text-white bg-orange-400">
      <UPagination v-model="page" :page-count="pageCount" :total="people.length" />
    </div>
  </UTable>
</template>

