<?php
/**
 * Created by PhpStorm.
 * User: User_Piotr
 * Date: 2015-03-04
 * Time: 13:28
 */
require_once 'app/functions/ConnectToDB.php';


class DownloadDataFromDB
{
    private $connection;

    /**
     * @return mixed
     */
    public function getConnection()
    {
        return $this->connection;
    }


    public function setConnection()
    {
        $tmp = new ConnectToDB();
        $this->connection = $tmp->getPdo();
    }


    public function createQueryAndRetrieveData()
    {
        $sql_query = "SELECT parsedData FROM data ORDER BY dateStamp;";
        $statement = $this->getConnection()->query($sql_query);
        $sql_query2 = "SELECT  date FROM data ORDER BY dateStamp;";
        $statement2 = $this->getConnection()->query($sql_query2);

        foreach($statement as $row)
        {
            echo("<div class=\"downloadedData\">".$row['parsedData']."</div>");

        }
        foreach ($statement2 as $row){
            echo("<div class=\"downloadedDate\">".$row['date']."</div>");

        }


    }

    public function __construct()
    {
        $this->setConnection();
        $this->createQueryAndRetrieveData();
    }


}