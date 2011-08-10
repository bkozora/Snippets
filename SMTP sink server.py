"""
In development, we need a SMTP Server to see the results of send mail via SMTP protocol in Python application. Instead of configure a mail daemon, we could use this little script to receive the SMTP request, and save each session into an EML file. *.eml could be viewed with your favorite email client, you need not send them out.
"""

from datetime import datetime
import asyncore
from smtpd import SMTPServer

class EmlServer(SMTPServer):
    no = 0
    def process_message(self, peer, mailfrom, rcpttos, data):
        filename = '%s-%d.eml' % (datetime.now().strftime('%Y%m%d%H%M%S'),
                self.no)
        f = open(filename, 'w')
        f.write(data)
        f.close
        print '%s saved.' % filename
        self.no += 1


def run():
    foo = EmlServer(('localhost', 25), None)
    try:
        asyncore.loop()
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
	run()