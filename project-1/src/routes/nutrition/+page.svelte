<script>
    import HelloUser from './../hellouser.svelte';
    import NavBar from './../navbar.svelte';
    import Timer from './../../lib/Timer.svelte';
    import ProgressBar from './../../lib/ProgressBar.svelte'
    </script>
    <style>
        @import './../styles.css';
    </style>
<NavBar></NavBar>
<br>
<HelloUser></HelloUser>
<br>
<div class="container-sm logs">
    <h1 style="text-align:center"> Daily Log - Nutrition </h1>
    <div class="row row-cols-2 ">
        <div class="col d-flex justify-content-center">1
            <ProgressBar progress= 0></ProgressBar>
        </div>
        <div class="col d-flex justify-content-center">1
            <ProgressBar progress= 0></ProgressBar>
        </div>
        <div class="col d-flex justify-content-center">1
            <ProgressBar progress= 0></ProgressBar>
        </div>
        <div class="col d-flex justify-content-center">1
            <ProgressBar progress= 0></ProgressBar>
        </div>
    </div>
</div>

    