$(document).ready(function() {
    console.log("JSON data script loaded"); // Debugging log

    var jsonData = {
        "teammembers": [
            {
                "name": "John Doe",
                "title": "Software Engineer",
                "bio": "John is a passionate software engineer with expertise in JavaScript and web development."
            },
            {
                "name": "Jane Smith",
                "title": "Data Scientist",
                "bio": "Jane is a data scientist with a background in machine learning and statistics."
            },
            // Add more team members as needed
        ]
    };

    // Display team member information
    jsonData.teammembers.forEach(function(member) {
        $("#jsonData").append(
            "<div>" +
            "<h3>Name: " + member.name + "</h3>" +
            "<p>Title: " + member.title + "</p>" +
            "<p>Bio: " + member.bio + "</p>" +
            "</div><hr>"
        );
    });
});
