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
            $this->setPdo(new PDO('mysql:host=sql.s22.vdl.pl;dbname=pgorak93_mzk;charset=utf8', 'pgorak93_reader', 'zaq12wsx'));

        }
        catch(PDOException $e)
        {
            echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
        }
    }

}