var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var soapRequest = require('easy-soap-request');
var { transform } = require('camaro');
const { post } = require('.');
const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
};


/* GET home page. */
router.post('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var user = req.body.cusid;
    var pass = req.body.password;
    var payload = { subject: user };


    const template = {
        RETURN: {
            TYPE: '//SOAP:Body//RETURN/TYPE',
            CODE: '//SOAP:Body//RETURN/CODE',
            MESSAGE: '//SOAP:Body//RETURN/MESSAGE',
            LOG_NO: '//SOAP:Body//RETURN/LOG_NO',
            LOG_MSG_NO: '//SOAP:Body//RETURN/LOG_MSG_NO',
            MESSAGE_V1: '//SOAP:Body//RETURN/MESSAGE_V1',
            MESSAGE_V2: '//SOAP:Body//RETURN/MESSAGE_V2',
            MESSAGE_V3: '//SOAP:Body//RETURN/MESSAGE_V3',
            MESSAGE_V4: '//SOAP:Body//RETURN/MESSAGE_V4'
        },
        STATUS: '//SOAP:BODY//STATUS'
    };

    const url = 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CUSTPORTAL_AK&receiverParty=&receiverService=&interface=SI_CUST_LOGIN_AK&interfaceNamespace=http://portalakshaya.com';

    var val = 22;
    console.log(pass);
    const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_AK_PORTAL>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <PASS>${password}</PASS>\r\n         <USERNAME>${username}</USERNAME>\r\n      </urn:ZBAPI_AK_PORTAL>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`;

    var xmlData;
    (async() => {
        const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 10000 });
        const { headers, body, statusCode } = response;
        console.log(headers);
        console.log(body);
        console.log(statusCode);

        xmlData = body;
        const result = await transform(xmlData, template);
        //const result=parser.xml2json(xmlData, {compact: true, spaces: 4});

    })();
});
module.exports = router;