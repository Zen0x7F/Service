<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{param?}', function () {
    return view('welcome');
})->where('param', '[\/\w\.-]*');
