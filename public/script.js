// TUe information
const majors = ["Applied Mathematics", "Applied Physics", "Architecture, Urbanism and Building Sciences", 
    "Automative Engineering", "Chemical Engineering and Chemistry", "Data Science", 
    "Electrical Engineering", "Industrial Design", "Industrial Engineering", 
    "Mechanical Engineering", "Psychology and Technology", "Sustainable Innovation"];

const needed_courses = [
    //Applied Mathematics
    ["2MBA10", "2MBA50", "2MBA60", "2MBC10", "2MBC20", "2MBS10", "2MBC30", "2MBS20", "2MBD20", "2MBS30", "2MBS40", "2MBD30", "2MBS50", "2MBD40", "2MBA70", "2MBA80", "2MBC40", "2WH40"],
    //Applied Physics
    ["31IAP", "31ILS", "31MEC", "31EMA", "31DAP", "31MCA", "31OPT", "31DAE", "32VAN", "32IQP", "32PTP", "32TDY", "32AQP", "4CBLB20", "32SPH", "33CMA", "33ACE", "33EDY", "33BFP"],
    //Architecture, Urbanism and Building Sciences
    ["7UB1B10", "7A1B10", "7S1B10", "7U1B10", "7B1B10", "7AS1B10", "7P1B10", "7P2B10", "7P3B10", "7U0B20", "7A3B20", "7P1B30"],
    //Automative Engineering
    ["5EPC0", "5EZA0", "5EPE0", "5ATB0", "5ECD0", "5EZB0", "5EID0", "4AUB20", "5EPF0", "5EWE0", "4AUB10", "5AIB0", "5ESH0", "5EWF0", "5APB0", "5AIC0", "5XEC0"],
    //Chemical Engineering and Chemistry
    ["6BBR01", "6BBR02", "6BBR04", "6BBR05", "6BBR06", "6BMR01", "6BPR01", "6BAR01", "6BMR02", "6BMR03", "6BMR04", "6BMR05", "6BPR02", "6BER01", "6CBL01", "6BER02", "6BPR03", "6BAR02", "6BPR04", "6BAR03", "6BER06", "6BER07", "6CBL02", "6BER08", "6BER09", "6BMR06", "6BER10", "6BFR01"],
    //Data Science
    ["JBM230", "JBM015", "JBC000", "JBG000", "JBL125", "JBG030", "JBM050", "JBI100", "JBM045", "JBG040", "JBM025", "JBG050", "JBE150", "JBG060", "JBL110", "JBC090", "JBE140", "JBP000"],
    //Electrical Engineering
    ["5EPC0", "5EZA0", "5EPD0", "5ECD0", "5EZB0", "5EID0", "5ECE0", "5EPF0", "5EZC0", "5EPG0", "5ESG0", "5ESH0", "5EWF0", "5EPB0", "5ETD0", "5XEC0"],
    //Industrial Design
    ["DDB200", "DAB100", "DPB110", "DPB120", "DCB200", "DDB100", "DEB100", "DPB240", "DAB200", "DPB390"],
    //Industrial Engineering
    ["1JV00", "2DD40", "1BV00", "1CV00", "1CV10", "1ZV50", "2DD50", "1BV10", "1ZV60", "1CV40", "1JV10", "1ZV20", "1CV60", "1BV70", "1CV50", "1CV70", "1ZV70", "1BEPIE"],
    //Mechanical Engineering
    ["4RA00", "4CBLA00", "4CA10", "4DA00", "4CBLA10", "4MA00", "4RA10", "4CBLA20", "4CBLA30", "4EB00", "4DB00", "4CBLB10", "4MB00", "4CBLB20", "4PB00", "4MC10", "4UC10", "4WC00"],
    //Psychology and Technology
    ["0HV10", "0HV30", "0HV00", "0HV40", "0HV70", "0HV50", "0HV60", "0HV150", "0HV20", "0HV110", "0HV90", "0HV140", "0HV100", "0BEPP0"],
    //Sustainable Innovation
    ["0SV00", "0SV30", "0SV10", "0SV20", "0SV130", "0SV40", "0SV60", "1ZV60", "0SV140", "0SV50", "0SV70", "0SV150", "0SV80", "0SV100", "0SV90", "0BEPS0"]
];

