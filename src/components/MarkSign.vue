<template>
    <button :style="{ 'color': markColor }">
        <fa-icon v-show="mark === 0" icon="fa-solid fa-x" style="color:var(--blue)" />
        <fa-icon v-show="mark === 1" icon="fa-regular fa-circle" style="color:var(--accent-green)" />
    </button>
</template>

<script>
function turnNum() {
    this.mark = this.turnNum % 2;
    switch (this.mark) {
        case 0:
            this.markColor = "var(--blue)";
            break;
        case 1:
            this.markColor = "var(--accent-green)";
            break;
        default:
            this.markColor = "var(--light-grey)";
    }
}

export default {
    name: "MarkSlot",
    props: {
        turnNum: Number,
    },
    watch: {
        turnNum,
    },
    data() {
        return {
            mark: -1,
            markColor: "var(--light-grey)"
        }
    }
}
</script>

<style scoped>
button {
    font-size: 40px;
    width: 80px;
    height: 80px;
    border-radius: 4px;
    padding: 0;
}
</style>