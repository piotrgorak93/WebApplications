<?php
/**
 * Created by PhpStorm.
 * User: User_Piotr
 * Date: 2015-02-28
 * Time: 02:41
 */
require_once 'config/db.php';
class ConnectToDB {
    private $pdo;

    /**
     * @return mixed
     */
    public function getPdo()
    {
        return $this->pdo;
    }

    /**
     * @param mixed $pdo
     */
    public function setPdo($pdo)
    {
        $this->pdo = $pdo;
    }

    /**
     * class connects to the database using PDO and returns the connection
     */
    public function __construct(){
        $this->connect();
    }


    public function connect(){
        try
        {
            $this->setPdo(new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME.', '.DB_USER.', '.DB_PASS.''));

        }
        catch(PDOException $e)
        {
            echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
        }
    }

}