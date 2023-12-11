<template>
    <div class="turn-ind">
        <div class="mark-x" :class="{ active: turnNum % 2 === 0 }"><fa-icon icon="fa-solid fa-x" /></div>
        <div class="text"><h2>TURN</h2></div>
        <div class="mark-o" :class="{ active: turnNum % 2 === 1 }"><fa-icon icon="fa-regular fa-circle" /></div>
    </div>
</template>

<script>
export default {
    name: "TurnIndicator",
    props: {
        turnNum: Number
    },
}
</script>

<style scoped>
.turn-ind {
    font-size: 25px;
    display: flex;
    align-items: center;
    padding:5px 8px;
}

.text {
    margin: 0 1em;
}

.mark-x,
.mark-o {
    font-size: 25px;
    color:var(--light-gray);
}

.mark-x.active {
    color:var(--blue);
}

.mark-o.active {
    color: var(--accent-green);
}
</style>