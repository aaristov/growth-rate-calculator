<template>
    <div>
        <table class="history">
            <tr>
                <td>id</td>
                <td>OD1</td>
                <td>OD2</td>
                <td>Period</td>
                <td>Doubling time</td>
            </tr>
            <tr v-for="item in history" v-bind:key="item.id" >
                <td>{{item.id}}</td>
                <td>{{item.OD1}}</td>
                <td>{{item.OD2}}</td>
                <td>{{item.period}}</td>
                <td>{{item.doublingTime}}</td>

            </tr>
        </table>
    </div>
</template>


<script>

export default {
    name: 'History',
    props: [
        'history'
    ]

}
</script>

<style>
.history {
    color: #090505;
    text-align: center;
}
</style>
