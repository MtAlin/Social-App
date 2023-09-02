<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Comments;
use App\Models\User;

class CommentsController extends Controller
{
       public function createComment(Request $request ){
        $comment = new Comments;
        $comment->desc = $request->desc;
        $comment->user_id = Auth::user()->id;
        $comment->post_id = $request->post_id;
        $comment->save();
        return $comment;

    }

    public function getUserComment($postId){

         // Retrieve the associated user using a join
        $users = User::join('comments', 'users.id', '=', 'comments.user_id')
        ->where('comments.post_id', $postId)
        ->get(['users.*', 'comments.desc']);

        return $users; // Return the $users variable, not $user
    }

}
