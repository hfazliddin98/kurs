from django.urls import path
from users.views import home, login, signup

urlpatterns = [
    path('', home, name='home'),
    path('login/', login, name='login'),
    path('signup/', signup, name='signup'),
]

