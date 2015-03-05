<?php

/**
 * Created by PhpStorm.
 * User: User_Piotr
 * Date: 2015-02-28
 * Time: 00:53
 */
include_once ('DownloadDataFromDB.php');
class First
{

    function __construct()
    {
        include "views/first.html";
        new DownloadDataFromDB();
    }


}