const projects = [
    {
        "name": "Age Calculator",
        "video": "media/AgeCalculator.mp4",
        "description": "Let the user input their year and month of birth then show them their age in years, months, weeks, hours, minutes respectively. Nothing interesting, but fun to know how long you have survived!"
    },
    {
        "name": "Bmi Calculator",
        "video": "media/BmiCalculator.mp4",
        "description": "Let the user input their weight and height to know their BMI."
    },
    {
        "name": "Words",
        "video": "media/words.mp4",
        "description": "A vocabulary app. The user first choose a letter to show a list of words start with that letter. When clicking on a word, a Google search will show the meaning of the word."
    },
    {
        "name": "Unscramble",
        "video": "media/Unscramble.mp4",
        "description": "A game that scramble a word and make player unscramble to the correct word. This is great for vocabulary learning purpose."
    },
    {
        "name": "Weather Forecast",
        "video": "media/ForecastNow.mp4",
        "description": "Give the user weather information at some famous cities around the world."
    },
    {
        "name": "Recipe Finder",
        "video": "media/recipeFinder.mp4",
        "description": "Let the user find a recipe. The user can also choose more filters to narrow down the recipe that may fit them."
    },
    {
        "name": "Goteborg Incident Tracker",
        "video": "media/GoteborgIncidentTracker.mp4",
        "description": "Let the user interact query information about incidents and police stations in the area"
    },
    {
        "name": "Todo List",
        "video": "media/TodoList.mp4",
        "description": "Let the user create note and keep track of its complete status."
    },
    {
        "name": "AquaTrack",
        "video": "media/AquaTrack.mp4",
        "description": "Let user set daily water intake goal and keep track of their progress."
    },
];

var projectListingSection = $("#project-listing-section")
projects.reverse().forEach((project, index) => {
    if (index % 2 === 0) {
        var child = $(`<div class="row py-2 justify-content-center even-project-section-bg">
        <div class="col-3">
            <video class="video-size" controls>
                <source src="${project.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="col-3">
            <h2 class="strong">${project.name}</h2>
            <p class="pt-5"> 
               ${project.description}
            </p>
        </div>
       </div>`)
    } else {
        var child = $(`<div class="row py-2 justify-content-center odd-project-section-bg">
        <div class="col-3">
            <h2 class="strong">${project.name}</h2>
            <p class="pt-5">
                ${project.description}
            </p>
        </div>
        <div class="col-3">
            <video class="video-size" controls>
                <source src="${project.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
       </div>`)
    }

    projectListingSection.append(child)
})