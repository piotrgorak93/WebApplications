<?php
require('ConnectToDB.php');
require('SendToDB.php');

/**
 * Created by PhpStorm.
 * User: User_Piotr
 * Date: 2015-02-28
 * Time: 15:33
 */
class GetData
{

    public function __construct()
    {
        include "simple_html_dom.php";
        $parsed_data = $this->getData('http://www.nbp.pl/home.aspx?c=/ascx/Zloto_cena.ascx');
        $this->send_to_db($parsed_data);
    }

    /**
     * @param $address_to_process
     * @return string function receives html document from address provided
     * function receives html document from $address_to_process and retrieves the price of gold
     */
    function getData($address_to_process)
    {
        $html = file_get_html($address_to_process);
        $str = $html->save();
        $pattern = "<td width=\"80\" class=\"bgt2 right bold\">";
        $pattern_length = strlen($pattern);
        $start_cut = strpos($str, $pattern);
        $str = substr($str, $start_cut);
        $str = substr($str, $pattern_length);
        $stop_cut = strpos($str, "</td>");
        $str = substr($str, 0, $stop_cut);
        return $str;
    }

    public function send_to_db($param)
    {
        new SendToDB($param);
        echo "Cron task executed";
    }
}