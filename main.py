import json
import webapp2
from google.appengine.api import mail
import txtlocal as sms




class RegistrationHandler(webapp2.RequestHandler):
    def post(self):
        r = json.loads(self.request.body)
        res = sms.sendSMS('sirimala.sreenath@gmail.com', '933c0293154a0a0c11b3258aed4d2c3de6659db2', '91'+r['phoneNo'],'TXTLCL', 'OTP verification number is'+r['phoneNo'] )
        print "\n\nprinting the response\n\n", res
        message = mail.EmailMessage()
        message.sender = "vamsi0493@gmail.com"
        message.to = r['emailId']
        message.body = """
					I've invited you to Example.com!
					To accept this invitation, click the following link,		
					or copy and paste the URL into your browser's address
					bar"""

        message.send()
        
        self.response.write(r['emailId'])
        

app = webapp2.WSGIApplication([
    ('/rest/register', RegistrationHandler)
], debug=True)
