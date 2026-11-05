
var app = angular.module("myapp", []);

// Parent Controller
app.controller("parentcontroller", function($scope) {

    $scope.college = "Maharaja Institute of Technology Mysore";

});

// Child Controller
app.controller("studentcontroller", function($scope) {

    // Student input model
    $scope.student = {
        name: "",
        department: "",
        semester: ""
    };

    // Existing student details
    $scope.students = [
        {
            name: "Sanika",
            department: "ISE",
            semester: "3rd"
        },
        {
            name: "Anu",
            department: "CSE",
            semester: "3rd"
        },
        {
            name: "Rakshitha",
            department: "ECE",
            semester: "3rd"
        }
    ];

    // Add Student Function
    $scope.addStudent = function() {

        if ($scope.student.name &&
            $scope.student.department &&
            $scope.student.semester) {

            $scope.students.push(angular.copy($scope.student));

            // Clear input fields
            $scope.student.name = "";
            $scope.student.department = "";
            $scope.student.semester = "";
        }
    };

});
