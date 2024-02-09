const projects = [
    {
        "name": "Age Calculator",
        "video": "media/AgeCalculator.mp4",
        "description": "This is the app to ..."
    },
    {
        "name": "Bmi Calculator",
        "video": "media/BmiCalculator.mp4",
        "description": "This is the app to ..."
    },
    {
        "name": "Words",
        "video": "media/words.mp4",
        "description": "This is the app to ..."
    },
    {
        "name": "Unscramble",
        "video": "media/Unscramble.mp4",
        "description": "This is the app to ..."
    },
    {
        "name": "Weather Forecast",
        "video": "media/ForecastNow.mp4",
        "description": "This is the app to ..."
    },
    {
        "name": "Recipe Finder",
        "video": "media/recipeFinder.mp4",
        "description": "This is the app to ..."
    },
    {
        "name": "Goteborg Incident Tracker",
        "video": "media/GoteborgIncidentTracker.mp4",
        "description": "This is the app to ..."
    },
    {
        "name": "Todo List",
        "video": "media/TodoList.mp4",
        "description": "This is the app to ..."
    },
    {
        "name": "AquaTrack",
        "video": "media/AquaTrack.mp4",
        "description": "This is the app to ..."
    },
];

var projectListingSection = $("#project-listing-section")
projects.forEach((project, index) => {
    if (index % 2 === 0) {
        var child = $(`<div class="row py-2 justify-content-center salmon-bg">
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
        var child = $(`<div class="row py-2 justify-content-center misty-blue-bg">
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