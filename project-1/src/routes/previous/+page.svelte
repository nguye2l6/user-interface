<script>
    import HelloUser from './../hellouser.svelte';
    import NavBar from './../navbar.svelte';
    import Timer from './../../lib/Timer.svelte';
    import {currentEntry} from './../../lib/store.svelte.js';

    let dates = [
        {
            month: 9,
            day: 24,
            year: 2025
        },
        {
            month: 9,
            day: 23,
            year: 2025
        },
        {
            month: 9,
            day: 22,
            year: 2025
        },
        {
            month: 9,
            day: 28,
            year: 2025
        }
    ]
    function loadEntry(){
        let CurrentTime = {
            month:$currentEntry.timestamp.month,
            day:$currentEntry.timestamp.day,
            year:$currentEntry.timestamp.year
        }
        allEntries.unshift({timestamp: $currentEntry.timestamp, steps:  $currentEntry.numSteps,time:  $currentEntry.activeTime,heartrate:  $currentEntry.avgHeartRate, weight:  $currentEntry.curWeight});
    }
    let allEntries = [
        {timestamp: dates[0], steps: 6500,time: "07:30",heartrate: 130, weight: 145},
        {timestamp: dates[1], steps: 5000,time: "12:25",heartrate: 110, weight: 148},
        {timestamp: dates[2], steps: 8000,time: "18:00",heartrate: 140, weight: 144},
        {timestamp: dates[3], steps: 13500,time: "13:00",heartrate: 109, weight: 143}
    ]  

    let updateDialog;

    let entrySelected = $state(0);
    let prevSteps = $state();
    let prevTime = $state();
    let prevRate = $state();
    let prevWeight = $state();

    function updateEntry(){
        allEntries[entrySelected].steps = prevSteps;
        allEntries[entrySelected].time = prevTime;
        allEntries[entrySelected].heartrate = prevRate;
        allEntries[entrySelected].weight = prevWeight;
        calculateWeekly();
        updateDialog.showModal()
    }

    function calculateWeekly(){

        let numEntries = allEntries.length
        let highestWeight;
        let totalHour = 0 
        let totalMinutes = 0;
        let avgTime;
        let hours, minutes;
        for ( let i = 0; i < numEntries; i++){
            totalSteps += allEntries[i].steps;
            [hours, minutes] = allEntries[i].time.split(":");
            totalHour += Number(hours);
            totalMinutes += Number(minutes);
            if( allEntries[i].heartrate > maxRate){
                maxRate = allEntries[i].heartrate;  
                maxRateIndex = i;
            }
            if( allEntries[i].heartrate < minRate){
                minRate = allEntries[i].heartrate;  
                minRateIndex = i;
            }

            if( allEntries[i].weight > maxWeight){
                maxWeight = allEntries[i].weight;  
                maxWeightIndex = i;
            }
            if( allEntries[i].weight < minWeight){
                minWeight = allEntries[i].weight;  
                minWeightIndex = i;
            }

        }
        avgTime = totalHour / numEntries;
        [avgHour, avgMinute] = String(avgTime).split('.');
        avgMinute = Number(avgMinute) * 6;
        avgSteps = totalSteps / numEntries;
    }

    let avgMinute = $state(0);
    let avgHour = $state(0);
    
    let testMinute = $state(0);
    let minRate = $state(99999999);
    let maxRate = $state(-1);
    let minRateIndex = $state(); 
    let maxRateIndex = $state();

    let minWeight = $state(99999999);
    let maxWeight = $state(-1);
    let minWeightIndex = $state(); 
    let maxWeightIndex = $state();

    let totalSteps = $state(0);
    let avgSteps = $state();
    calculateWeekly();
    loadEntry();

    </script>
    <style>
        @import './../styles.css';
    </style>
    <NavBar></NavBar>
    
    <dialog class="buttonDialog" bind:this={updateDialog}>
        Entry has been Updated
        <button on:click={()=>updateDialog.close()}> Acknowledge </button>
    </dialog>
    
    <div class="container logs">
        <h1 style="text-align:center"> Weekly Stats</h1>

        <br>
        <div class ="container border rounded shadow-sm customcard">
            <div class="row p-2">
                <div>
                    <h1 style="text-align:center"> Steps </h1>
                    <p> You averaged {avgSteps} steps across all your entries! </p>
                    <p> You had {totalSteps} total steps across all your entries! </p>
                    
                </div>
            </div>
            <div class="row p-2">
                <div>
                    <h1 style="text-align:center"> Heart Rate </h1>
                    <p> Highest Avg Heart rate was { maxRate} on {allEntries[maxRateIndex].timestamp.month} - {allEntries[maxRateIndex].timestamp.day} - {allEntries[maxRateIndex].timestamp.year} </p>
                    <p> Lowest Avg Heart rate was { minRate} on {allEntries[minRateIndex].timestamp.month} - {allEntries[minRateIndex].timestamp.day} - {allEntries[minRateIndex].timestamp.year} </p>

                </div>
            </div>

            <div class="row p-2">
                <div>
                    <h1 style="text-align:center"> Weight </h1>
                    <p> Highest Weight was { maxWeight} on {allEntries[maxWeightIndex].timestamp.month} - {allEntries[maxWeightIndex].timestamp.day} - {allEntries[maxWeightIndex].timestamp.year} </p>
                    <p> Lowest Weight was { minWeight} on {allEntries[minWeightIndex].timestamp.month} - {allEntries[minWeightIndex].timestamp.day} - {allEntries[minWeightIndex].timestamp.year} </p>

                </div>
            </div>

            <div class="row p-2">
                <div>
                    <h1 style="text-align:center"> Active Time </h1>
                    By Average, you were most active around: {avgHour}:{avgMinute}
                </div>
            </div>
        </div>
        <br>
    </div>
    
    <div class ="container border rounded shadow-sm customcard">
        <h2> View Previous Entries</h2>
        <div class="row p-2">
            <div class="col-8">
                <p style="display:inline-block;"> Timestamp </p>
                <select bind:value={entrySelected} name="entry">
                    {#each allEntries as entry, i}
                        <option value={i}> {entry.timestamp.month} - {entry.timestamp.day} - {entry.timestamp.year}</option>
                    {/each}
                </select>
                <p> Number of Steps: {allEntries[entrySelected].steps}</p><input class="form-control form-control-sm" bind:value={prevSteps} type="number"> 
                <p> Active Time: {allEntries[entrySelected].time}</p> <input class="form-control form-control-sm" bind:value={prevTime} type="time"> 
                <p> Heartrate: {allEntries[entrySelected].heartrate}</p> <input class="form-control form-control-sm" bind:value={prevRate} type="number"> 
                <p> Weight: {allEntries[entrySelected].weight}</p> <input class="form-control form-control-sm" bind:value={prevWeight} type="number"> 

                <br>
                <button on:click={updateEntry} style="background-color:white;"id="submitEntryButton" class="btn border">Update Entry</button> 
            </div>
        </div>
    </div>
    
    
    