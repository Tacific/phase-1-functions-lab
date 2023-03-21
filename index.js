// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
if (blocks > 42) {
    return blocks - 42;
} else {
    return 42 -blocks;
}
}

function distanceFromHqInFeet(feet){
    distanceFromHqInBlocks(feet);
    return distanceFromHqInBlocks(feet) *264;
}

function distanceTravelledInFeet(start, end){
    if (start > end){
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
    }
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000){
        return (feet - 400) * 0.02;
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

