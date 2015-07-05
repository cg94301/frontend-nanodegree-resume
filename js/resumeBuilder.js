// General
var bio = {
  "name" : "Chris Gr",
  "role" : "Solutions Architect",
  "contacts" : {
    "email" : "chrisg@example.com",
    "mobile" : "650-555-5555",
    "github" : "cg94301",
    "location" : "San Jose, CA"
  },
  "welcomeMessage" : "Experienced Account Manager with focus on development tools sales, biz dev and support",
  "skills" : [
    "business development", "sales", "programming"
  ],
  "bioPic" : "images/fry.jpg"
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMsg);

var formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%", "email").replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedcontactGeneric);
$("#footerContacts").append(formattedcontactGeneric);

var formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%", "mobile").replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedcontactGeneric);
$("#footerContacts").append(formattedcontactGeneric);

var formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%", "github").replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedcontactGeneric);
$("#footerContacts").append(formattedcontactGeneric);

var formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%", "location").replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedcontactGeneric);
$("#footerContacts").append(formattedcontactGeneric);

if (bio.skills != false) {
  $("#header").append(HTMLskillsStart);

  for (i in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
  }

}

// Education
var education = {
  "schools" : [
    {
      "name" : "Technische Universitaet Muenchen",
      "city" : "Munich, Germany",
      "degree" : "Masters",
      "majors" : [ "Computer Engineering", "Communications" ],
      "dates" : 1997,
      "url" : "http://www.tum.de"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Algorithms",
      "school" : "Coursera",
      "dates" : 2013,
      "url" : "http://www.coursera.com"
    },
    {
      "title" : "JS Basics",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com"
    }
  ]
}

education.display = function() {
  for (i in education.schools) { 
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
    $(".education-entry:last").append(formattedschoolDates);
    $(".education-entry:last").append(formattedschoolLocation);
  
    for (major in education.schools[i].majors) {
      var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[major]);
      $(".education-entry:last").append(formattedschoolMajor);
    }
  }

  $(".education-entry:last").append(HTMLonlineClasses);

  for (i in education.onlineCourses) { 
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

    $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
    $(".education-entry:last").append(formattedonlineDates);
    $(".education-entry:last").append(formattedonlineURL);

  }
}

if (education.schools != false ) {
  education.display();
} 


// Work     
var work = {
  "jobs" : [
    {
      "employer" : "Verifyter",
      "title" : "VP Solutions",
      "dates" : "Jan 2013 - present",
      "location" : "San Jose, CA",
      "description" : "Biz Dev"
    },
    {
      "employer" : "Vector Fabrics",
      "title" : "Dir US Accounts",
      "dates" : "Jun 2011 -  Oct 2012",
      "location" : "San Jose, CA",
      "description" : "Biz Dev, Sales"
    } 
  ]
}

work.display = function() {
  for (i in work.jobs) {
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);
    $(".work-entry:last").append(formattedworkDates);
    $(".work-entry:last").append(formattedworkLocation);
    $(".work-entry:last").append(formattedworkDescription);
  }
}

if (work.jobs != false) {
  work.display();
}


// Projects
var projects = {
  "projects" : [
    {
      "title" : "Sample Project 1",
      "dates" : 2015,
      "description" : "HTML and CSS grid based layout",
      "images" : [ "images/197x148.gif", "images/197x148.gif" ]
    },
    {
      "title" : "Sample Project 2",
      "dates" : 2015,
      "description" : "Online resume",
      "images" : [ "images/197x148.gif", "images/197x148.gif" ]
    }
  ]
}

projects.display = function() {
  for (i in this.projects) {
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedprojectTitle);
    $(".project-entry:last").append(formattedprojectDates);
    $(".project-entry:last").append(formattedprojectDescription);

    for (pic in this.projects[i].images) {
      var formattedprojectImage = HTMLprojectImage.replace("%data%", this.projects[i].images[pic]);
      $(".project-entry:last").append(formattedprojectImage);    
    }

  }
}

if (projects.projects != false) {
  projects.display();
}


// Map
$("#mapDiv").append(googleMap);

function inName() {
   var names = bio.name.split(' ');
   var first = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
   var family = names[1].toUpperCase();
   return first + " " + family
}

$("#main").append(internationalizeButton);

// Locate mouse click
$(document).click( function(loc) {
   logClicks(loc.pageX, loc.pageY);
});