const choice_courses = [
    [], [], [], [],
    [["6BER03", "6BER04"], ["6BER05", "8P313"]],
    [], [], [],
    [["1BEPIEX", "1CK20"]],
    [], [], []
];

const specialization_courses = [
    [], [],
    [["7P4AB10", "7A0B20", "7A1B20", "7A2B20", "7PA1B20", "7PA2B20", "7PA3B20", "7PA4B20", "7A0B30", "7A2B30"], 
    ["7P4BB10", "7B0B20", "7PB1B20", "7PB2B20", "7PB3B20", "7PB4B20", "7B0B30", "7B1B30", "7B2B30"], 
    ["7P4SB10", "7S0B20", "7S1B20", "7S2B20", "7PS1B20", "7PS2B20", "7PS3B20", "7PS4B20", "7S0B30", "7S2B30"], 
    ["7P4UB10", "7EA4B20", "7PU1B20", "7PU2B20", "7PU3B20", "7PU4B20", "7U0B30", "7U1B30", "7U2B30"]],
    [], [], [], [], [], [], [], 
    [["0HVI00"], ["0HVL00", "7B1B10", "7UB1B10", "7S8X0", "0HVL10"], ["5EZA0", "0HVR00"]], 
    [["4RA10", "4EB00", "4CBLB10", "4PB00"], ["7U1B10", "7W7X0", "7U7X0", "7M6X0"]]
];

const blocked_courses = [
    "1BEPIE", "DPB390", "DPB110", "1BEPIEX", "2WH40", "JBP000", "33BFP", "5XEC0", "7S2B30", "7A2B30", "DPB120", "4WC00", "7B2B30", "0BEPP0", "DPB240", "7U2B30", "0BEPS0", "6BFR01", "2IPE0"
];

const current_courses = [
    "2IP90", "2IT60", "2WBB0", "2IT80", "2ITX0", "3NAB0", "2IAB0", "2IC30", "2IL50", "0SAB0", "2DBI00", "2IO75", "2ILC0", "2IT90", 
    "4WBB0", "2ID50", "2IPC0", "2IIG0", "2INC0", "2IS70", "2ITB0", "2IX20", "4CC10", "2IC60", "2ILH0", "5ETC0", "1ZEUA0", "2DI90",
    "2IPH0", "2IRS0", "2MBA40", "5ESF0", "5EWD0", "5XCA0", "1ZAUA0", "2IPE0", "1ZAUC0"
];

const current_plan = [
    [["2IP90", "2IT60", "2WBB0"], ["2IT80", "2ITX0", "3NAB0"], ["2IAB0", "2IC30", "2IL50"], ["0SAB0", "2DBI00", "2IO75"]], 
    [["2ILC0", "2IT90", "4WBB0"], ["2ID50", "2IPC0", "2IIG0", "2INC0"], ["2IS70", "2ITB0", "2IX20", "4CC10"], ["2IC60", "2ILH0", "5ETC0", "2DBI00"]], 
    [["1ZEUA0", "2DI90", "2IPH0", "2IRS0", "2ILC0"], ["2MBA40", "5ESF0", "5EWD0", "5XCA0"], ["1ZAUA0", "2IPE0"], ["1ZAUC0"]]
]

const majorsLabel = document.querySelector('.info-majors-input');
const ectsLabel = document.querySelector('.info-ects-input');
const table = document.querySelector('.table');
const savedList = document.querySelector('.saved');
const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');

var allCourses;
var selectedMajors;
var selectedCourses;
var selectedPlan;
var saves = [];

window.onload = function() {
    fetchCourses();
    fetchSaves();
};

function fetchCourses() {
    fetch("/data/courses.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            allCourses = data)
        .then(loadSaves())
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}

function fetchSaves() {
    fetch("/data/saves.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            {
                saves = data;
                loadSaves();
            })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}

function loadSaves() {
    if (saves.length === 0) {
        rightBox.style.display = 'none';
        leftBox.style.flex = '0 0 100%';
    } else {
        rightBox.style.display = 'block';
        leftBox.style.flex = '0 0 82.5%';
    }

    while ( savedList.firstChild ) savedList.removeChild( savedList.firstChild );

    for(let i = 0; i < saves.length; i++) {
        let save = document.createElement('div');
        save.className = "saved-item";
        save.innerHTML = `${saves[i].Name}`;
        savedList.appendChild(save);
        let saveDel = document.createElement('i');
        saveDel.className = "fas fa-xmark icon save-delete";
        save.appendChild(saveDel);
    }
}

