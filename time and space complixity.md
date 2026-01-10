Time Complexity => It is used measure effiecncy of alogorithm in term of speed , as input grows.

ex =>
liner search -> it will search all elements one by one
binary search -> it will search elements divide loop.
means evry lopp will divide.

[1,2,4,2,1,3,5,4] -> length is 8 next itration length/2=4 elemests will search 
then next intration will length/2=2 then 1 elment will it will reduce lenght/2.

[1,2,4,2,1,3,5,4] -> In liner search each element Will search at last elmenet.

Liner search will be nth Element search.
Binary serch will be evert time nth/2 ^x element x=>no of times.


Binary Seacrh >>>>>>>> Liner Search

Represetation -> O-> Big O

In Liner Search will reach the O(N) we have to consider the worst case.
O(N) means loop will intarte N times.

In Binary Seacrh will seacrh O(log N) -> Beacuse of Diviedes.



Types 

1. O(N) => Loopp will intarte the Nth Times
2. O(N ^2) => Two Loops Intarte in Nth Times on inside one
3. O(2N) -> Two loop
3. O(log N) => Binar search will n/2 times 
4. O(N log N) -> Loop inside N/2 times
5. O(2^N) -> evrey time lopp will run the nth times in even opration
6. O(N!)
7. O(1) -> Ex Array we have to find the element the O[element] direct find.


Effiency

O(1) > O(log N) > O(N) > O(N log N) > O(N^2) > O(2 ^ N) > O(N!)


Space Complixity -> Extar Space In code
t.c-> O(N) s.c->O(1) Beacuse of the max varbile
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}


s.c-> O(N) Bause of NewaArray in that array
function findMax(arr) {
  let max = arr[0];
  let newArray=size[arr]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

s.c -> 2d array have O(N^2)

t.c-> O(2N) is eaul to O(N) we havre to ignore the constact is always eualt to O(N)

 for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

 for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }



  T.c -> O(N^2)+O(N)=O(N^2)
 for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];


 for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
 }

 for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }


always takes the Largest t.c
1. O(N^3) + O(2N) => O(N^3)
2. O(N log N) + O(N^2) -> O(N^2) 