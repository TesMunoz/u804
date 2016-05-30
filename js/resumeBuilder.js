/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Tessa Munoz";
 var role = "Web Developer";
 var skillsList = ["Html, ", "JavaScript, ", "CSS, ", "GIT, ", "C++, "];
 
 var formattedName = HTMLheaderName.replace("%data%", name);

 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 var bio = {
 	"name": name,
 	"role": role,
 	"contacts":[ " Tesmunoz@gmail.com ", "(541)-326-2806 ", "https://github.com/TesMunoz "],
 	"picture": "images/myPic.JPG",
 	"skills": skillsList
 }

 $("#main").append(bio.name);
 $("#main").append(bio.contacts);
 $("#main").append(bio.picture);
 $("#main").append(bio.skills);

 var work = {
 	"jobs": [
 	// {
		// "position": "Student Intern ",
 	// 	"employer": "Martin Sedirus",
 	// 	"Loctation": "Portland State University: NEAR Lab, Portland, OR",
 	// 	"length": "June 14 - Sept 14"
 	// }
  ]
 }

var educationList = { 
	"schools": [
	{
 		"name": "Portland State University",
 		"location": "Portland, OR",
 		"dates": "Sept 14 - Sept 15",
 		"degree": "None",
 		"major": ["Electrical Engineering"]
 	},
 	{
 		"name": "Portland Community College",
 		"location": "Portland, OR",
 		"dates": "June 13 - Aug 13",
 		"degree": "None",
 		"major": ["Computer Science"]
 	}
  ]
,
	"online courses": [
	{
		"title": ["JavaScript Basics"],
		"school": "Udacity",
		"dates": "2016",
		"url": "https://classroom.udacity.com/courses/ud804"
	}
  ]
}

var renderEducation = function(schools) {
	schools.forEach(function(school) {
		$('#education').append(
			'<ul class="education-entry">' 
			+ getListItem(school.name)
			+ getListItem(school.location) 
			+ getListItem(school.dates)
			+ getListItem(school.degree)
			+ getListItem(school.major)
			+ '</ul><br />')
	});
}

var getListItem = function(listItem) {
	return '<li>' + listItem + '</li>'
}


// $("#workExperience").prepend(work.jobs)


renderEducation(educationList.schools);
