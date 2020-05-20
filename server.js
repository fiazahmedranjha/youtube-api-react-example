const open=require("open");
const fs=require("fs");
const uuid=require("uuid");
const multer=require("multer");
const credentials=require("../credentials.json");
const storage=multer.diskStorage({
     destination:'/upload',
     filename(req,file,cb){
         const newFilename=`${uuid()}-${file.originalname}`
         cb(null,newFilename);
     }
})
  
  const uploadVideoFile=multer({
      storage:storage
  }).single("videoFile");
  app.post('./',uploadVideoFile,(req,res)=>{
      if(req.file){
          const filename=req.file.filename;
          const{title,description}=req.body;
          open(oAuth.generateAuthUrl({
              access_type:'offline',
              scope:'https://www.googleapis.com/auth/youtube.upload',
              state:JSON.stringify({
                  filename,title,description
              })
          }))
      }
  })

     app.get('/oauth2callback',(req,res)=>{
         res.redirect("http://localhost:3000/success")
         const{filename,title,description}=json.parse(req.query.state);
        oAuth.getToken(req.query.code,(err,tokens)=>{
            if(err){
                console.log(err)
                return;
            }
            oAuth.setCredentials(tokens);
            youtube.video.insert({
              resource:{  
                  snippet:{title,description},
                  status:{privacyStatus:'private'}
                        },
                        part:'snippet,status',
                        media:{
                            body:fs.createReadStream(filename)
                        }

            },(err,data)=>{
                console.log("done");
                process.exit();
            })
        })
        });
     
const oAuth=youtube.authenticate({
    type:"oauth",
    client_id:credentials.web.client_id,
    client_secret:credentials.web.client_secret,
    redirect_url:credentials.web.redirect_uri[0]

})