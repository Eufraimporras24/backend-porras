const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mySql = require('mysql')
const res = require('express/lib/response')

app.set(morgan('dev)'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((re, res, next)=>{

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")

    if (req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Method', "*")
        return res.status(200).json({})

    }

    next()
})

app.use ((req, res, next)=>{

    const error = new Error ('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next)=>{

    res.status(error.status || 500)
    ResizeObserver.json({

        error: {

            message: error.message
        }
    })
    })

    module.exporrts = app
