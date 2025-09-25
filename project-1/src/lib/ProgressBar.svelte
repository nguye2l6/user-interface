<!-- Code is from Svelte Circle Progress Bar Demo -->
<script>
    
	export let progress
  export let weeklygoal
	$: angle = 360 * (progress/weeklygoal);
	
	// Adapt the logic according to the approach
	$:	background = `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(red 0deg, orange 90deg, yellow 180deg, green);`;
	
	$: cssVarStyles = `--background:${background}`
</script>

<style>
#progress-circle {
  background: var(--background);
  border-radius: 50%;
  width: 120px;
  height: 120px;
	transition: all 500ms ease-in;
	will-change: transform;
}
</style>

<div id="progress-circle" style="{cssVarStyles}"></div>
