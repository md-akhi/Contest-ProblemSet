<?php
// 1
$line = readline();
[$a, $b] = explode(' ', $line);
echo $a + $b;




// 2
$n = readline();
$list = readline();
$a = explode(' ', $line);
$answer = 0;
for ($i = 0; $i < $n; $i++)
   $answer += $a[i];
echo $answer;
?>