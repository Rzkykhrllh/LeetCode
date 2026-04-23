  var removeDuplicates = function(nums) {
    let k = 1;
    let counter = 0

    for (let i = 1; i < nums.length; i++) {
      
      if (nums[i] !== nums[i - 1]) {
        nums[k] = nums[i];
        k++;
        counter=0
      } else{
        if (counter == 0){
            // first time duplicate
              counter+=1

              nums[k] = nums[i];
              k++;
          } else {
              // more than 1 duplicate, skip
              counter+=1
          }
      }
    }

    return k;
  };