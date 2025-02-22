import urlModel from "../models/urlModel.js";

const getShortenedId = async (req,res) =>{
    try{
        const shortedURL = await req.params.shortedURL.trim();
        const gettingURL = await urlModel.findOne({shortedURL});
        if (!gettingURL) {
            return res.status(404).send({ message: "URL not found" });
        }
       res.redirect(gettingURL.redirectURL);

        
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

export default getShortenedId;
