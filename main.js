const Unlilar = ["a", "e", "i", "o", "u"]

function unlilarniHisoblash(str)
{
  let unlilarRoyxat = 'aeiouAEIOU';
  let vcount = 0;
  
  for(let i = 0; i < str.length; i++)
  {
    if (unlilarRoyxat.indexOf(str[i]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
}

console.log(unlilarniHisoblash("Celebration "), " ta unli harflar bor");
console.log(unlilarniHisoblash("Palm"), " ta unli harflar bor");
console.log(unlilarniHisoblash("Prediction") , " ta unli harflar bor");