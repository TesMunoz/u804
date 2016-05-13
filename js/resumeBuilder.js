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
 	"contactInfo": "(541)-326-2806",
 	"picture": "images/myPic.JPG",
 	"skills": skillsList
 }

 $("#main").append(bio.name);
 $("#main").append(bio.contactInfo);
 $("#main").append(bio.picture);
 $("#main").append(bio.skills);

 var work = {}

 	work.position = "Student Intern ";
 	work.employer = "Martin Sedirus";
 	work.Loctation = "Portland State University: NEAR Lab, Portland, OR";
 	work.length = "June 14 - Sept 14";

var education = {}

 	education["school1"] = "Portland State University, Portland, OR:  Sept 14 - Sept 15";
 	education["school2"] = "Portland Community College, Portland, OR: June 13 - Aug 13";


 $("#main").append(work["position"]);
 $("#main").append(education.school1);

