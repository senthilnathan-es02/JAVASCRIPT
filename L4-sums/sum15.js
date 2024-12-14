function arrayless(array) {
    let result = []; // Initialize an empty array to store the results

    // Loop through the array
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 15) {
            result.push(array[i]); // Add the value to the result array if it's less than 15
        }
    }

    // Check if the result array is empty and return accordingly
    if (result.length > 0) {
        return result.join(", "); // Return the values as a comma-separated string
    } else {
        return "No element less than 15"; // If no elements were found
    }
}

// Test cases
console.log(arrayless([4, 15, 8, 25, 30])); // Output: 4, 8
console.log(arrayless([19, 89, 90, 18])); // Output: No element less than 15
