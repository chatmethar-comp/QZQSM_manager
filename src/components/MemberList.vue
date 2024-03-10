<template>
  <div class="p-4 max-w-[560px] shadow-md shadow-dard rounded-lg min-w-[500px]">
    <h1 class="font-semibold mb-2">Area Representative</h1>
    <div class="flex w-full gap-2 items-center justify-start">
      <div class="mb-2 w-2/3">
        <label for="search" class="block text-sm font-medium text-gray-600">find person</label>
        <input id="search" v-model="searchQuery" placeholder="Name" type="text" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
      </div>
      <div class="mb-2 w-1/3">
        <label for="location" class="block text-sm font-medium text-gray-600">Filter by Location</label>
        <select id="location" v-model="selectedLocation" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
          <option value="">All</option>
          <option v-for="area in areas" :key="area" :value="area">{{ area }}</option>
        </select>
      </div>
    </div>
    <ul class="space-y-2 h-64 overflow-y-scroll">
      <li v-for="member in filteredMembers" :key="member.id" @click="showMoreInfo(member)" class="bg-white hover:bg-primarylight hover:bg-opacity-10 duration-150 border rounded-lg shadow-sm px-3 py-2 mr-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3 flex-1">
              <img :src="member.image" alt="Profile Image" class="object-cover w-10 h-10 rounded-full">
              <h2 class="font-medium text-sm text-gray-800 w-1/3">{{ member.name }}</h2>
              <p class="text-gray-600 w-1/5 text-sm">{{ member.area }}</p>
              <div class="flex items-center gap-2 w-1/5">
                  <div :class="statusColorClass(member.status)" class=" w-3 h-3 rounded-full"></div>
                  <p class="text-sm">{{ member.status }}</p>
              </div>
          </div>
          <div>
            <button @click="showMoreInfo(member)" class="bg-primary text-white text-sm px-2 py-1 rounded-lg">Contact</button>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="selectedMember" class="absolute inset-0 bg-black opacity-20 z-0"></div>
    <div v-if="selectedMember" class="fixed inset-0 flex items-center justify-center z-50 mx-4">
      <div class="bg-white p-4 rounded-lg shadow-l min-w-[500px] w-[560px]">
        <div class="flex items-center gap-3 mb-2">
          <h2 class="font-semibold text-md">{{ selectedMember.name }}</h2>
          <div class="flex items-center text-sm gap-2">
            <div :class="statusColorClass(selectedMember.status)" class="w-3 h-3 rounded-full"></div>
            <p class="">{{ selectedMember.status }}</p>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4 ">
          <div>
            <div class="flex gap-2 mb-2 cursor-pointer hover:text-primary">
              <i class="fas fa-phone w-4 "></i>
              <p class="text-gray-600 text-sm hover:text-primary">{{ selectedMember.tel }}</p>
            </div>
            <div class="flex gap-2 items-start cursor-pointer hover:text-primary">
              <i class="fa-brands fa-line w-4  "></i>
              <p class="text-gray-600 mb-2 text-sm hover:text-primary">{{ selectedMember.line_id }}</p>
            </div>
            <div class="flex gap-2 justify-start mb-2 cursor-pointer hover:text-primary">
              <i class="fas fa-map-marker-alt w-4"></i>
              <div class="flex flex-col gap-1">
                <p class="text-gray-600 text-sm hover:text-primary"><span>lattitude: {{ selectedMember.location.lat }} </span></p>
                <p class="text-gray-600 text-sm hover:text-primary"><span>longtitude: {{ selectedMember.location.lng }}</span><br><span class="text-xs m-0 text-gray-400">(syncing with Spresense...)</span></p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex gap-2 items-start cursor-pointer hover:text-primary">
              <i class="fas fa-home w-4  "></i>
              <p class="text-gray-600 mb-2 text-sm hover:text-primary">{{ selectedMember.address }}</p>
            </div>
          </div>
        </div>
        <button @click="closeMoreInfo" class=" text-sm bg-red-500 text-white px-3 py-1 rounded-lg mt-2 ">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        { id: 1, name: 'Chatmethar Chantawibool', area: 'Hatyai', image: 'https://via.placeholder.com/150', status: 'stable', tel: '+66 656482448', address: '123 Moo 4, Tambon Bo Yang, Amphoe Mueang Songkhla 90000', location: {lat: 0, lng: 0}, line_id: 'kankrai.c' },
        { id: 2, name: 'Alfatil Puti', area: 'Pattani', image: 'https://via.placeholder.com/150', status: 'warning', tel: '+66 656482448', address: '456/78 Phetkasem Road, Tambon Bang Kaeo, Amphoe Mueang Pattani 94000', location: {lat: 0, lng: 0}, line_id: 'spo.c' },
        { id: 3, name: 'Thisanapat', area: 'Chonburi', image: 'https://via.placeholder.com/150', status: 'disaster', tel: '+66 656482448', address: '89 Sukhumvit Road, Tambon Nong Prue, Amphoe Bang Lamung 20150', location: {lat: 0, lng: 0}, line_id: 'kankrai.c' },
        { id: 4, name: 'Safe', area: 'Chonburi', image: 'https://via.placeholder.com/150', status: 'stable', tel: '+66 656482448', address: '89 Sukhumvit Road, Tambon Nong Prue, Amphoe Bang Lamung 20150', location: {lat: 0, lng: 0}, line_id: 'kankrai.c' },
        { id: 5, name: 'Papitchaya', area: 'Chaingmai', image: 'https://via.placeholder.com/150', status: 'warning', tel: '+66 656482448', address: '222 Tha Pae Road, Tambon Chang Moi, Amphoe Mueang Chiang Mai 50300', location: {lat: 0, lng: 0}, line_id: 'kankrai.c' },
        { id: 6, name: 'Tanapon natanon', area: 'Hatyai', image: 'https://via.placeholder.com/150', status: 'stable', tel: '+66 656482448', address: '', location: {lat: 0, lng: 0}, line_id: 'kankrai.c' },
      ],
      selectedLocation: '',
      selectedMember: null,
      searchQuery: '',
    };
  },
  computed: {
    filteredMembers() {
      if (this.selectedLocation === '' && this.searchQuery === '') {
        return this.members;
      }

      let filtered = this.members;

      if (this.selectedLocation !== '') {
        filtered = filtered.filter(member => member.area === this.selectedLocation);
      }

      if (this.searchQuery !== '') {
        filtered = filtered.filter(member => member.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }

      return filtered;
    }
  },
  methods: {
    statusColorClass(status) {
      switch (status) {
        case 'stable':
          return 'bg-gray-400';
        case 'warning':
          return 'bg-yellow-400';
        case 'disaster':
          return 'bg-red-500';
        default:
          return '';
      }
    },
    showMoreInfo(member) {
      this.selectedMember = member;
    },
    closeMoreInfo() {
      this.selectedMember = null;
    },
  },
  created() {
    this.areas = [...new Set(this.members.map(member => member.area))];
  },
};
</script>

<style scoped>
/* Display scrollbar on the right side */
ul::-webkit-scrollbar {
  width: 0.5rem;
}

ul::-webkit-scrollbar-track {
  background: bg-red-200;
}

ul::-webkit-scrollbar-thumb {
  background: #ccc;
}

ul::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
</style>