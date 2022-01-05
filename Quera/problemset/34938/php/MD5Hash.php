<?php

class MD5Hash implements HashStrategy
{

    public function hash($data)
    {
        return md5($data);
    }

    public static function getInstance()
    {
        return new MD5Hash();
    }
}
