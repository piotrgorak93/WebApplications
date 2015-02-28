<?php

/**
 * Created by PhpStorm.
 * User: User_Piotr
 * Date: 2015-02-28
 * Time: 00:53
 */
class First
{

    function __construct()
    {
        include "views/first.html";
        include "app/functions/simple_html_dom.php";
        $this->getData();

    }
    function getData(){
        $html = file_get_html('http://www.nbp.pl/home.aspx?c=/ascx/Zloto_cena.ascx');
        $str = $html->save();

        $pattern = "<td width=\"80\" class=\"bgt2 right bold\">";
        $pattern_length = strlen($pattern);
        $start_cut = strpos($str, $pattern);
        $str = substr($str, $start_cut);
        $str = substr($str, $pattern_length);
        $stop_cut = strpos($str, "</td>");
        $str = substr($str, 0, $stop_cut);
        echo $str;
    }

}