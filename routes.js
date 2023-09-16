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
]

module.exports= routes
