const template = `
    <v-btn @click="dialogOpen = true">
      Open Dialog
    </v-btn>
    <dlg v-model="dialogOpen"/>
`;

export default {
    template: template,
    data() {
        return { dialogOpen: false }
    },
    components: {
        'dlg': Vue.defineAsyncComponent(() => import('../components/dialog.js'))
    },
}