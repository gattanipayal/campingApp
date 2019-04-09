var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");

var data=[
	{
		name:"Amara hills",
		image:"https://images.unsplash.com/photo-1553787762-b5f5721f3270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
		description:"blah blah blah"
	},
	{
		name:"Amara hills",
		image:"https://images.unsplash.com/photo-1553787762-b5f5721f3270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
		description:"blah blah blah"
	},
	{
		name:"Amara hills",
		image:"https://images.unsplash.com/photo-1553787762-b5f5721f3270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
		description:"blah blah blah"
	},
	{
		name:"Amara hills",
		image:"https://images.unsplash.com/photo-1553787762-b5f5721f3270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
		description:"blah blah blah"
	}];

function seedDB(){
	//remove all campgrounds
	Campground.remove({},function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds!");
		//add campgrounds
		data.forEach(function(seed){
			Campground.create(seed,function(err,campground){
				if(err){
					console.log(err)
				}else{
					console.log("added campground");
					//add a comment
					Comment.create(
					{
						text:"This place is great, but I wish there was internet!",
						author:"Homer"
					},function(err,comment){
						if(err){
							console.log(err);
						}else{
							campground.comments.push(comment);
							campground.save();
							console.log("created new comment");
						}
					});
				}
			});
		});
	});
}

module.exports=seedDB;
