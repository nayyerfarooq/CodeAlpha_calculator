function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');
    
    if (!dob) {
        result.textContent = "Please enter a valid date.";
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    result.textContent = `Your age is ${age} years.`;
}
