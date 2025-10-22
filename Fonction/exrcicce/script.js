function numbres(a,b,c){
  if(a>b && a>c)
  return a;
  else if (b>a && b>c)
  return b;
  else
  return c;
}
alert('Le grand nombre est' + numbres(2,4,8));