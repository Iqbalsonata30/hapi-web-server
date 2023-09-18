const routes = [
    {
        method:"GET",
        path: "/",
        handler:(req,res) => {
            return "Hello World"
        }
    },
    {
        method:"*",
        path:"/",
        handler:(req,res) => {
            return "Halaman tidak dapat diakses dengan method tersebut"
        }
    },
    {
        method:"GET",
        path:"/about",
        handler:(req,res) => {
            return "About Page"
        }

    },
    {
        method:"*",
        path:"/about",
        handler:(req,res) => {
            return "Halaman tidak dapat diakses dengan method tersebut"        
        }     
    },
    {
        method:"*",
        path:"/{any*}",
        handler:(req,res) => {
            return "Halaman tidak dapat ditemukan"        
        }     
    },
    {
        method:"GET",
        path: "/hello/{name?}",
        handler:(req,res) => {
            const { name = "stranger" } = req.params
            const { lang } = req.query
            
            if (lang == 'id'){
                return `Hai,${name}!`
            }

            return `Hello,${name}!`
        }
    },
]

module.exports= routes
