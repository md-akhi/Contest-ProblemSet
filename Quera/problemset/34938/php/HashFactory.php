<?php

class HashFactory
{
    private  $hashStrategies = array();

    public function register($name, HashStrategy $strategy)
    {
        if (isset($hashStrategies[$name])) {
            throw new Exception("Strategy Has Been Registered");
        }
        $hashStrategies[$name] = $strategy;
    }

    public function make($name)
    {
        if (!isset($hashStrategies[$name])) {
            throw new Exception("Strategy Not Supported");
        }
        return $hashStrategies[$name];
    }
}