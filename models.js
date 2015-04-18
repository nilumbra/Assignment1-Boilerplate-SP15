var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');


var userSchema = mongoose.Schema({
	"instagram_name" : {type: String},
	"instagram_id" : {type: String},
	"instagram_access_token" : {type:String},
	"facebook_name" : {type: String},
	"facebook_id" : {type: String},
	"facebook_access_token" : {type:String}
});
userSchema.plugin(findOrCreate);

exports.User = mongoose.model('User', userSchema);


