function testElseIf(val) {
    if (val < 5) {
        return "Less than 5";
    }
    else if (val > 10) {
        return "Greater than 10";
    }


    else {
        return "Between 5 and 10";
    }
}

// Change this value to test
testElseIf(7);
testElseIf(4);
testElseIf(6);
testElseIf(11);
