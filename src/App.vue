<template>
  <!-- <v-app> -->
    

    <!-- <v-main> -->
      <router-view />
      <!-- <HelloWorld/> -->
    <!-- </v-main>
  </v-app> -->
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
     drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      model2: false,
      type: 'default (no property)',
      clipped: true,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    },

    items: [
          { title: 'Home', icon: 'mdi-home', link: '/'},
          // { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/' },
          // { title: 'Sertifikat', icon: 'mdi-account', link: '/sertifikat'},
          { title: 'Pengawas', icon: 'mdi-help-box', link: '/pengawas' },
        ],
    listSidebar: [
    	{
        action: 'mdi-file-document',
        title: 'Sertifikat',
        active: true,
        items: [
          { title: 'COA dan COW CIF' },
          { title: 'COA dan COW FOB' },
          { title: 'COA dan COW TRANS' },
          { title: 'COA dan COW CFR' },
          ],
        },
        {
        	action: '',
        	title: 'Shipment CIF',
        	items: [
        	{ title: 'Loading'},
        	{ title: 'Upload COA'},
        	{ title: 'Entri COA'},
        	{ title: 'Izin Sandar & Bongkar'}]
        },
        {
        	action: '',
        	title: 'Shipment CFR',
        	items: [
        	{ title: 'Konfirmasi Jadwal'},
        	{ title: 'Upload ROA'}]
        },
        {
        	action: 'mdi-cog',
        	title: 'Account Setting',
        	items: [
        	{ title: 'Account Profile'},
        	{ title: 'Account Password'}]
        }
      ],
      listBar:[
      { 
      	title: 'Pengendalian',
      	icon: 'mdi-microsoft-xbox-controller-menu',
      	children: [
      	{ 
      		title: 'Harga Bulanan',
      		children: [
      		{ title: 'HSD/BBM'},
      		{ title: 'Kurs Tengah'}]
      	},
      	{
      		title: 'Flow Transaksi',
      		icon: '',
      		children:[
      		{ title: 'Kewajiban Pemasok'},
      		{ 
      			title: 'CFR/Trucking',
      			children: [
      			{
      				title: 'Approval Kebutuhan'
      			},
      			{ title: 'Monitoring Jadwal'}
      			]
      		},
      		{ title: 'Nota Dinas'}]
      	}
      	]
      }],
     cruds: [
        ['Create', 'mdi-add'],
        ['Read', 'mdi-insert_drive_file'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
  }),
};
</script>
