var work = {
  jobs: [
    {
      employer: 'Camillo B.',
      title: 'Bartender',
      location: 'Roma',
      dates: '07/2016-12/2016',
      description: 'Qualified bartender in a prestigious cocktail bar'
    },{
      employer: 'Kalima Beach',
      title: 'Main Bartender',
      location: 'Maiorca',
      dates: '05/2016-07/2016',
      description: 'Main barteder in one of the most famous restaurant in Maiorca'
    },{
      employer: 'Autotrasporti Rotari',
      title: 'Mechanic',
      location: 'Ravenna',
      dates: '10/2012-05/2015',
      description: 'Worked as mechanic but also as a cosuntalt for the CEO'
    },{
      employer: 'Carozzeria Mattioli',
      title: 'Mechanic',
      location: 'Mantova',
      dates: '07/2012-10/2012',
      description: 'Mechanic aphrendistat'
    }
  ]
};

var projects = {
  projects: [
    {
      title: 'Hello world',
      dates: '07/2012-10/2012',
      description: 'Main barteder in one of the most famous restaurant in Maiorca',
      images: 'images/fry.jpg'
    },
    {
      title: 'Hello world',
      dates: '07/2012-10/2012',
      description: 'Main barteder in one of the most famous restaurant in Maiorca',
      images: 'images/fry.jpg'
    },
    {
      title: 'Hello world',
      dates: '07/2012-10/2012',
      description: 'Main barteder in one of the most famous restaurant in Maiorca',
      images: 'images/fry.jpg'
    }
  ]
};

var bio = {
  name: 'Octavian Rotari',
  role: 'Front-end Developer',
  contacts: {
    mobile: '+393451763103',
    email: 'octavianrotari@gmail.com',
    github: 'OctavianRotari',
    twitter: '@octavianrotari1',
    location: 'Edinburgh'
  },
  pictureUrl: './images/IMG_20161230_205127.jpg',
  welcomeMessage: "I'm a Front-end Developer and I like it",
  skills: [ 'Creative', 'Communicative', 'Reactive', 'Organized' ]
};

var education = {
  schools: [
    {
      name: 'ITC G. Ginanni',
      location: 'Ravenna',
      degreeDates: 3,
      url: 'bank',
      majors: ['Raggioniere']
    },
    {
      name: 'ITC G. Ginanni',
      location: 'Ravenna',
      degreeDates: 3,
      url: 'bank',
      majors: ['Raggioniere']
    }
  ],
  onlineCourses: [
    {
      name: 'ITC G. Ginanni',
      location: 'Ravenna',
      degreeDates: 3,
      url: 'bank',
      majors: ['Raggioniere']
    },
    {
      name: 'ITC G. Ginanni',
      location: 'Ravenna',
      degreeDates: 3,
      url: 'bank',
      majors: ['Raggioniere']
    }
  ]
}

var formatedName = HTMLheaderName.replace('%data%', bio.name);
$('#header').prepend(formatedName);

var role = HTMLheaderRole.replace('%data%', bio.role);
$('#header').append(role);

var bioPic = HTMLbioPic.replace('%data%', bio.pictureUrl)
$('#header').append(bioPic);

if (bio.skills) {
  $('#header').append(HTMLskillsStart)
  var skillsFormated = [];
  bio.skills.forEach(function (skill) {
    skillsFormated.push(HTMLskills.replace('%data%', skill))
  })

  skillsFormated.forEach(function (liSkill) {
    $('#skills').append(liSkill)
  })
}

function displayWork() {
  var jobs = work.jobs;
  for (var job in jobs) {
    var employerFormated = HTMLworkEmployer.replace('%data%', jobs[job].employer);
    var workTitleFormated = HTMLworkTitle.replace('%data%', jobs[job].title);
    var workDates = HTMLworkDates.replace('%data%', jobs[job].dates);
    var workLocation = HTMLworkLocation.replace('%data%', jobs[job].location);
    var workDescription = HTMLworkDescription.replace('%data%', jobs[job].description);

    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(employerFormated + workTitleFormated);
    $('.work-entry:last').append(workDates);
    $('.work-entry:last').append(workLocation);
    $('.work-entry:last').append(workDescription);
  }
}

displayWork();

$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

//$('#main').append(internationalizeButton);

//function inName(name) {
//name = name.split(' ');
//name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1)
//name[1] = name[1].toUpperCase();
//name = name.join(' ');
//return name;
//}

projects.display = function () {
  this.projects.forEach(function (project) {
    $('#projects').append(HTMLprojectStart);
    var projectTitle = HTMLprojectTitle.replace('%data%', project.title);
    var projectDates = HTMLprojectDates.replace('%data%', project.dates);
    var projectDescription = HTMLprojectDescription.replace('%data%', project.description);
    var projectImage = HTMLprojectImage.replace('%data%', project.images);

    $('.project-entry:last').append(projectTitle);
    $('.project-entry:last').append(projectDates);
    $('.project-entry:last').append(projectDescription);
    $('.project-entry:last').append(projectImage);
  })
};

projects.display();

$('#mapDiv').append(googleMap);
