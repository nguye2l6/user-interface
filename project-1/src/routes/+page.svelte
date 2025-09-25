<script>
import HelloUser from './hellouser.svelte';
import NavBar from './navbar.svelte';
import Timer from './../lib/Timer.svelte';
import ProgressBar from './../lib/ProgressBar.svelte';

import {currentEntry} from './../lib/store.svelte.js';

let numSteps = $state('');
let goalSteps = $state(7000);

let activeTime = $state('');
let avgHeartRate = $state('');
let curWeight = $state('');
let goalWeight = $state('150');

let confirmDialog;
let goalDialog;

import { writable } from 'svelte/store';

export const token = writable('Test');

function submitEntry(){
    let date = new Date();
    let formatDate = {
        month: date.getMonth() + 1,
        day: date.getDate(),
        year: date.getFullYear()
    }
    let Entry = {timestamp: formatDate, numSteps: numSteps, activeTime: activeTime, avgHeartRate: avgHeartRate,curWeight: curWeight};
    $currentEntry = Entry;
    confirmDialog.close();
}

</script>
<style>
    @import './styles.css';
</style>
<NavBar></NavBar>
<HelloUser></HelloUser>
<br>


<dialog class="buttonDialog" bind:this={confirmDialog}>
    Daily Log Has Been Submitted
    <button on:click={submitEntry}> Acknowledge </button>
</dialog>

<dialog class="buttonDialog" bind:this={goalDialog}>
    Goal Steps:
    <input bind:value={goalSteps} type="number"><br><br>

    Goal Weight:
    <input bind:value={goalWeight} type="number"><br><br>

    <button style="float: right;"on:click={()=>goalDialog.close()}> Save Goals </button>
</dialog>

<div class="container logs">
    <h1 style="text-align:center"> Daily Log</h1>
    <div style="text-align:center;">
    <button on:click={()=> confirmDialog.showModal()} style="background-color:#90EE90;"id="submitEntryButton" class="btn border">Submit Entry</button> 
    <button on:click={()=> goalDialog.showModal()} style="background-color:#f3fdf3;"id="Change Goals" class="btn border">Change Goals</button>  
    </div>
    <br>
    <div class ="container border rounded shadow-sm customcard">
        <div class="row p-2">
            <div class="col-8">
            <label for="numSteps"># of Steps: {numSteps}</label>
            <input bind:value={numSteps} class="form-control form-control-sm" type="number" id="numSteps" name="numSteps"><br><br>
            </div>
            <div class="col-4"  style="flex-shrink:0;">
                <ProgressBar class="progress" progress= {numSteps} weeklygoal= {goalSteps}></ProgressBar>
                <p style='text-align: right;'>{numSteps} / {goalSteps}</p>
            </div>
        </div>
    </div>
    <br>
    <div class ="container border rounded shadow-sm customcard">
        <div class="row p-2">
            <div class="col-8">
            <label >Avg HeartRate:</label>
            <input bind:value={avgHeartRate} class="form-control form-control-sm" type="number" id="numSteps" name="numSteps"><br><br>
            </div>
            <div class="col-4"  style="flex-shrink:0;">
                <ProgressBar class="progress" progress= 0></ProgressBar>
            </div>
        </div>
    </div>
    <br>
    <div class ="container border rounded shadow-sm customcard">
        <div class="row p-2">
            <div class="col-8">
            <label>Most Active Time:</label>
            <input bind:value={activeTime} class="form-control form-control-sm" type="time" id="activeTime" name="activeTime"><br><br>
            </div>
        </div>
    </div>
    <br>
    <div class ="container border rounded shadow-sm customcard">
        <div class="row p-2">
            <div class="col-8">
            <label for="numSteps">Weight:</label>
            <input bind:value={curWeight} class="form-control form-control-sm" type="number" id="numSteps" name="numSteps"><br><br>
            </div>
            <p style='text-align: right;'>{curWeight} / {goalWeight}</p>
        </div>
    </div>
</div>


