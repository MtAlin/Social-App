<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\StoriesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(["middleware" => 'auth:sanctum'], function(){

    Route::prefix('auth')->group(function () {
        Route::post('/logout', [AuthController::class, 'logoutUser']);
        Route::get('/login/users', [AuthController::class, 'getUser']);
        Route::get('/users/{id}', [AuthController::class, 'getUserById']);
    });

    Route::prefix('posts')->group(function () {
        Route::get('/', [PostController::class, 'getPosts']);
        Route::post('/create', [PostController::class, 'createPost']);
        Route::get('/profile/{id}', [PostController::class, 'getUserProfilePost']);
    });

     Route::prefix('comments')->group(function () {
        Route::get('/{id}', [CommentsController::class, 'getUserComment']);
        Route::post('/create', [CommentsController::class, 'createComment']);   
    });
   
      Route::prefix('stories')->group(function () {
        Route::get('/', [StoriesController::class, 'getUserStorie']);
        Route::post('/upload', [StoriesController::class, 'uploadStorie']);   
    });
});



// Auth routes
Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);


