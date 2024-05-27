function addfun(){
    res.write(`<html>
                <head></head>
                <body>
                <h2>Add Page in Node</h2>
                </body>
                </html>
    `);
    res.end();
    
    // console.log('Add page');    
    
    
}

addfun();

module.exports = {addfun,text:'Sample page in console'};