import json
import webapp2
from google.appengine.api import mail

class RegistrationHandler(webapp2.RequestHandler):
    def post(self):
        r = json.loads(self.request.body)

        message = mail.EmailMessage()
        message.sender = "Franklin Jefferson University <vamsi0493@gmail.com>"
        message.to = r['emailId']
        message.subject = "FJU email verification"
        message.body = """
					This is a Test EMAIL"""

        message.send()
        self.response.write(r['emailId'])

app = webapp2.WSGIApplication([
    ('/rest/register', RegistrationHandler)
], debug=True)