function initializePlan() {
    selectedMajors = ["Computers Science and Engineering"];
    selectedCourses = [];
    selectedPlan  = [];

    for (let i = 0; i < current_courses.length; i++) {
        selectedCourses.push(allCourses.find(x => x.Code === current_courses[i]));
    }

    for (let i = 0; i < current_plan.length; i++) {
        selectedPlan.push([]);
        for (let j = 0; j < current_plan[i].length; j++) {
            selectedPlan[i].push([]);
            for (let k = 0; k < current_plan[i][j].length; k++) {
                selectedPlan[i][j].push(allCourses.find(x => x.Code === current_plan[i][j][k]));
            }
        }
    }
}

function generatePlan() {
    initializePlan();

    let majorCount = Math.floor(Math.random() * 13);
    let majorIDs = Array(12).fill(0).map((_, index)=> index);
    majorIDs.sort((a, b) => 0.5 - Math.random()).splice(majorCount, 12 - majorCount);
    majorIDs.forEach(i => selectedMajors.push(majors[i]));

    let courses = [];
    for (let i = 0; i < majorIDs.length; i++) {
        let id = majorIDs[i];

        needed_courses[id].forEach(x => courses.push(allCourses.find(y => y.Code === x)));

        for (let j = 0; j < choice_courses[id].length; j++) {
            let c = choice_courses[id][j][Math.floor(Math.random() * choice_courses[id][j].length)];
            courses.push(allCourses.find(y => y.Code ===  c));
        }

        if (specialization_courses[id].length > 0) {
            let selectedSpecialization = Math.floor(Math.random() * specialization_courses[id].length);
            specialization_courses[id][selectedSpecialization].forEach(x => courses.push(allCourses.find(y => y.Code === x)));
        }
    }

    let electiveCount = Math.floor(Math.random() * Math.min(10, 3*selectedMajors.length));

    for (let i = 0; i < electiveCount; i++) {
        let elective = allCourses[Math.floor(Math.random() * allCourses.length)];

        while((selectedCourses.findIndex(x => x.Code === elective.Code) != -1) || 
        (blocked_courses.findIndex(x => x === elective.Code) != -1) || 
        (courses.findIndex(x => x.Code === elective.Code) != -1)) {
            elective = allCourses[Math.floor(Math.random() * allCourses.length)];
        }

        courses.push(elective);
    }

    let addedYears = Math.ceil(courses.length / 15.0);
    for (let i = 0; i < addedYears; i++) {
        selectedPlan.push([[],[],[],[]]);
    }

    for (let i = 0; i < courses.length; i++) {
        let course = courses[i];
        if (selectedCourses.findIndex(x => x.Code === course.Code) != -1) { continue; }
        let quartile = course.Quartiles[Math.floor(Math.random() * course.Quartiles.length)];

        if (quartile < 3) {
            let year = Math.floor(Math.random() * addedYears);
            selectedPlan[year + 3][quartile-1].push(course);
        } else {
            let year = Math.floor(Math.random() * (addedYears + 1));
            selectedPlan[year + 2][quartile-1].push(course);
        }

        selectedCourses.push(course);
    }

    for (let i = 0; i < selectedPlan.length; i++) {
        let year = selectedPlan[i];
        let count = 0;
        year.forEach(x => count += x.length);
        if (count === 0) {
            selectedPlan.splice(i, 1);
        }
    }

    visualizePlan();
}

