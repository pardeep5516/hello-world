function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
    
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  testGreaterOrEqual(10);
  testGreaterOrEqual(0);
  testGreaterOrEqual(9);
  testGreaterOrEqual(11);
  testGreaterOrEqual(19);
  testGreaterOrEqual(100);
  testGreaterOrEqual(21);
  
