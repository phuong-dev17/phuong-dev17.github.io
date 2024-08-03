const projects = [
    {
        "id": "projectAgeCalculator",
        "name": "Age Calculator",
        "video": "media/AgeCalculator.mp4",
        "description": "Let the user input their year and month of birth then show them their age in years, months, weeks, hours, minutes respectively. Nothing interesting, but fun to know how long you have survived!"
    },
    {
        "id": "projectBmiCalculator",
        "name": "Bmi Calculator",
        "video": "media/BmiCalculator.mp4",
        "description": "Let the user input their weight and height to know their BMI."
    },
    {
        "id": "projectWords",
        "name": "Words",
        "video": "media/words.mp4",
        "description": "A vocabulary app. The user first choose a letter to show a list of words start with that letter. When clicking on a word, a Google search will show the meaning of the word."
    },
    {
        "id": "projectUnscramble",
        "name": "Unscramble",
        "video": "media/Unscramble.mp4",
        "description": "A game that scramble a word and make player unscramble to the correct word. This is great for vocabulary learning purpose."
    },
    {
        "id": "projectWeatherForecast",
        "name": "Weather Forecast",
        "video": "media/ForecastNow.mp4",
        "description": "Give the user weather information at some famous cities around the world."
    },
    {
        "id": "projectRecipeFinder",
        "name": "Recipe Finder",
        "video": "media/recipeFinder.mp4",
        "description": "Let the user find a recipe. The user can also choose more filters to narrow down the recipe that may fit them."
    },
    {
        "id": "projectGoteborgIncidentTracker",
        "name": "Goteborg Incident Tracker",
        "video": "media/GoteborgIncidentTracker.mp4",
        "description": "Let the user interact query information about incidents and police stations in the area"
    },
    {
        "id": "projectTodoList",
        "name": "Todo List",
        "video": "media/TodoList.mp4",
        "description": "Let the user create note and keep track of its complete status."
    },
    {
        "id": "projectAquaTrack",
        "name": "AquaTrack",
        "video": "media/AquaTrack.mp4",
        "description": "Let user set daily water intake goal and keep track of their progress."
    },
    {
        "name": "BuildYourFirstMap",
        "video": "media/BuildYourFirstMap.mp4",
        "description": "Show a list of bike shops in San Francisco city with auto clustering when zooming in/out."
    },
    {
        "name": "Traffic CDM for Operator - Android Application",
        "video": "media/TrafficCDMForOperatorAndroidApp.mp4",
        "description": "Internship at RISE (Research Institutes of Sweden) to develop an Android app supporting to submit events to their Train Collaborative Decision Making (CDM) system. The project is financed by Trafikverket. I used MVVM design pattern structure to divide between UI and logic. In the logic, I use Kotlin Coroutines to run executions in parallel to keep the application run smoothly."
    },
    {
        "name": "Traffic CDM for Operator - React Native Application",
        "video": "media/TrafficCDMForOperatorReactNativeApp.mp4",
        "description": "Summer job at RISE (Research Institutes of Sweden) to develop a React Native app supporting to submit events to their Train Collaborative Decision Making (CDM) system. The project is financed by Trafikverket. During this project, I learnt and applied knowledge for React Native with Expo framework just within 1 month of the summer job. I picked up the knowledge quickly and finished the project with a working product for main functionalities. RISE is satisfied with the result of my work."
    }
];


function addToProjectListingSection(project, index) {
    var projectListingSection = $("#project-listing-section")

    if (index % 2 === 0) {
        var child = $(`<div id="${project.id}" class="row py-2 justify-content-center even-project-section-bg">
        <div class="col-3">
            <video class="video-size" controls>
                <source src="${project.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="col-3">
            <h2 class="strong text-color-on-even-project-section">${project.name}</h2>
            <p class="pt-4 text-color-on-even-project-section"> 
               ${project.description}
            </p>
        </div>
       </div>`)
    } else {
        var child = $(`<div id="${project.id}" class="row py-2 justify-content-center odd-project-section-bg">
        <div class="col-3">
            <h2 class="strong text-color-on-odd-project-section">${project.name}</h2>
            <p class="pt-4 text-color-on-odd-project-section">
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
}

function addToNavbarProjectListDropdown(project) {
    var navbarProjectListDropdown = $("#navbar-project-list-dropdown")

    var child = $(`<li><a class="dropdown-item" href="index.html#${project.id}">${project.name}</a></li>`)

    navbarProjectListDropdown.append(child)
}

projects.reverse().forEach((project, index) => {
    addToProjectListingSection(project, index)
    addToNavbarProjectListDropdown(project)
})
