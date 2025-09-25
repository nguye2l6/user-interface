<script>
    import Timer from './../lib/Timer.svelte';

    let joinDate = 'January 1, 2025'
    let activeDays = 73;
</script>

<div class="container-sm border hellobox">
    <br>
    <h1 style="text-align:center">Hey John!</h1>
    <p>Join Date: { joinDate }</p>
    <p>Active Days:{ activeDays }</p>
    <p>Current Time: <Timer /> </p>
</div>

<style>
    .hellobox{
        max-width: 500px; 
        background: #d2f8d2; 
    }
</style>