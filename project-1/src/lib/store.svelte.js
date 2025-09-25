import { writable } from 'svelte/store';

export const currentEntry = writable({
    timestamp:        {
        month: 9,
        day: 30,
        year: 2025
    },
    numSteps: 400,
    activeTime: "04:30",
    avgHeartRate: 90,
    curWeight: 130
  });
