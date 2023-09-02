<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Stories;

class StoriesController extends Controller
{
    public function uploadStorie(Request $request)
    {

          // Validate the incoming request
        $validateimage = Validator::make($request->all(),[
            'image' => 'required|image|mimes:jpeg,png,jpg,gif', // Adjust validation rules as needed
        ]);

         if($validateimage->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateimage->errors()
                ], 401);
                
            } 

         if ($request->hasFile('image')) {
            $destinationPath = 'uploads';
            $myimage = $request->file('image')->getClientOriginalName();

            // Move the uploaded image to the public/uploads directory
            $request->file('image')->move(public_path($destinationPath), $myimage);
            $imageUrl = asset('uploads/' .  $myimage);
            // Create a new Stories model instance
            $image = new Stories;
            $image->user_id = auth()->id();
            $image->image = $destinationPath . '/' . $myimage; // Store the path to the image
            $image->save();
           
            return $imageUrl ;
            }

      

        // Handle the case when no valid image was uploaded
        return response()->json(['error' => 'Invalid image file'], 400);
    }

    public function getUserStorie(){
        $story= Stories::where("user_id",auth()->id())->get();
        return $story;
    }
}

