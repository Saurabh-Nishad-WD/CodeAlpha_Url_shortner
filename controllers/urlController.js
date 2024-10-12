import { nanoid } from "nanoid";
import urlModel from "../models/urlModel.js";
const upload = async (req,res) => {
    try{
        const{redirectURL} = req.body;
        if(!redirectURL){
            return res.status(500).send("redirectURL id required");
        }

        const toredirectURL = redirectURL.trim();
        const isExists = await urlModel.findOne({toredirectURL});
        if(isExists){
            return res.status(200).send({
                message:"url successfully created",
                isExists
            });
        }

        const shortedURL = nanoid(8); 

        const url = await urlModel.create({
            shortedURL,
            redirectURL:toredirectURL
        });
        res.status(200).send({
            message:"URL succesfuly created",
            url
        })

    }
    catch(err){
        res.status(500).send(err);
        console.log(err);
    }
};

export default upload;
