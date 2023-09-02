<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;


class PostController extends Controller
{
  public function createPost(Request $request ){
        $post = new Post;
        $post->name = auth()->user()->name;
        $post->profilePic = $request->profilePic;
        $post->desc = $request->desc;
        $post->img = $request->img;
        $post->user_id = auth()->id();
        $post->save();
        return $post;

    }

    public function getPosts (){
        return Post::all();
    }


     public function getUserProfilePost($id){
       $posts = Post::where('user_id', $id)->get();
        return $posts;

    }
  
}
