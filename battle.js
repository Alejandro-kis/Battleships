const  battleItself = [
[0,1,0,0,1,0,0],  // 0
[0,1,1,1,0,0,1],  // 1
[1,0,0,0,0,0,1],  // 2
[1,0,1,1,0,0,1],  // 3
[1,1,1,0,0,1,0],  // 4
[0,0,0,0,0,0,0],  // 5
[0,1,0,0,1,0,0]             
]

const launchTorpedo = (row, column) => {
    const launchTime = "monday"
    console.log(battleItself[row][column])
    if (battleItself[row][column] === 1) {
        var elementId = "coordinates" + row + column  
        console.log('elementsID:', elementId)
        document.querySelector("#" + elementId).innerHTML = 'Hit'
        console.log("Hit!")
    } else {
        var elementId = "coordinates" + row + column  
        console.log('elementsID:', elementId)
        document.querySelector("#" + elementId).innerHTML = 'Miss'
        console.log("Miss!")
    }

}
    

// create a variable for the id name
// set it equal to "coordinates" + row + column





// define launchTorpedo()
// 1. get the coordinates
// 2. check if there is a 1
// 3. if there is 1, say hit!
// 4. else miss!

// 5. update html accordingly for each condition

