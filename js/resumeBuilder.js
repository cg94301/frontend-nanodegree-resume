// General
var bio = {
  'name': 'Chris Gr',
  'role': 'Solutions Architect',
  'contacts': {
    'email': 'chrisg@example.com',
    'mobile': '650-555-5555',
    'github': 'cg94301',
    'location': 'San Jose, CA'
  },
  'welcomeMessage': 'Experienced Account Manager with focus on development tools sales, biz dev and support',
  'skills': ['business development', 'sales', 'programming'],
  'bioPic': 'images/fry.jpg'
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedbioPic = HTMLbioPic.replace('%data%', bio.bioPic);
  var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
  $('#header').append(formattedbioPic);
  $('#header').append(formattedwelcomeMsg);
  
  var formattedcontactGeneric = HTMLcontactGeneric.replace('%contact%', 'email').replace('%data%', bio.contacts.email);
  $('#topContacts').append(formattedcontactGeneric);
  $('#footerContacts').append(formattedcontactGeneric);
  
  var formattedcontactGeneric = HTMLcontactGeneric.replace('%contact%', 'mobile').replace('%data%', bio.contacts.mobile);
  $('#topContacts').append(formattedcontactGeneric);
  $('#footerContacts').append(formattedcontactGeneric);
  
  var formattedcontactGeneric = HTMLcontactGeneric.replace('%contact%', 'github').replace('%data%', bio.contacts.github);
  $('#topContacts').append(formattedcontactGeneric);
  $('#footerContacts').append(formattedcontactGeneric);
  
  var formattedcontactGeneric = HTMLcontactGeneric.replace('%contact%', 'location').replace('%data%', bio.contacts.location);
  $('#topContacts').append(formattedcontactGeneric);
  $('#footerContacts').append(formattedcontactGeneric);
  
  if (bio.skills != false) {
    $('#header').append(HTMLskillsStart);
  
    bio.skills.forEach(function(skill) {
      $('#skills').append(HTMLskills.replace('%data%',skill));
    });
  }
};

bio.display();
 

// Education
var education = {
  'schools': [{
    'name': 'Technische Universitaet Muenchen',
    'city': 'Munich, Germany',
    'degree': 'Masters',
    'majors': [ 'Computer Engineering', 'Communications' ],
    'dates': 1997,
    'url': 'http://www.tum.de'
  }],
  'onlineCourses': [{
    'title': 'Algorithms',
    'school': 'Coursera',
    'dates': 2013,
    'url': 'http://www.coursera.com'
  },{
    'title': 'JS Basics',
    'school': 'Udacity',
    'dates': 2015,
    'url': 'http://www.udacity.com'
  }]
};

education.display = function() {
  education.schools.forEach(function(school) {
    var formattedschoolName = HTMLschoolName.replace('%data%', school.name);
    var formattedschoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
    var formattedschoolDates = HTMLschoolDates.replace('%data%', school.dates);
    var formattedschoolLocation = HTMLschoolLocation.replace('%data%', school.city);

    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(formattedschoolName + formattedschoolDegree);
    $('.education-entry:last').append(formattedschoolDates);
    $('.education-entry:last').append(formattedschoolLocation);
  
    school.majors.forEach(function(major) {
      var formattedschoolMajor = HTMLschoolMajor.replace('%data%', major);
      $('.education-entry:last').append(formattedschoolMajor);
    });

  });

  $('.education-entry:last').append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(course) {
    var formattedonlineTitle = HTMLonlineTitle.replace('%data%', course.title);
    var formattedonlineSchool = HTMLonlineSchool.replace('%data%', course.school);
    var formattedonlineDates = HTMLonlineDates.replace('%data%', course.dates);
    var formattedonlineURL = HTMLonlineURL.replace('%data%', course.url);

    $('.education-entry:last').append(formattedonlineTitle + formattedonlineSchool);
    $('.education-entry:last').append(formattedonlineDates);
    $('.education-entry:last').append(formattedonlineURL);
  });

};

if (education.schools != false ) {
  education.display();
} 


// Work     
var work = {
  'jobs': [{
    'employer': 'Verifyter',
    'title': 'VP Solutions',
    'dates': 'Jan 2013 - present',
    'location': 'San Jose, CA',
    'description': 'Biz Dev'
  },{
    'employer': 'Vector Fabrics',
    'title': 'Dir US Accounts',
    'dates': 'Jun 2011 -  Oct 2012',
    'location': 'San Jose, CA',
    'description': 'Biz Dev, Sales'
  }]
};

work.display = function() {
  work.jobs.forEach(function(job) {
    var formattedworkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
    var formattedworkTitle = HTMLworkTitle.replace('%data%', job.title);
    var formattedworkDates = HTMLworkDates.replace('%data%', job.dates);
    var formattedworkLocation = HTMLworkLocation.replace('%data%', job.location);
    var formattedworkDescription = HTMLworkDescription.replace('%data%', job.description);

    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(formattedworkEmployer + formattedworkTitle);
    $('.work-entry:last').append(formattedworkDates);
    $('.work-entry:last').append(formattedworkLocation);
    $('.work-entry:last').append(formattedworkDescription);
  });
};

if (work.jobs != false) {
  work.display();
}


// Projects
var projects = {
  'projects': [{
    'title': 'Sample Project 1',
    'dates': 2015,
    'description': 'HTML and CSS grid based layout',
    'images': [ 'images/197x148.gif', 'images/197x148.gif' ]
  },{
    'title': 'Sample Project 2',
    'dates': 2015,
    'description': 'Online resume',
    'images': [ 'images/197x148.gif', 'images/197x148.gif' ]
  }]
};

projects.display = function() {
  this.projects.forEach(function(project) {

    var formattedprojectTitle = HTMLprojectTitle.replace('%data%', project.title);
    var formattedprojectDates = HTMLprojectDates.replace('%data%', project.dates);
    var formattedprojectDescription = HTMLprojectDescription.replace('%data%', project.description);

    $('#projects').append(HTMLprojectStart);
    $('.project-entry:last').append(formattedprojectTitle);
    $('.project-entry:last').append(formattedprojectDates);
    $('.project-entry:last').append(formattedprojectDescription);

    project.images.forEach(function(img) {
      var formattedprojectImage = HTMLprojectImage.replace('%data%', img);
      $('.project-entry:last').append(formattedprojectImage);    
    });

  });
};

if (projects.projects != false) {
  projects.display();
}


// Map
$('#mapDiv').append(googleMap);

function inName() {
   var names = bio.name.split(' ');
   var first = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
   var family = names[1].toUpperCase();
   return first + ' ' + family;
}

$('#main').append(internationalizeButton);

// Locate mouse click
$(document).click( function(loc) {
   logClicks(loc.pageX, loc.pageY);
});

