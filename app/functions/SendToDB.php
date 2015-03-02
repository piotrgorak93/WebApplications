<?php
/**
 * Created by PhpStorm.
 * User: User_Piotr
 * Date: 2015-02-28
 * Time: 13:07
 */
require_once('ConnectToDB.php');
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
        $sql_query = 'INSERT INTO data (parsedData, dateStamp, date) VALUES (:sqlquery,now(), :date1);';
        echo date("Y-m-d");
        $q = $connection->prepare($sql_query);
        /**
         * $var converts from e.g. 13,54 to 13.54
         */
        $var = str_replace(',','.',$str);
        $q->bindParam(':sqlquery', $var,PDO::PARAM_STR );
        $q->bindParam(':date1',date("Y-m-d"),PDO::PARAM_STR);
        $q->execute();
    }


}