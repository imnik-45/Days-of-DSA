var rows = 5;
for(var i=1; i<=rows; i++)
{
for(var k=1; k<=( rows-i ); k++)
{
document.write(" ");
}
for(var j=1; j<=i; j++)
{
document.write("* ");
}
document.write("<br/>");
}
