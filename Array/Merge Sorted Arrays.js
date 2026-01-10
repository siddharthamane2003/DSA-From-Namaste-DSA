// Merge Sorted Arrays
// 1. Make the copy of nums1.
// 2. two point p1 , p2 will point two arrays.
// n1copy[p1]<nums2[p2] check the condition of less than. that shift into array. as nums1.
// p1 will incarment.
// 3. p1 will not out of bound.  p2 will out of bound then then also incarement.
// else will arry2 will less than so it will p2 will incrament.


// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// n1copy = [1,2,3]
// p1 = 0
// p2 = 0

// | i | n1copy[p1] | nums2[p2] | Pick        | nums1         |
// | - | ---------- | --------- | ----------- | ------------- |
// | 0 | 1          | 2         | 1 (smaller) | [1,*,*,*,*,_] |
// | 1 | 2          | 2         | 2 (nums2)   | [1,2,*,*,*,*] |
// | 2 | 2          | 5         | 2 (n1copy)  | [1,2,2,*,*,_] |
// | 3 | 3          | 5         | 3 (n1copy)  | [1,2,2,3,*,*] |
// | 4 | —          | 5         | 5 (nums2)   | [1,2,2,3,5,_] |
// | 5 | —          | 6         | 6 (nums2)   | [1,2,2,3,5,6] |

// nums1 = [1,2,2,3,5,6]



var merge = function(nums1, m, nums2, n) {
    let n1copy=nums1.splice(0,m);
    let p1=0;
    let p2=0;

    for (let i=0;i<n+m;i++){

        if(p2>=n||(n1copy[p1]<nums2[p2]&&p1<m)){
            nums1[i]=n1copy[p1];
            p1++;

        }
        else{
             nums1[i]=nums2[p2];
            p2++;
        }
    }
};
















