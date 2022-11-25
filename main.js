const Unlilar = ["a", "e", "i", "o", "u"]

function unlilarniHisoblash(str)
{
  var unlilarRoyxati = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var i = 0; i < str.length ; i++)
  {
    if (unlilarRoyxati.indexOfclear(str[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}

console.log(unlilarniHisoblash("Celebration"), " ta unlilar");
console.log(unlilarniHisoblash("Palm"), " ta unlilar");
console.log(unlilarniHisoblash("Prediction"), " ta unlilar");

