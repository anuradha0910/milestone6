<!DOCTYPE html>
<html>
<body>

<h2> TOPIC:ERROR HANDLING</h2>
<p id="demo"></p>
<script>
try {
function ReverseString(talentio) {
return talentio.split('').reverse().join('')
}
talentio="Anu radha"
document.write(ReverseString(talentio))
}
catch(err) {
document.getElementById("demo").innerHTML =err.msg;
}
</script>
</body>
</html>