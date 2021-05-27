<!DOCTYPE html>
<html>

<head>
  <link rel="icon"
    type="image/png"
    href="icon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
<title>wiki pages recently discovered</title>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-43126621-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-43126621-2');
</script>

<link rel="stylesheet" type="text/css" href="style.css"/>

</head>

<?php

if (isset($_POST['submit'])) {
  $name = $_POST['wiki'];

  $mailTo = "richard@hughes.ie";
  $headers = "An interesting wiki article";

  mail($mailTo, $headers);
  header("Location: wiki.php?sent");
}
 ?>

<body>

<div class="a">
<h1><a href="index.html" title="Back to the start">Richard Hughes</a></h1>
<h4><a href="music.html">Music</a> &middot <a href="scores.html">Scores</a> &middot <a href="projects.html">Projects</a> &middot <a href="concerts.html">Concerts</a></h4>
<h1 style="padding-top: 0px;">interesting wikipedia articles recently discovered</h2>
</div>


<table>
  <tr><td>
<p>

<f class="a", id="projects">
<a href="https://en.wikipedia.org/wiki/Actor%E2%80%93network_theory" target="_blank">
  Actor–network theory</a>

<br><br>

  <a href="https://en.wikipedia.org/wiki/Tuatha_D%C3%A9_Danann" target="_blank">
    Tuatha Dé Danann</a>

  <br><br>

  <a href="https://en.wikipedia.org/wiki/Imagined_community" target="_blank">
    Imagined community</a>

  </f></td></tr></table>

  <form class="contact-form" action="wiki.php" method="post">
    <p>send me an interesting wikipedia article :)</p>
    <input type="text" name="wiki"><br>
    <button type="submit" name="submit">send</button>
  </form>

  <footer>&copy Richard Hughes 2020 </footer> </div> <!-- style="padding-top:25em" -->
  </body>

  </html>
