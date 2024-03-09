#!/run/current-system/sw/bin/python3

import imaplib

obj = imaplib.IMAP4_SSL('imap.gmail.com',993)
obj.login('username@gmail.com','PASSWORD') # Your email and password go here
obj.select()
print(len(obj.search(None, 'UnSeen')[1][0].split()))
