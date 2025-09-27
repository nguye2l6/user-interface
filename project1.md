# Project 1: Recording the Journey

Project 1 introduces a mobile tracking "app" that allows users to record information about their cardio health. In its current iteration, weight, heartrate, number of steps, and times of activity are the existing trackable metrics. With the app, users will be able to keep track as their information via "entries" and able to visualize statistics derived from these entries. Additionally, users are able to set goals for their metrics and control.

The goal of this project is going through the design process of creating a tracking application that addresses users needs. The app is built using Sveltekit and Bootstrap 5. Currently, the UI is designed to be viewed specifically on Samsung Galaxy S20 Ultra, which can be simulated through Google Chrome's developer tools.

## Design work-
### Interviewing

I interviewed two people
- Someone who goes to the gym regularly
- Someone who plays pickleball and runs
#### What do you hope to learn from these interviews? 
Prior to implementing and designing the application, useful things to learn is the modality that users prefer tracking, how often they track, and how detailied they would want to track their information.
#### What questions did you ask?
- How often do you track your cardio health, for example, running, heartrate, and steps?
- What do you use to track your information?
- Whats something you don't like about tracking your health?

#### What did your interview participants tell you?  What did you learn from them?
- Preferred Modality is Phone => my application should be designed for mobile view
- They track more than 3 times a week => The entries should be organized by days but allowed to be sparse
- They don't spend alot of time tracking => The entries should be quick and short

### Sketching
For sketching, there were three general phases, 10 minutes of preliminary sketches, 10 minutes of refinement, and continously work on final sketch.

Preliminary Sketches
<img width="4417" height="2628" alt="image" src="https://github.com/user-attachments/assets/32631128-70f7-48df-ab9c-410549c030dc" />

Refinement Sketches
<img width="1152" height="648" alt="image" src="https://github.com/user-attachments/assets/decfec00-5833-4522-b800-412295190cd6" />

Final Sketch
<img width="1638" height="1186" alt="image" src="https://github.com/user-attachments/assets/a5b776c1-aa5c-46e6-957b-3b58f36b5c10" />


### Feedback
Feedback 1: Sketching


## Describe your interface in detail:

The interface has to main pages, the health page(denoted by the heart) and the stats page(denoted by the three line icon)
<img width="442" height="300" alt="image" src="https://github.com/user-attachments/assets/7be2e6aa-f7cc-4676-9973-cd37746cfc81" />

### Health Page

#### Entries
Entries are the underlying data structure that allow the app to work. Entries are stored in a list, where each entry is an item containing metrics such as heartrate,weight,etc..

<img width="404" height="801" alt="image" src="https://github.com/user-attachments/assets/fb972e6e-c1b0-4b45-90fd-18b2d2cb6893" />

On the health page, the current entry can be inputted and eventually saved to the list of all entries. As one can see below, the four green boxes each show a different component of an entry. Some entries are purely numerical while others can be dates and etc.. 

<img width="395" height="692" alt="image" src="https://github.com/user-attachments/assets/cfae77c3-0751-49a1-9c3c-c762e62a8801" />

#### Widgets

For some entries, there are visual components as shown below:
<img width="391" height="215" alt="image" src="https://github.com/user-attachments/assets/cc826a59-6314-4946-bc9c-b152fe947e55" />

The circle represents how close to the goal the current entry is. This was implemented as a svg component which is modified from Svelte Circle Progress Bar Tutorial [https://svelte.dev/playground/f1437286b08d4890b9207180868ee37e?version=5.39.6]

#### Goals

On an entry component, there are also goals that each entry can fulfill. In the bottom right of the picture below, the goal is 150 while the current entry is only 140.
<img width="395" height="184" alt="image" src="https://github.com/user-attachments/assets/33a3a199-1673-4358-b72e-35dfc8133b95" />

Goals are implemented as bounded variables and can also be changed. In order to change goals click the Change Goals button next to Daily Log. The picture below shoes the change goals and corresponding modal box that pops up when it is clicked. The modal references the bounded goal variables
and applies changes to them when the save goal is pressed.

<img width="497" height="537" alt="image" src="https://github.com/user-attachments/assets/5f1a15c9-53da-4a34-b22b-e23b6eea0c68" />

#### Submission

Once the current entry is filled, the entry can be submitted to the entry list. This process is highlighted by red circles below: click the submit entry button, and acknowledge your change.

<img width="632" height="535" alt="image" src="https://github.com/user-attachments/assets/83df4091-4a6d-40b2-a9bb-b655c9bd5bc8" />

There was difficulty transferring information from the home page to the stats page because the stats page is where the entries list is saved. This was mitigated by having a store component that both pages share from. The current entry is saved into the store and accessed by the
stats page to populate the entries list.

### Stats Page

#### Entry Statistics

With all the information in order, the stats page serves as a way to modify previous entries and view derived statistics from the entries.

<img width="197" height="317" alt="image" src="https://github.com/user-attachments/assets/d033b305-4b84-4806-be55-9f362fe96ab7" />
#### Previous Entries


<img width="206" height="236" alt="image" src="https://github.com/user-attachments/assets/afbbd2ee-8326-495d-ba51-127007763087" />

<img width="392" height="235" alt="image" src="https://github.com/user-attachments/assets/e5a3ff5b-5621-4ab6-8e81-ce1534504c7c" />


<img width="203" height="74" alt="image" src="https://github.com/user-attachments/assets/24bc1b44-4317-455a-b0b9-69fc8bd420c9" />

## Future work-
- Themes: Allow users to pick different colors for the app menus. This would be accomplished by binding the current hex values to a variable that can be changed.
- Modify/Remove Entries: Let users be able to change what they want to record. Make a list of entries such as \[heartrate,integer},{bloodpressure,integer},{mood,color}] and use a foreach in svelte to dynamically create entries.
- Data Sync: Upload data from recording apps,smart devices. Use the IOS Health App API to retrieve biometric information which can be stored in the app as an enttry.
- Data validation: There are currently no restriction to entry information other than data type. In order for data security and consistency, inputs should be excluded if they aren't reasonable or are invalid. This can be accomplished by executing variable checks on entry information before it is saved onto the data entries list.

## Include a 2-3 minute demo video, showing your interface in action. 
The easiest way to record this is with a screen capture tool, which also captures audio- such as Quicktime.  Use a voiceover to explain your application.  Include the name of the project, your name, the project components, and how your application works.  You can present it on your webpage or on youtube, but it must be linked on your webpage. 
## Include a link to your source code on github and a link to the publicly hosted application.
Publicly Hosted Link: [https://ui-project-one-pink.vercel.app]


Source Code: [https://github.com/nguye2l6/user-interface/tree/main/project-1]
