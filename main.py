import json
import webapp2
from google.appengine.api import mail

class RegistrationHandler(webapp2.RequestHandler):
    def post(self):
        r = json.loads(self.request.body)

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
