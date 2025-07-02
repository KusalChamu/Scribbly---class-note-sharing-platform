import mongoose from "mongoose";

const UserDataSchema = mongoose.Schema(
            {
                FirstName: String,
                LastName: String,
                UserName: String,
                Email: String,
                Password: String
            }
);
        
        const User = mongoose.model("User", UserDataSchema);
        export default User;