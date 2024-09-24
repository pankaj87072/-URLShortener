const URL=require('../model/UrlSchema');
const shortid=require('shortid');


async function handleshortnerreq(req,res){
    const redirect=req.body;
    if(!redirect.urlfromclient)return res.status(400).send("Did Not get the URL");
    const shorturl=shortid();
    await URL.create({
    shortid:shorturl,
    RedirectUrl:redirect.urlfromclient,
    Noofclicks:0
});
return res.render('home',{
id:shorturl,
})
}
async function handleredirecttoshorturl(req,res){
    const shortid=req.params.shortid;
    const entry=await URL.findOne({shortid});
    if(entry){
        entry.Noofclicks++;
        await entry.save();
        res.redirect(entry.RedirectUrl);
    }
} 
async function handleanalyticid(req,res){
    const shortid=req.params.shortid;
    const value=await URL.findOne({shortid});
   res.send(`Noof clicks of this website is:${value.Noofclicks}`);
}
async function handlerendringejs(req,res){
    res.render('home');
}
module.exports={handleshortnerreq,handleredirecttoshorturl,handleanalyticid,handlerendringejs};