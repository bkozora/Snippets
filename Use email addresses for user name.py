"""
Django's built in authentication system requires the username to be alpha-numeric only. Therefore, email addresses are invalid. However, in many cases, you would like to use an email address as the username. This snippet allows you to do so. It has the added benefit that if you want to continue using the regular username format, you can do that too. It's the best of both worlds!

To make sure proper credit is given, this code is modified from a django group posting from Vasily Sulatskov.

To use this file, save it in your project as something like: email-auth.py

Then, add the following lines to your settings.py file:

AUTHENTICATION_BACKENDS = (
    'yourproject.email-auth.EmailBackend',
 )
"""

from django.contrib.auth.models import User
from django.core.validators import email_re

class BasicBackend:
    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None

class EmailBackend(BasicBackend):
    def authenticate(self, username=None, password=None):
        #If username is an email address, then try to pull it up
        if email_re.search(username):
            try:
                user = User.objects.get(email=username)
            except User.DoesNotExist:
                return None
        else:
            #We have a non-email address username we should try username
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                return None
        if user.check_password(password):
            return user