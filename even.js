const EmployeeDetails={
    EmployeeName:"Yuva",
    EmployeeDesignation:"Frontend",
    EmployeeDepartment:"CSE",
    EmployeeEmail:"yuva@gmail.com",
    
    
    EmployeeInfo:{
        EmployeePayscale:"4LPA",
        EmployeeExperience:0,
        EmployeePhoneNo:3736487299,   
    }

};
console.log(EmployeeDetails);
console.log(EmployeeDetails['EmployeeName']);
console.log(EmployeeDetails.EmployeeDesignation);
console.log(EmployeeDetails.EmployeeDepartment);
console.log(EmployeeDetails.EmployeeEmail);
console.log(EmployeeDetails.EmployeeInfo['EmployeePayscale']);
console.log(EmployeeDetails.EmployeeInfo.EmployeeExperience);
console.log(EmployeeDetails.EmployeeInfo. EmployeePhoneNo);
"<br>"
for(demo in EmployeeDetails){
    console.log(EmployeeDetails[demo]);
}

