#!/usr/bin/env python
 
import urllib
 
def sendSMS(uname, hashCode, numbers, sender, message):
    data =  urllib.urlencode({'username': uname, 'hash': hashCode, 'numbers': numbers,
        'message' : message, 'sender': sender})
    data = data.encode('utf-8')
    # request = urllib.request("http://api.textlocal.in/send/?")
    f = urllib.urlopen("http://api.textlocal.in/send/?", data)
    fr = f.read()
    return(fr)
 
# resp =  sendSMS('sirimala.sreenath@gmail.com', '933c0293154a0a0c11b3258aed4d2c3de6659db2', '919492584326',
#     'TXTLCL', 'This is your message')
# print (resp)