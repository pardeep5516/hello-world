function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
    
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test
  testGreaterThan(10);
  testGreaterThan(0);
  testGreaterThan(11);
  testGreaterThan(99);
  testGreaterThan(100);
  testGreaterThan(101);