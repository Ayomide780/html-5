$(document).ready(function() {
    console.log("JSON data script loaded"); // Debugging log

    // Inline JSON data
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

    // Display team member information from inline JSON data
    jsonData.teammembers.forEach(function(member) {
        $("#jsonData").append(
            "<div>" +
            "<h3>Name: " + member.name + "</h3>" +
            "<p>Title: " + member.title + "</p>" +
            "<p>Bio: " + member.bio + "</p>" +
            "</div><hr>"
        );
    });

    // Fetch JSON data from team.json
    $.getJSON("team.json", function(data) {
        console.log("JSON data fetched:", data); // Debugging log

        // Access the team members array directly from the parsed JSON data
        var teamMembers = data.teammembers;

        // Display team member information
        teamMembers.forEach(function(member) {
            $("#jsonData").append(
                "<div>" +
                "<h3>Name: " + member.name + "</h3>" +
                "<p>Title: " + member.title + "</p>" +
                "<p>Bio: " + member.bio + "</p>" +
                "</div><hr>"
            );
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching JSON:", errorThrown); // Log error to console
    });
});
