<?php
/**
 * Created by PhpStorm.
 * User: User_Piotr
 * Date: 2015-02-28
 * Time: 13:07
 */
require_once ('ConnectToDB.php');
class SendToDB {
    /**
     * @param $str
     * class sends the parsed data from site to the database
     */
    public function __construct($str){
        $this->send($str);
    }

    /**
     * @param $str
     * function gets the connection from PDO object, creates the query and sends to the database
     */
    public function send($str){
        $obj = new ConnectToDB();
        $connection = $obj->getPdo();
        $sql_query = 'INSERT INTO data (parsedData, date) VALUES ('.$str.',now());';
        $connection->exec($sql_query);
    }


}