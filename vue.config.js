module.exports={
    devServer:{
        // https:true,
        proxy:{
            '/api':{
                target:"http://api.zhuishushenqi.com",
                secure:false,
                changeOrigin:true,
                // https:true,
                pathRewrite:{
                    '^/api':""
                }
            }
        }
    }
}
