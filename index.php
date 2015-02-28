<?php
/**
 * Created by PhpStorm.
 * User: User_Piotr
 * Date: 2015-02-28
 * Time: 00:39
 */
require_once('models/First.php');
require_once('models/Second.php');
require_once('models/Third.php');
include ('views/header.html');
include ('views/home.html');
new First();
new Second();
new Third();
include ('views/footer.html');