function visualizePlan() {

    majorsLabel.innerHTML = "";
    for (let i = 0; i < selectedMajors.length; i++) {
        if (i === (selectedMajors.length - 1) && i != 0) {
            majorsLabel.innerHTML += "and ";
        }

        majorsLabel.innerHTML += selectedMajors[i];

        if (i != (selectedMajors.length - 1)) {
            majorsLabel.innerHTML += ", ";
        }
    }

    ectsLabel.innerHTML = `${selectedCourses.length * 5 + selectedMajors.length * 5}`;

    while ( table.firstChild ) table.removeChild( table.firstChild );

    for (let i = 0; i < selectedPlan.length; i++) {
        let year = selectedPlan[i];
        let yearDiv = document.createElement('div');
        yearDiv.className = "year";
        table.appendChild(yearDiv);

        let yearHeaderDiv = document.createElement('div');
        yearHeaderDiv.className = "year-header";
        yearHeaderDiv.innerHTML = `Year ${i+1}`;
        yearDiv.appendChild(yearHeaderDiv);

        let quartilesDiv = document.createElement('div');
        quartilesDiv.className = "quartiles";
        yearDiv.appendChild(quartilesDiv);

        for (let j = 0; j < year.length; j++) {
            let quartile = year[j];
            let quartileDiv = document.createElement('div');
            quartileDiv.className = "quartile";
            quartilesDiv.appendChild(quartileDiv);

            let quartileHeaderDiv = document.createElement('div');
            quartileHeaderDiv.className = "quartile-header";
            quartileHeaderDiv.innerHTML = `Quartile ${j+1}`;
            quartileDiv.appendChild(quartileHeaderDiv);

            let coursesDiv = document.createElement('div');
            coursesDiv.className = "courses";
            quartileDiv.appendChild(coursesDiv);

            for (let k = 0; k < quartile.length; k++) {
                let course = quartile[k];
                let courseParagraph = document.createElement('p');
                courseParagraph.className = "course";
                courseParagraph.innerHTML = `[${course.Code}] ${course.Name}`;
                coursesDiv.appendChild(courseParagraph);
            }
        }
    }
}

// Select items
const icon = document.querySelector('.icon');
const randomButton = document.querySelector('.random');
const saveButton = document.querySelector('.save-button');
const plan = document.querySelector('.plan');

// Add a click event listener to the icon
icon.addEventListener('click', () => {
  // Access the root element's styles
  const rootStyles = getComputedStyle(document.documentElement);
  const secondaryColor = rootStyles.getPropertyValue('--secondary-color').trim();
  const backgroundColor = rootStyles.getPropertyValue('--background-color').trim();
  const secondaryColorRGB = rootStyles.getPropertyValue('--secondary-color-rgb').trim();
  const backgroundColorRGB = rootStyles.getPropertyValue('--background-color-rgb').trim();

  // Swap the values
  document.documentElement.style.setProperty('--secondary-color', backgroundColor);
  document.documentElement.style.setProperty('--background-color', secondaryColor);
  document.documentElement.style.setProperty('--secondary-color-rgb', backgroundColorRGB);
  document.documentElement.style.setProperty('--background-color-rgb', secondaryColorRGB);

  if (icon.classList.contains('far')) {
    icon.classList.remove('far'); // Remove moon icon
    icon.classList.add('fas'); // Add sun icon
  } else {
    icon.classList.remove('fas'); // Remove sun icon
    icon.classList.add('far'); // Add moon icon
  }
});

// Add a click event listener to the random button
randomButton.addEventListener('click', () => {
    plan.style.visibility = 'visible';
    generatePlan();
});



// Add a click event listener to the save button
saveButton.addEventListener('click', () => {
    
    const name = document.querySelector('.save-input');
    let saveID = saves.findIndex(x => x.Name === name.value);
    if (saveID === -1) {
        saves.push({Name: name.value, Majors: selectedMajors, Plan: selectedPlan, Courses: selectedCourses});
    } else {
        saves[saveID].Majors = selectedMajors;
        saves[saveID].Plan = selectedPlan;
    }

    const jsonContent = JSON.stringify(saves, null, 2);

    // Send JSON to the server
    fetch('/data/saves', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonContent,
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });

    loadSaves();
    name.value = "";
});

savedList.addEventListener('click', (event) => {
    if (event.target.className === "saved-item") {
        plan.style.visibility = 'visible';
        let save = saves.find(x => x.Name === event.target.innerHTML.substring(0, event.target.innerHTML.indexOf('<')));
        selectedPlan = save.Plan;
        selectedMajors = save.Majors;
        selectedCourses = save.Courses;
        visualizePlan();
    } else if (event.target.className === "fas fa-xmark icon save-delete") {
        let parent = event.target.parentElement;
        console.log(parent);
        let saveIndex = saves.findIndex(x => x.Name === parent.innerHTML.substring(0, parent.innerHTML.indexOf('<')));
        saves.splice(saveIndex, 1);
        
        const jsonContent = JSON.stringify(saves, null, 2);

        // Send JSON to the server
        fetch('/data/saves', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonContent,
        })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
    
        loadSaves();
    }
});