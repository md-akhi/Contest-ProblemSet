<?php

class SHA1Hash implements HashStrategy
{

    public function hash($data)
    {
        return sha1($data);
    }

    public static function getInstance()
    {
        return new SHA1Hash();
    }
}