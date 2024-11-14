const template = `
<span> You've visited page 3 <v-chip>{{ this.$store.state.count }}</v-chip> time<span v-if="this.$store.state.count > 1">s</span>! </span>
`;

export default {
    template: template,
    mounted() {
        this.$store.state.count++;
    },
    data() {
        return {
        }
    }
}