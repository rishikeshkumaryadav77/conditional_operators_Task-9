// 1. Scenario: Online Library Membership
// ---------------------------------------
// Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:

// Basic Membership: Access to only free books.

// Standard Membership: Access to free books and discounted paid books.

// Premium Membership: Access to all books, including exclusive content.

// Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.


var membership = "Basic Membershi";
if(membership === "Basic Membership"){
  console.log("Access to only free books");
}

else if(membership === "Standard Membership"){
  console.log("Access to free books and discounted paid books.");
}

else if(membership === "Premium Membership"){
  console.log("Access to all books, including exclusive content");
}
else{
  console.log("you don't have memberships<->please try to take membership!");
}


// 2. Scenario: E-Commerce Discount Application
// ---------------------------------------------
// Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

// Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

// VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

// Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.


var customer = "Regular Customers";
var purchases = -1;
if(customer === "Regular Customers"){
  if(purchases >0 && purchases <100 ){
    console.log("0% discount");
  }
  else if(purchases>=100 && purchases<=500){
    console.log("5% discount");
  }
  else if(purchases>500){
    console.log("10% discount");
  }
  else{
    console.log(`Sorry!There is no Discount for you Because your Purchase value is zero/negative ${purchases}`)
  }
}
else if(customer === "VIP Customers"){
  if(purchases >0 && purchases <100 ){
    console.log("10 discount");
  }
  else if(purchases>=100 && purchases<=500){
    console.log("15% discount");
  }
  else if(purchases>500){
    console.log("20% discount");
  }
  else{
    console.log(`Sorry!There is no Discount for you Because your Purchase value is zero/negative ${purchases}`)
  }
}

else {
  console.log("Please Create your Account")
}



// 3. Scenario: Academic Scholarship Eligibility
// ----------------------------------------------
// Context: A university offers scholarships to students based on their GPA and extracurricular involvement:

// Merit-Based Scholarship: Requires a GPA of 3.5 or higher.

// Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.

// Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.

// Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none.

var GPA = 1.5;
var extracurricularActivities = 1;
if(GPA >= 3.5){
  console.log("Your are eligible for !Merit-Based Scholarship");
}
else if(GPA>=3.0 && extracurricularActivities >= 2){
  console.log("You are eligible for !Leadership Scholarship")
}

else if(GPA >= 2.5 && extracurricularActivities>=100){
  console.log("You are eligible for !Community Service Scholarship")
}
else{
  console.log("you are not eligible for Scholarships")
  
  
}


// 4. Scenario: Movie Ticket Pricing
// ----------------------------------
// Context: A movie theater charges different prices based on the day of the week and the customer's age:

// Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.

// Weekends: Standard price of $15. Seniors and children receive a 30% discount.

// Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.

  var days = "Weekdays";
  var price = 0;
  if(days==="Weekdays" && price>=12){
  console.log("Seniors (65 and older) and children (under 12) receive a {50%} discount")
  }
  else if(days ==="Weekends" && price >=15){
    console.log("Seniors (65 and older) and children (under 12) receive a {30%}discount")
  }
  else if((days==="Weekdays" || days===" Weekends")&&price<12){
    console.log("Increase Your Limit");
  }
  else{
    console.log("No Offer");
}



// 5. Scenario: Event Registration Validation
// -------------------------------------------
// Context: An event registration system needs to validate user inputs before confirming their registration:

// The user must be 18 years or older to register.

// The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

// The user must provide a valid email address.

// Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met.

var age = 22;
var email;
var seats = 100;
if(age>=18){
  if(seats<=100&&email){
    console.log("Left Few Seats")
  }
  else if(seats>100){
    console.log("No more registrations are accepted")
  }
  else{
    console.log("Please enter your email")
  }
}
else{
  console.log(`Your age under ->( ${age} )<- so, you are not eligible for participates`)
}