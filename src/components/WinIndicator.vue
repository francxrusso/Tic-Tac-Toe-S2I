<template>
    <div>
        <div class="container-result" v-show="!isTie">
            <div class="mark-x"><fa-icon v-show="turnNum % 2 === 0" icon="fa-solid fa-x" /></div>
            <div class="mark-o"><fa-icon v-show="turnNum % 2 === 1" icon="fa-regular fa-circle" /></div>
            <div>
                <h2>WINS</h2>
            </div>
        </div>
        <div class="container-result" v-show="isTie">
            <div class="tie">
                <h2>is a TIE</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        turnNum: Number,
        isTie: Boolean
    }
}
</script>

<style scoped>
/* Maintains the alignment with the win indicator */
.tie {
    margin: 0.25em 0;
}

.mark-x {
    font-size: 25px;
    margin-right: 2px;
    color: var(--blue);
}

.mark-o {
    font-size: 25px;
    margin-right: 2px;
    color: var(--accent-green);
}
</style>